import React, { useState } from 'react';
import { Content, ButtonToolbar, Button, FlexboxGrid, Container, Form, FormGroup, ControlLabel, FormControl } from 'rsuite';
import { LoginPanel } from './styles';

export default function LoginPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const LOGIN = gql`
		mutation login($email: String!, $password: String!) {
			login(
				email: $email
				password: $password
			) {
				token
			}
		}
	`
	return (
		<Container>
			<Content>
				<FlexboxGrid justify="center">
					<FlexboxGrid.Item colspan={8}>
						<LoginPanel>
							<Form fluid>
								<FormGroup>
									<ControlLabel>Email</ControlLabel>
									<FormControl name="email" />
								</FormGroup>
								<FormGroup>
									<ControlLabel>Senha</ControlLabel>
									<FormControl onChangeText={event => console.log(event.target.value)} name="password" type="password" />
								</FormGroup>
								<FormGroup>
									<ButtonToolbar>
										<Button href="/contracts" appearance="primary">Entrar</Button>
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
