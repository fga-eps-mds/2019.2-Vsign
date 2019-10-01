import React from 'react';
import { FlexboxGrid, Timeline, Icon, Col } from 'rsuite';
import { SectionHeader, Section, SectionTitle, SectionSubTitle, StepTitle, StepText, StepItem } from './styles';
import HowItWorksImage from '../../assets/images/how-it-works.png';

export default function HowItWorks() {
    return (
        <Section>
            <FlexboxGrid justify="space-around">
                <FlexboxGrid.Item colspan={15}>
					<SectionHeader>
                        <SectionTitle>Como Funciona</SectionTitle>
                        <SectionSubTitle>Assinatura automatizada e segura para seus contratos.</SectionSubTitle>
                    </SectionHeader>
                	<FlexboxGrid justify="space-between" align="middle">
						<FlexboxGrid.Item componentClass={Col} colspan={24} md={12} className="text-center">
							<img src={HowItWorksImage} width="90%" />
						</FlexboxGrid.Item>
                    	<FlexboxGrid.Item componentClass={Col} colspan={24} md={10} mdPull={2}>
                    		<Timeline className="how-it-works">
    							<Timeline.Item dot={<Icon icon="check-circle" style={{ color: '#ff6583' }} />}>
      								<StepTitle>Integração</StepTitle>
      								<StepText>Integre seu sistema com a Vsign através de nossa API.</StepText>
    							</Timeline.Item>
								<Timeline.Item dot={<Icon icon="exclamation-triangle" style={{ color: '#6d64fe' }} />}>
									<StepTitle>Envio</StepTitle>
									<StepText>Envie seus contratos para nossa plataforma.</StepText>
								</Timeline.Item>
								<Timeline.Item dot={<Icon icon="info-circle" style={{ color: '#ff6583' }} />}>
									<StepTitle>Assinatura</StepTitle>
									<StepText>Seus clientes realizam a assinatura através da gravação de um vídeo em nossa plataforma.</StepText>
								</Timeline.Item>
								<Timeline.Item dot={<Icon icon="check-circle" style={{ color: '#6d64fe' }} />}>
									<StepTitle>Resultado</StepTitle>
									<StepText>Notificamos você logo após a assinatura do contrato.</StepText>
								</Timeline.Item>
  							</Timeline>
                    </FlexboxGrid.Item>

                </FlexboxGrid>
            </FlexboxGrid.Item>
                </FlexboxGrid>
        </Section>
    );
};
