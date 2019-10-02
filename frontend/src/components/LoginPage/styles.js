import React from 'react';
import styled from 'styled-components';
import { Panel } from 'rsuite';

const StyledPanel = styled.div`
    margin-top: 12rem;
`;

export function LoginPanel(props) {
    return (
        <StyledPanel>
            <Panel header={<h3>Login</h3>} bordered>{props.children}</Panel>
        </StyledPanel>
    );
}
