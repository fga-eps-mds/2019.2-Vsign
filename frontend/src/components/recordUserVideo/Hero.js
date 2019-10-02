import React from 'react';
import { FlexboxGrid, Col } from 'rsuite';
import { StyledHero } from './styled_components';
import { Title } from './styled_components';

export default function Hero() {
    return (
        <StyledHero>
            <FlexboxGrid justify="center">
                <FlexboxGrid.Item colspan={15}>
                    <FlexboxGrid justify="space-between" align="middle">
                        <FlexboxGrid.Item componentClass={Col} colspan={24} md={10}>
                            <Title>Gravando meu Video</Title>
                        </FlexboxGrid.Item>
                    </FlexboxGrid>
                </FlexboxGrid.Item>
            </FlexboxGrid>
        </StyledHero>
    );
};
