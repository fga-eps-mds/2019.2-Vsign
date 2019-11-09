import React from 'react';
import { Container } from 'rsuite';
import SigningSteps from '../Shared/SigningSteps';
import Navbar from '../RecordPage/Navbar';
import SigningTips from '../SigningTips/SigningTips';
import { logUser, notifyAccessDenied } from '../../utils/checkToken';
import { getContract } from '../../graphql/queries';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setScriptAction, setOrderAction } from '../../actions/contract';
import { setUserNameAction } from '../../actions/user';
import { createSessionAction } from "../../actions/session";

function Introduction({ history, ...props }) {
  const { id } = props.match.params;
  const { setUserNameAction, setScriptAction, setOrderAction, createSessionAction } = props;

  getContract(id, "")
    .then(({ data }) => {
      const { token, name } = data.getContract.user;

      logUser(token, name, setUserNameAction);

      // Set authenticated to true;
      createSessionAction();

      // save contract info on redux
      setScriptAction(data.getContract.script);
      setOrderAction(data.getContract.order);
    })
    .catch(error => {
      console.log("Error when querying contract");
      notifyAccessDenied();
      history.push("/login");
    })

  return (
    <Container>
      <Navbar />
      <SigningSteps history={history} />
      <SigningTips />
    </Container>
  )
};

const mapDispatchToProps = dispatch => (
  bindActionCreators(
    {
      setScriptAction,
      setOrderAction,
      setUserNameAction,
      createSessionAction
    },
    dispatch
  )
);

export default connect(null, mapDispatchToProps)(Introduction);