import React, { useState } from 'react';
import { Content, ButtonToolbar, Button, FlexboxGrid, Container, Form, FormGroup, ControlLabel, FormControl } from 'rsuite';
import { LoginPanel, InvalidSpan } from './styles';
import { loginUser } from '../../graphql/mutations';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setUserName } from '../../actions/user/user_actions';

function LoginPage({ history, ...props }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [wrongPassword, setWrongPassword] = useState(false);
	const { setUserName } = props;

	const handleLogin = (email, password) => {
		const token = localStorage.getItem("userToken");

		token ? history.push("/contracts") : loginUser({email, password}).then(({ data }) => {
			if (data.login) {
				localStorage.setItem("userToken", data.login.token);
				setUserName(data.login.name);
				history.push("/contracts");
			} else {
				setWrongPassword(true);
			}
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
								{ wrongPassword ? <InvalidSpan>Login/Senha inválidos</InvalidSpan> : null}
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

const mapDispatchToProps = dispatch => bindActionCreators({ setUserName }, dispatch);

export default connect(null, mapDispatchToProps)(LoginPage);
