import React from 'react'
import { Container, Content } from 'rsuite';
import Navbar from './Navbar';
import Hero from './Hero';
import Contracts from './Contracts';
import { checkToken, restrictedAccess } from '../../utils/checkToken';

export default function ContractsPage({ history }) {
    if (checkToken) {
        return (
            <Container>
                <Navbar />
                <Content>
                    <Hero />
                    <Contracts />
                </Content>
            </Container>

        )
    } else {
        restrictedAccess(history);
        return null
    }
}
