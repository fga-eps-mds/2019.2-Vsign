import React from 'react';
import { Container } from 'rsuite';
import SigningSteps from '../Shared/SigningSteps';
import Navbar from '../RecordPage/Navbar';
import SigningTips from '../SigningTips/SigningTips';
import { logUser, notifyAccessDenied, notifyContractExpired } from '../../utils/checkToken';
import { getContract } from '../../graphql/queries';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setScriptAction, setOrderAction } from '../../actions/contract';
import { setUserNameAction } from '../../actions/user';
import { createSessionAction } from "../../actions/session";

function Introduction({ history, ...props }) {
  const { id } = props.match.params;
  const {
    setUserNameAction,
    setScriptAction,
    setOrderAction,
    createSessionAction,
    authenticated
  } = props;

  getContract(id)
    .then(({ data }) => {
      if (!data.getContract.expired) {
        const { token, name } = data.getContract.user;

        logUser(token, name, setUserNameAction, authenticated);

        // Set authenticated to true;
        createSessionAction();

        // save contract info on redux
        setScriptAction(data.getContract.script);
        setOrderAction(data.getContract.order);
      } else {
        notifyContractExpired();
        history.push("/contracts")
      }
    })
    .catch(error => {
      console.log("Error when querying contract", error);
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

const mapStateToProps = state => {
  const { session } = state;
  return session;
}

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

export default connect(mapStateToProps, mapDispatchToProps)(Introduction);