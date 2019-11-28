import React, { useState } from 'react';
import { loginUser } from '../../graphql/mutations';
import { connect } from 'react-redux';
import { setUserNameAction } from '../../actions/user';
import { createSessionAction } from "../../actions/session";
import { loginAction } from '../../actions/login';

function LoginPage({ history, ...props }) {
	const [ email, setEmail ] = useState("");
	const [ password, setPassword ] = useState("");
	const [ wrongPassword, setWrongPassword ] = useState(false);
	const [ disableSubmit, setDisableSubmit ] = useState(false);
	const { setUserNameAction, createSessionAction } = props;

	const handleLogin = (email, password) => {
		setDisableSubmit(true); 
		loginUser({ email, password })
		.then(({ data }) => {
			const { login } = data;
			if (login) {
				const { token, name } = login;
				sessionStorage.setItem("userToken", token);
				createSessionAction();
				setUserNameAction(name);
				props.loginAction();
			} else {
				setWrongPassword(true);
			}
			setDisableSubmit(false); 
		}).catch(error => {
			setWrongPassword(true);
			setDisableSubmit(false); 
		});
	}

	return (
		<div class="container d-flex" style={{ height: '100vh' }}>
    		<div class="row align-self-center" style={{ width: '100vh' }}>
				<div class="col-12 col-md-4 mx-auto">
					<div className="card">
						<div className="card-header text-center">
							<h5>Login</h5>
						</div>
						<div className="card-body">
							<div class="form-group">
								<label>Email</label>
								<input className="form-control" name="email" type='email' onChange={event => setEmail(event.target.value)} />
							</div>
							<div class="form-group">
								<label>Senha</label>
								<input className="form-control" onChange={event => setPassword(event.target.value)} name="password" type="password" />
								{wrongPassword ? <div className="invalid-feedback">Login/Senha inválidos</div> : null}
							</div>
							<div className="form-group">
								<button className="btn btn-primary btn-block" disable={disableSubmit} onClick={() => handleLogin(email, password)}>Entrar</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const mapDispatchToProps = {
	loginAction,
	createSessionAction,
	setUserNameAction
};

export default connect(null, mapDispatchToProps)(LoginPage);
