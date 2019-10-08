import React from 'react';
import { FlexboxGrid, Steps } from 'rsuite';
import { Section } from './styles';

export default function SigningSteps(history) {
   
    let url =  history.history.location.pathname
    let current = 0
    switch (url) {
        case "instructions":
            current = 0
        case "documents":
            current = 1
        case "/record":
                current = 2
            break;
        case "/review":
            current = 3
        default:
            break;
    }
    return (
        <Section>
            <FlexboxGrid justify="center">
                <FlexboxGrid.Item colspan={15}>
                    <Steps current={current}>
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
