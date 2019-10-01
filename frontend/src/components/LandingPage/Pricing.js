import React from 'react';
import { FlexboxGrid, Panel, Col } from 'rsuite';
import { SectionTitle, Section, SectionSubTitle, PricingSection } from './styles';

export default function Pricing() {
    return (
        <PricingSection>
            <FlexboxGrid justify="center">
                <FlexboxGrid.Item colspan={15}>
                <FlexboxGrid justify="space-between" align="middle">
                    <FlexboxGrid.Item componentClass={Col} colspan={24} md={10}>
                        <SectionTitle>Preços</SectionTitle>
                        <SectionSubTitle>Oferecemos planos flexíveis, de acordo com as necessidades de seu negócio.</SectionSubTitle>
                        <SectionSubTitle>Pague apenas pelo que usar.</SectionSubTitle>
                    </FlexboxGrid.Item>
                    <FlexboxGrid.Item componentClass={Col} colspan={24} md={6}>
					<Panel bordered header="Inicial" className="text-center">
						<h3>R$ 10,00</h3>
						<p>Por contrato assinado</p>
                        <small>até 100 contratos por mês</small>
					</Panel>
                    </FlexboxGrid.Item>
                    <FlexboxGrid.Item componentClass={Col} colspan={24} md={6}>
					<Panel bordered header="Avançado" className="text-center">
						<h3>R$ 7,00</h3>
						<p>Por contrato assinado</p>
                        <small>acima 100 contratos por mês</small>
					</Panel>
                    </FlexboxGrid.Item>
                </FlexboxGrid>
            </FlexboxGrid.Item>
                </FlexboxGrid>
        </PricingSection>
    );
};
