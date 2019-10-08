import React from 'react';
import { FlexboxGrid, Col, Button } from 'rsuite';
import { Section, SectionTitle, SectionSubTitle } from './styles';
import APIIntegrationImage from '../../assets/images/api-integration.png';

export default function API() {
    return (
        <Section id="api">
            <FlexboxGrid justify="center">
                <FlexboxGrid.Item colspan={15}>
                    <FlexboxGrid justify="space-between" align="middle">
                        <FlexboxGrid.Item className="text-center" componentClass={Col} colspan={24} md={10} mdPush={2}>
                            <img src={APIIntegrationImage} width="100%" alt="Ilustração Integração API" />
                        </FlexboxGrid.Item>
                        <FlexboxGrid.Item componentClass={Col} colspan={24} md={10}>
                            <SectionTitle>Integração Automática</SectionTitle>
                            <SectionSubTitle>Com nossa API a integração com seu sistema é 100% automática.</SectionSubTitle>
                            <Button
                                href="https://documenter.getpostman.com/view/5536571/SVtPXAiw?version=latest"
                                appearance="primary"
                            >Confira a nossa documentação</Button>
                        </FlexboxGrid.Item>
                    </FlexboxGrid>
                </FlexboxGrid.Item>
            </FlexboxGrid>
        </Section>
    );
};
