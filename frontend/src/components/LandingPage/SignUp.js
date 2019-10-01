import React from 'react';
import { FlexboxGrid, Button, Col } from 'rsuite';
import { SignUpSection } from './styles';
import { Title, StyledButton } from './styles';

export default function Hero() {
    return (
        <SignUpSection>
            <FlexboxGrid justify="center">
                <FlexboxGrid.Item colspan={15}>
                <FlexboxGrid justify="space-between" align="middle">
                    <FlexboxGrid.Item componentClass={Col} colspan={24} md={16}>
                        <h1>Adicione mais segurança a sua operação com a Vsign.</h1>
                    </FlexboxGrid.Item>
                    <FlexboxGrid.Item className="text-right" componentClass={Col} colspan={24} md={8}>
                        <StyledButton size="lg">Fale Conosco</StyledButton>
                    </FlexboxGrid.Item>
                </FlexboxGrid>
            </FlexboxGrid.Item>
                </FlexboxGrid>
        </SignUpSection>
    );
};
