import React from 'react';
import { Container } from 'rsuite';
import SigningSteps from '../Shared/SigningSteps';
import Navbar from '../RecordPage/Navbar';
import SigningTips from '../SigningTips/SigningTips';
import { checkToken, restrictedAccess, logUser } from '../../utils/checkToken';
import { getContract } from '../../graphql/queries';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setScript, setOrder } from '../../actions/contract/contract_actions';
import { setUserName } from '../../actions/user/user_actions';

function Introduction({ history, ...props }) {
  const { id } = props.match.params;
  const { setUserName, setScript, setOrder } = props;

  getContract(id, "").then(({ data }) => {
    const { token, name } = data.getContract.user;
    // console.log(token, marcos);
    
    // if there's no token saved -> save new to log user
    // eslint-disable-next-line
    checkToken ? undefined : logUser(token, name, setUserName);

    // save contract info on redux
    if (data.getContract) {
      setScript(data.getContract.script);
      setOrder(data.getContract.order);
    } else {
      restrictedAccess(history);
    }
  })

  return (
    <Container>
      <Navbar />
      <SigningSteps history={history} />
      <SigningTips />
    </Container>
  )
};

const mapDispatchToProps = dispatch => bindActionCreators({ setScript, setOrder, setUserName }, dispatch);

export default connect(null, mapDispatchToProps)(Introduction);