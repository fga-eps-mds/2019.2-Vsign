# Histórico de Versão
| Data        |Versão   | Descrição       | Autor
|-------------|---------|-----------------|-------------|
| 04/09/2019  |1.0      |Introdução, Posicionamento(parcial), estrutura geral do documento |Marcos Gabriel Tavares|
| 05/09/2019  |2.0      |Descrição do problema, Usuário, Principais necessidades do usuário, Ambiente do usuário, Perspectiva no produto e Recursos do produto|Marcos Vinicius Lima Raimundo|
| 06/09/2019  |2.5      |Sentença de posicionamento, complemento da descrição do problema, visão geral do documento, referências, envolvidos, revisão do documento| William Thalisson Pereira Vieira|

# 1. Introdução
----
## 1.1. Objetivos

O objetivo deste documento é explicar e esclarecer a respeito do escopo do projeto, auxiliando os desenvolvedores e leitores a entender melhor a proposta do produto. Outro objetivo deste documento é introduzir o posicionamento do software frente ao problema a se solucionar, aos seus usuários e ao mercado em que se encontra.

## 1.2. Escopo
No mundo contemporâneo é cada vez mais difícil se apresentar fisicamente para, por exemplo, assinar um contrato, o que é o problema alvo que este projeto almeja solucionar. Diante desse dilema, o Vsign visa permitir que o usuário assine contratos com afiliados em qualquer lugar com acesso a internet.


## 1.3. Visão Geral do Documento
Este documento contém informações a respeito das características do projeto sendo desenvolvido esclarecendo o problema que se busca mitigar e as soluções propostas. Este documento está organizado da seguinte maneira:
- Posicionamento: descrição do produto e vantagens quanto as opções vigentes;
- Descrição do usuário: Detalhamento do público alvo;
- Envolvidos: Descrição das atribuições dos membros da equipe;
- Descrição geral do produto: Resumo das funcionalidades do produto;

## 1.4. Referências
- A Estrutura de Tópicos do Documento de Visão, IBM Knowledge Center, disponível em: https://www.ibm.com/support/knowledgecenter/pt-br/SSYMRC_6.0.6/com.ibm.rational.rrm.help.doc/topics/r_vision_doc.html

- Documento de visão, 24/08/2009, Assembla, disponível em: https://app.assembla.com/wiki/show/modelo_projeto_uml/Documento_de_Vis%C3%A3o_

# 2. Posicionamento
----
## 2.1. Oportunidade de Negócios
As pessoas têm cada vez menos tempo disponível em suas agendas e agendar uma data para a assinatura de contratos que se encaixam nela é um problema que fica cada vez mais difícil de resolver. Diante deste cenário, o Vsign procura conectar seus usuários para que a assinatura de contratos aconteça no momento mais conveniente para todos os envolvidos.


## 2.2. Descrição do Problema

| O problea seria       | Assinar um contratos por vídeo  |
|-----------------------|------|
| Que afeta             | Pessoas que querem assinar contratos com a bxblue  |
| Cujo impacto é        | Atraso e desestimulo na concretização dos acordos  |
| Uma boa solução seria | Uma plataforma que permita a assinitura do contrato via vídeo  |

## 2.3. Sentença de Posição do Produto

| para          | Pessoas com indisponibilidade de tempo |
|---------------|---|
| Que           | Que desejam contratar os serviços da bxblue |
| O             | Vsign |
| Que           | Proporciona uma forma de assinatura fácil e rápida  |
| O Vsign       | Permite firmar contratos por meio de video  |
| DIferente de  | De assinar presencialmente ou utilizar outras formas de assinatura digital |
| O Vsign       | Garante ao usuário maior flexibilidade e autonomia no que diz respeito ao cadastramento  |
| Nosso produto | Proporciona comodidade,  |

# 3. Descrição do Usuário
----
## 3.1. Usuário
| Nome      |Descrição | Responsabilidades
|-----------|----------|------------------|
| Cliente   |Pessoa interessada em fechar um contrato para crédito consignado | Utilizar a plataforma oferecida pela Vsign para assinar este contrato|

## 3.2. Principais necessidade do usuário
| Necessidade |Problema | Solução proposta| Solução atual
|-------------|---------|-----------------|-------------|
|O cliante tem a necessidade um contrato| A dificuldade de assinar um documento físico| Um sistema web no qual o contratante pode enviar um vídeo confirmando que aceitou os termos do contrato| O cliente deve ir em algum posto de atendimento ou imprimir o contrato e enviar digitalizado via web|

## 3.3. Ambiente do usuário
A plataforma devo ser acessada a partir de um dispositivo conectado a internet, utilizando um navegador. A experiência do usuário deve ser semelhante em qualquer que seja o dispositivo, entretanto pode sofrer impacto pela velocidade da internet.   
# 4. Envolvidos
----
| NOME      |DESCRIÇÃO | PRINCIPAIS RESPONSABILIDADES
|-----------|----------|----------------------------|
| Cauê Mateus Oliveira | Product Owner | Definir a estratégia de trabalho e maximizar o valor do projeto|
| Kairon Velozo |Architect| Definir a arquitetura geral do sistema |
| Marcos da Silva Cabeceira | Membro da equipe de desenvolvimento.   | Desenvolver e manter a documentação e o software.|
| Marcos Gabriel Tavares |  Membro da equipe de desenvolvimento.   | Desenvolver e manter a documentação e o software.|
| Marcos Vinicius Lima Raimundo |  Membro da equipe de desenvolvimento.   | Desenvolver e manter a documentação e o software.|
| Thiago Pereira | DevOps | Responsavel pela integração continua|
| Victor Alves Gomide | Scrum Master | Garantir a realização da metodologia do Scrum|
| Vinicius Porto |  Membro da equipe de desenvolvimento.   | Desenvolver e manter a documentação e o software.|
| William Thalisson Pereivea Vieira |  Membro da equipe de desenvolvimento.   |Desenvolver e manter a documentação e o software.|

# 5. Visão geral do produto
----
# 5.1. Perspectiva do produto
O produto tem como objetivo proporcionar uma maneira simples e prática do usuário assinar um contrato com a bxblue. O produto tem como objetivo também verificar a documentação do usuário.
# 5.2. Recursos do produto
- Oferecer as duas opções de assinatura, a tradicional e a por vídeo.
- Na opção por vídeo, o produto deve mostar um texto para ser lido durante o vídeo, com as informações presentes no contrato.
- Deve ter uma maneira do cliente enviar fotos do documentos pessoais.
- O produto deve obter os dados presentes no vídeo e verificar com os contidos no contrato.
- Verificar também os dados pessoais.
