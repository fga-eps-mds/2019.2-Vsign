# Histórico de Versão
| Data        |Versão   | Descrição       | Autor
|-------------|---------|-----------------|-------------|
| 04/09/2019  |1.0      |Introdução, Posicionamento(parcial), estrutura geral do documento. |[Marcos Gabriel Tavares](https://github.com/marcosgtavares)|
| 05/09/2019  |2.0      |Descrição do problema, Usuário, Principais necessidades do usuário, Ambiente do usuário, Perspectiva no produto e Recursos do produto.|[Marcos Vinicius Lima Raimundo](https://github.com/MarcosFloresta)|
| 06/09/2019  |2.5      |Sentença de posicionamento, complemento da descrição do problema, visão geral do documento, referências, envolvidos, revisão do documento.| [William Thalisson Pereira Vieira](https://github.com/williamtpv)|
| 11/11/2019 | 3.0 | Refatoramento do Documento de Visão.| [Marcos Gabriel Tavares](https://github.com/marcosgtavares)|

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
- LGDP:entenda o que é a Lei Geral de Proteção de Dados Pessoais, 31/05/2019, Estadão, disponível em: https://politica.estadao.com.br/blogs/fausto-macedo/lgpd-entenda-o-que-e-a-lei-geral-de-protecao-de-dados-pessoais/

# 2. Posicionamento
----
## 2.1. Oportunidade de Negócios
As pessoas têm cada vez menos tempo disponível em suas agendas e agendar uma data para a assinatura de contratos que se encaixam nela é um problema que fica cada vez mais difícil de resolver. Diante deste cenário, o Vsign procura conectar seus usuários para que a assinatura de contratos aconteça no momento mais conveniente para todos os envolvidos.


## 2.2. Descrição do Problema

| O problea seria       | Assinar um contratos por vídeo.  |
|-----------------------|---|
| Que afeta             | Pessoas que querem assinar contratos pela internet.  |
| Cujo impacto é        | Atraso e desestimulo na concretização dos acordos.  |
| Uma boa solução seria | Uma plataforma que permita a assinitura do contrato via vídeo.  |

## 2.3. Sentença de Posição do Produto

| Para          | Pessoas com indisponibilidade de tempo e necessidade urgente |
|---------------|---|
| Que           | Que desejam contratar os serviços dos assinantes do Vsign |
| O             | Vsign |
| é um          | Um serviço de assinatura digital  |
| Que       | Permite firmar contratos por meio de video de forma fácil e rápida |
| Diferente de  | De assinar presencialmente ou utilizar outras formas de assinatura digital como DocuSign ou HelloSign |
| O Vsign       | Garante ao usuário maior flexibilidade e autonomia no que diz respeito ao cadastramento e proporciona comodidade aos assinantes do Vsign |

# 3. Descrição do Usuário
----
## 3.1. Usuário
| Nome      |Descrição | Responsabilidades
|-----------|----------|------------------|
| Cliente.   |Empresa assinante do Vsign. | Utilizar a plataforma oferecida pela Vsign para oferecer a seus proprios clientes a opção de assinar seus contratos digitalmente através de vídeo.|
|Usuário da plataforma Vsign.|Cliente da empressa assinante.| Utilizar a plataforma oferecida pela Vsign para assinar seus contratos com o cliente digitalmente através de vídeo.|

## 3.2. Principais necessidade do usuário
| Necessidade |Problema | Solução proposta| Solução atual
|-------------|---------|-----------------|-------------|
|O cliente do Vsign tem a necessidade de facilitar a assinatura de seus contratos para seus proprios clientes.| A dificuldade de enviar um documento físico à seus clientes, de revisar os vídeos enviados por seus clientes manualmente, o que é pendente a erros que podem levar a problemas legais, e falta de confiança em outros serviços de assinatura digital. | Um sistema web no qual o cliente envia um token ao seus clientes que os redireciona para a pagina do Vsing onde o cliente da empresa pode enviar o documento requisitado e um vídeo confirmando que aceitou os termos do contrato e que checa a validade do documento enviado e do vídeo.| A empresa deve ter algum posto de atendimento, enviar uma copia fisica para seus cliente ou utilziar outro serviço de assinatura digital.|

## 3.3. Ambiente do usuário
A plataforma que os clientes do cliente terão acesso deve ser acessada a partir de um dispositivo conectado a internet, utilizando um navegador. A experiência do usuário deve ser semelhante em qualquer que seja o dispositivo, entretanto pode sofrer impacto pela velocidade da internet. O cliente devera customizar seus contratos atravez da API disponibilizada pelo Vsign. 
# 4. Envolvidos
----

|  NOME                           | FUNÇÃO     | GITHUB  
|---------------------------------|----------------|----------------------|
|Cauê Mateus Oliveira             |Product Owner, membro da Equipe de Gestão do Projeto.   | [@caue96](https://github.com/caue96)                     |
|Kairon Velozo                    |Architect, membro da Equipe de Gestão do Projeto.       | [@kairon-v](https://github.com/kairon-v)                     | 
|Thiago Pereira                   |DevOps, membro da Equipe de Gestão do Projeto.          | [@thiagorpereira](https://github.com/thiagorpereira)                     |   
|Victor Alves Gomide              |Scrum Master, membro da Equipe de Gestão do Projeto.    | [@victoralvesgomide](https://github.com/victoralvesgomide)                     | 
|Marcos da Silva Cabeceira        |Membro da equipe de desenvolvimento.   |  [@Foxtrot40](https://github.com/Foxtrot40)  | 
|Marcos Gabriel Tavares           |Membro da equipe de desenvolvimento.   | [@marcosgtavares](https://github.com/marcosgtavares)  |   
|Marcos Vinicius Lima Raimundo    |Membro da equipe de desenvolvimento.   | [@MarcosFloresta](https://github.com/MarcosFloresta)  |   
|Vinicius Porto                   |Membro da equipe de desenvolvimento.   | [@ViniciusPuerto](https://github.com/ViniciusPuerto)  |  
|William Thalisson Pereivea Vieira|Membro da equipe de desenvolvimento.   | [@williamtpv](https://github.com/williamtpv)  |

# 5. Visão geral do produto
----
# 5.1. Perspectiva do produto
O produto tem como objetivo proporcionar uma maneira simples e prática dos usuários dos seus clientes assinarem contratos. O produto tem como objetivo também verificar a documentação dos usuários dos clientes e almeja se adequar a Lei Geral de Proteção de Dados Pessoais(LGDP) que entrará em vigor em agosto de 2020.
# 5.2. Recursos do produto
- Oferecer a opção de assinatura por vídeo.
- Na opção por vídeo, o produto deve mostar um texto para ser lido durante o vídeo, com as informações presentes no contrato.
- Deve ter uma maneira do cliente enviar fotos do documentos pessoais.
- O produto deve obter os dados presentes no vídeo e verificar com os contidos no contrato.
- Verificar também os dados pessoais.
