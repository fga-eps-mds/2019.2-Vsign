import React from 'react';
import { Content, ButtonToolbar, Button, FlexboxGrid, Container, Form, FormGroup, ControlLabel, FormControl } from 'rsuite';
import { LoginPanel } from './styles';

export default function LoginPage() {
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
									<FormControl name="password" type="password" />
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
