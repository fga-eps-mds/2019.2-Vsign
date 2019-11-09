import React, { useState } from 'react';
import { Content, ButtonToolbar, Button, FlexboxGrid, Container, Form, FormGroup, ControlLabel, FormControl } from 'rsuite';
import { LoginPanel, InvalidSpan } from './styles';
import { loginUser } from '../../graphql/mutations';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setUserNameAction } from '../../actions/user';
import { createSessionAction } from "../../actions/session";

function LoginPage({ history, ...props }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [wrongPassword, setWrongPassword] = useState(false);
	const { setUserNameAction, createSessionAction } = props;

	const handleLogin = (email, password) => {
		// const token = localStorage.getItem("userToken");

		loginUser({ email, password })
			.then(({ data }) => {
				if (data.login) {
					localStorage.setItem("userToken", data.login.token);
					createSessionAction();
					setUserNameAction(data.login.name);
					history.push("/contracts");
				}
			})
			.catch(error => {
				setWrongPassword(true);
				console.log("Status 500");
			})
	}

	return (
		<Container>
			<Content>
				<FlexboxGrid justify="center">
					<FlexboxGrid.Item colspan={8}>
						<LoginPanel>
							<Form fluid>
								<FormGroup>
									<ControlLabel>Email</ControlLabel>
									<FormControl name="email" type='email' onChange={event => setEmail(event)} />
								</FormGroup>
								<FormGroup>
									<ControlLabel>Senha</ControlLabel>
									<FormControl onChange={event => setPassword(event)} name="password" type="password" />
									{wrongPassword ? <InvalidSpan>Login/Senha inválidos</InvalidSpan> : null}
								</FormGroup>
								<FormGroup>
									<ButtonToolbar>
										<Button appearance="primary" onClick={() => handleLogin(email, password)}>Entrar</Button>
										<Button href="/recover-password" appearance="link">Esqueceu sua senha?</Button>
									</ButtonToolbar>
								</FormGroup>
							</Form>
						</LoginPanel>
					</FlexboxGrid.Item>
				</FlexboxGrid>
			</Content>
		</Container>
	);
};

const mapDispatchToProps = dispatch => (
	bindActionCreators(
		{
			setUserNameAction,
			createSessionAction
		},
		dispatch
	));

export default connect(null, mapDispatchToProps)(LoginPage);
