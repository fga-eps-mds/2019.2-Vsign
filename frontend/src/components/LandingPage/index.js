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
import 'rsuite/dist/styles/rsuite-default.css';

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
