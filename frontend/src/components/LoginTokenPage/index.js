import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUserNameAction } from '../../actions/user';
import { createSessionAction } from "../../actions/session";
import { loginAction } from '../../actions/login';
import { loginByTokenMutation } from '../../graphql/mutations';


class LoginTokenPage extends Component {

	componentDidMount() {
		const { token } = this.props.match.params;
		const { loginAction, createSessionAction,  setUserNameAction } = this.props;
		loginByTokenMutation({ token })
			.then(({ data }) => {
				const { loginByToken } = data;
				if (loginByToken) {
					const { token, name } = loginByToken;
					sessionStorage.setItem("userToken", token);
					createSessionAction();
					setUserNameAction(name);
					loginAction();
				} else {
					// Apresentar mensagem de erro
					alert('erro');
				}
			}).catch(error => {
				// Apresentar mensagem de erro.
			});
	}

	render() {
		return (
			<div className="container d-flex" style={{ height: '100vh' }}>
				<div className="row align-self-center" style={{ width: '100vh' }}>
					<div className="col-12 col-md-4 mx-auto">
						<div className="jumbotron text-center">
							<h3>Validando Acesso</h3>
							<p className="lead">Por favor aguarde...</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = {
	loginAction,
	createSessionAction,
	setUserNameAction
};

export default connect(null, mapDispatchToProps)(LoginTokenPage);
