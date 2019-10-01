import React from 'react';
import { FlexboxGrid, Button, Col } from 'rsuite';
import { StyledHero } from './styles';
import { Title, SubTitle } from './styles';
import HeroImage from '../../assets/images/hero.png';

export default function Hero() {
    return (
        <StyledHero>
            <FlexboxGrid justify="center">
                <FlexboxGrid.Item colspan={15}>
                    <FlexboxGrid justify="space-between" align="middle">
                        <FlexboxGrid.Item componentClass={Col} colspan={24} md={10}>
                            <Title>Assine contratos com segurança</Title>
                            <SubTitle>Assinatura através de gravação de vídeo com análise automática e notificação dos resultados em tempo real.</SubTitle>
                            <Button size="lg">Contrate Agora</Button>
                        </FlexboxGrid.Item>
                        <FlexboxGrid.Item componentClass={Col} colspan={24} md={13} mdPush={1}>
                            <img src={HeroImage} width="100%" />
                        </FlexboxGrid.Item>
                    </FlexboxGrid>
                </FlexboxGrid.Item>
            </FlexboxGrid>
        </StyledHero>
    );
};
