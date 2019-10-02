import React from 'react';
import { FlexboxGrid, Steps } from 'rsuite';
import { Section } from './styles';

export default function SigningSteps() {
    return (
        <Section>
            <FlexboxGrid justify="center">
                <FlexboxGrid.Item colspan={15}>
                    <Steps current={2}>
                        <Steps.Item title="Instruções" description="Saiba como assinar o contrato." />
                        <Steps.Item title="Documento" description="Importe o seu documento de identificação." />
                        <Steps.Item title="Assinatura" description="Grave o vídeo de assinatura do contrato." />
                        <Steps.Item title="Revisão" description="Revise a sua assinatura." />
                    </Steps>
                </FlexboxGrid.Item>
            </FlexboxGrid>
        </Section>
    );
};
