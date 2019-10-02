import React from 'react';
import { FlexboxGrid, Col } from 'rsuite';
import { StyledHero } from './styles';
import { Title } from './styles';

export default function Hero() {
    return (
        <StyledHero>
            <FlexboxGrid justify="center">
                <FlexboxGrid.Item colspan={15}>
                    <FlexboxGrid justify="space-between" align="middle">
                        <FlexboxGrid.Item componentClass={Col} colspan={24} md={10}>
                            <Title>Meus Contratos</Title>
                        </FlexboxGrid.Item>
                    </FlexboxGrid>
                </FlexboxGrid.Item>
            </FlexboxGrid>
        </StyledHero>
    );
};
