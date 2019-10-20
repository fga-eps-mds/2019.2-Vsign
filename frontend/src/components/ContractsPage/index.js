import React from 'react'
import { Container, Content } from 'rsuite';
import Navbar from './Navbar';
import Hero from './Hero';
import Contracts from './Contracts';

export default function ContractsPage() {
    return (
        <Container>
            <Navbar />
            <Content>
                <Hero />
                <Contracts />
            </Content>
        </Container>
    );
}
