import React from 'react';
import { FlexboxGrid, Col } from 'rsuite';
import { Section, SectionTitle, SectionHeader, SectionSubTitle } from './styles';
import BxBlueLogo from '../../assets/images/bxblue-logo.png';

const customersList = [BxBlueLogo];

const Columns = () => {
    return customersList.map(customer => {
        return (
            <FlexboxGrid.Item key={customer} className="center" componentClass={Col} colspan={24} md={3}>
                <img src={customer} width="150px" alt="logo cliente" />
            </FlexboxGrid.Item>
        );
    });
}

export default function Customers() {
    return (
        <Section>
            <FlexboxGrid justify="space-around">
                <FlexboxGrid.Item colspan={15}>
                    <SectionHeader>
                        <SectionTitle>Clientes</SectionTitle>
                        <SectionSubTitle>Os melhores negócios confiam na Vsign para assinatura de seus contratos.</SectionSubTitle>
                    </SectionHeader>
                    <FlexboxGrid justify="space-around" align="middle">
                        <Columns />
                    </FlexboxGrid>
                </FlexboxGrid.Item>
            </FlexboxGrid>
        </Section>
    );
};
