import React from 'react';
import { FlexboxGrid, Col, Button } from 'rsuite';
import { Section, SectionTitle, SectionSubTitle } from './styles';
import APIIntegrationImage from '../../assets/images/api-integration.png';

export default function API() {
    return (
        <Section>
            <FlexboxGrid justify="center">
                <FlexboxGrid.Item colspan={15}>
                    <FlexboxGrid justify="space-between" align="middle">
                        <FlexboxGrid.Item className="text-center" componentClass={Col} colspan={24} md={10} mdPush={2}>
                            <img src={APIIntegrationImage} width="100%" />
                        </FlexboxGrid.Item>
                        <FlexboxGrid.Item componentClass={Col} colspan={24} md={10}>
                            <SectionTitle>Integração Automática</SectionTitle>
                            <SectionSubTitle>Com nossa API a integração com seu sistema é 100% automática.</SectionSubTitle>
                            <Button
                                href="https://web.postman.co/workspaces/94d6f612-917e-498a-b8cd-5381e28cc0cc/collections"
                                appearance="primary"
                            >Confira a nossa documentação</Button>
                        </FlexboxGrid.Item>
                    </FlexboxGrid>
                </FlexboxGrid.Item>
            </FlexboxGrid>
        </Section>
    );
};
