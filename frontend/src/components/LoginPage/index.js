import React, { useState } from 'react';
import { Content, ButtonToolbar, Button, FlexboxGrid, Container, Form, FormGroup, ControlLabel, FormControl } from 'rsuite';
import { LoginPanel, InvalidSpan } from './styles';
import { loginUser } from '../../graphql/mutations';

export default function LoginPage({ history }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [wrongPassword, setWrongPassword] = useState(false);

	const handleLogin = (email, password) => {
		loginUser({email, password}).then(({ data }) => (
			data.login === null ? setWrongPassword(true) : history.push("/contracts")
		))
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
