import React from 'react';
import { Container } from 'rsuite';
import SigningSteps from '../Shared/SigningSteps';
import Navbar from '../RecordPage/Navbar';
import SigningTips from '../SigningTips/SigningTips';
import { checkToken, restrictedAccess, logUser } from '../../utils/checkToken';
import { getContract } from '../../graphql/queries';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setScriptAction, setOrderAction } from '../../actions/contract';
import { setUserNameAction } from '../../actions/user';

function Introduction({ history, ...props }) {
  const { id } = props.match.params;
  const { setUserNameAction, setScriptAction, setOrderAction } = props;

  getContract(id, "").then(({ data }) => {
    const { token, name } = data.getContract.user;
    
    // if there's no token saved -> save new to log user
    // eslint-disable-next-line
    checkToken ? undefined : logUser(token, name, setUserNameAction);

    // save contract info on redux
    if (data.getContract) {
      setScriptAction(data.getContract.script);
      setOrderAction(data.getContract.order);
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

const mapDispatchToProps = dispatch => bindActionCreators({ setScriptAction, setOrderAction, setUserNameAction }, dispatch);

export default connect(null, mapDispatchToProps)(Introduction);