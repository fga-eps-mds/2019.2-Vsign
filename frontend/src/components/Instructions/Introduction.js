import React from 'react';
import { Container } from 'rsuite';
import SigningSteps from '../Shared/SigningSteps';
import Navbar from '../RecordPage/Navbar';
import SigningTips from '../SigningTips/SigningTips';
import { checkToken, restrictedAccess } from '../../utils/checkToken';
import { getContract } from '../../graphql/queries';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setScript, setOrder } from '../../actions/contract/contract_actions';

function Introduction({ history, ...props }) {
  const { contract_token } = props.match.params;
  getContract("", contract_token).then(({data}) => {
    setScript(data.getContract.script);
    setOrder(data.getContract.order);
  })
  
  if (checkToken) {
    return (
      <Container>
        <Navbar />
        <SigningSteps history={history} />
        <SigningTips />
      </Container>
    )
  } else {
     restrictedAccess(history);
     return false;
  }
};

const mapDispatchToProps = dispatch => bindActionCreators({ setScript, setOrder }, dispatch);

export default connect(null, mapDispatchToProps)(Introduction);