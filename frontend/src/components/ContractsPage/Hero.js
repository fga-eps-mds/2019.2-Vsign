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

            {/* <FlexboxGrid justify="center">
                <FlexboxGrid.Item colspan={12}>
                    <Grid fluid>
                        <Row className="show-grid">
                            <Col xs={12} lg={6}>
                                <Title>Assine contratos com segurança</Title>
                                <p>Com o Vsign, seus usuários estão em segurança.</p>
                            <Col xs={12} lg={6}>
                                Imagem topzera
                            </Col>
                            </Col>
                        </Row>
                    </Grid>
                </FlexboxGrid.Item>
            </FlexboxGrid> */}
        </StyledHero>
    );
};
