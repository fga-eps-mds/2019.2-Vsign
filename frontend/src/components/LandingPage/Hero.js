import React from 'react';
import { FlexboxGrid,  } from 'rsuite';

export default function Hero() {
    return (
        <FlexboxGrid justify="center">
          <FlexboxGrid.Item colspan={12}>
            <Panel header={<h3>Login</h3>} bordered>
              <Form fluid>
                <FormGroup>
                  <ControlLabel>Username or email address</ControlLabel>
                  <FormControl name="name" />
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Password</ControlLabel>
                  <FormControl name="password" type="password" />
                </FormGroup>
                <FormGroup>
                  <ButtonToolbar>
                    <Button appearance="primary">Sign in</Button>
                    <Button appearance="link">Forgot password?</Button>
                  </ButtonToolbar>
                </FormGroup>
              </Form>
            </Panel>
          </FlexboxGrid.Item>
        </FlexboxGrid>
    );
};
