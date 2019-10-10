import React from 'react';
import { Container, Content } from 'rsuite';
import Navbar from './Navbar';
import Hero from './Hero';
import Team from './Team';
import Customers from './Customers';
import API from './API';
import HowItWorks from './HowItWorks';
import Pricing from './Pricing';
import SignUp from './SignUp';

export default function LandingPage() {
    return (
        <Container>
            <Navbar />
            <Content>
                <Hero />
                <HowItWorks />
                <Pricing />
                <API />
                <Customers />
                <SignUp />
                <Team />
            </Content>
        </Container>
    )
};
