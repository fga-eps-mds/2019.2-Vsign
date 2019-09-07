## Histórico de Revisões

| Data       | Versão | Descrição    | Autor             |
|:----------:|:------:|:------------:|:-----------------:|
| 04/09/2019 | 0.1    | Abertura     | Marcos Cabeceira  |

-----

## 1. Introdução

### 1.1. Objetivos

Este documento fornece uma visão geral da arquitetura abrangente do VSign. Apresenta várias visualizações de arquitetura diferente para descrever os diferentes aspectos do sistema. Destina-se a transmitir aos interessados as decisões arquiteturais significativas que foram tomadas.

### 1.2. Escopo

Descrição da arquitetura do website de assinatura de contrator por vídeo, VSign.

### 1.3. Abreviações, Acrônimos e Definições

| Acrônimo | Definição                             |
|:--------:|:-------------------------------------:|
| API      | Application programming interface     |
| UI       | User Interface                        |
| NFR      | Non-Functional Requirements Framework |
| MVC      | Model-view-controller                 |
| UUID     | Identificador Único Universal         |

### 1.4. Referências

### 1.5. Visão Geral

## 2. Representação Arquitetural

### 2.1. Implementação

#### 2.1.1. Back-end (API)

A API será desenvolvida utilizando a arquitetura MVC (Model-View-Controller), implementado através do framework Ruby on Rails. Os benefícios da arquitetura incluem:

* Separação de conceitos
  * Facilidade em atender o conceito de DRY (Don't repeat yourself)
  * Esclarecimento de onde diferentes tipos de código devem estar para facilitar a manutenção
  * Diagrama MVC

![alt text](https://github.com/DSW12018/fluge/wiki/images/mvc.png "Fluxo MVC")

**Models**  - Uma model representa as informações (dados) da aplicação e as diretrizes para manipulação dessas informações. No Ruby on Rails, as models são utilizadas principalmente para gerenciar as regras de interação com as tabelas do banco de dados. Geralmente, recomenda-se colocar as regras de negócio do software nas models.

**Views** - As views representam a interface de usuário da aplicação. No VSign, essa camada não será implementada utilizando o Ruby on Rails.

**Controllers** - As controllers promovem a ligação entre as models e as views. No Rails, as controllers são responsáveis pelo processamento das requisições do browser, solicitando às models, quando necessário, dados armazenados no banco de dados. No VSign, as controllers terão a função de receber as requisições da interface de usuário.

#### 2.1.2. Front-end (UI)

A interface de usuário está desenvolvida utilizando a arquitetura Redux, implementada através da biblioteca React, desenvolvida pela equipe do Facebook.

![alt text](https://camo.githubusercontent.com/9de527b9432cc9244dc600875b46b43311918b59/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6d656469612d702e736c69642e65732f75706c6f6164732f3336343831322f696d616765732f323438343739302f415243482d5265647578322d657874656e6465642d7265616c2d6465636c657261746976652e676966 "Fluxo de dados Redux")

O Redux é uma arquitetura relativamente nova que introduz o conceito de fluxo de dados unidirecional. Nessa arquitetura, encontra-se geralmente os seguintes componentes:

**Actions** - São helpers que passam dados para os Reducers.

**Reducers** - Recebem as actions e transmitem os payloads para os callbacks.

**Store** - São contêineres que guardam o estado da aplicação.

## 2.2. Integração

A integração do back-end com o front-end será feita através de uma API GraphQL.

![alt text](https://github.com/DSW12018/fluge/wiki/images/graphql.png "Fluxo do GraphQL")

A utilização do GraphQL trás uma série de benefícios para o desenvolvimento do VSign.

* Endpoint único responsável por processar as requisições de busca e mutação.
  * Menor número de requisições a API, devido a possibilidade de especificação de necessidade de múltiplos recursos numa só requisição (under-fetching).
  * Busca específica de informações, evitando o retorno de dados desnecessários (over-fetching).

## 2.3. Deployment

Pode-se descrever, em alto nível, as seguintes etapas para a implantação do software nos ambientes de produção:

1. Pull request da funcionalidade para a branch de desenvolvimento;
2. Análise estática do código e build do software através de um sistema de integração contínua;
3. Mesclagem do código na branch de desenvolvimento;
4. Deploy do software para o ambiente de homologação (staging);
5. Mesclagem do código na branch master;
6. Deploy do software para o ambiente de produção.

A relação de ferramentas e serviços utilizados está disponível no Plano de Gerenciamento de Configuração de Software.

### 2.3.1. Back-end (API)

O processo de implantação para a API contém múltiplas etapas para assegurar que o código que chegue aos ambientes de produção foi verificado e validado com o uso de ferramentas automáticas e a prática de code review.

### 2.3.2. Front-end (UI)

As implantações na interface de usuário seguirão o mesmo princípio, mudando apenas, se necessário, as ferramentas automáticas. Além disso, é importante que a interface de usuário seja validada através de testes com pessoas.

## 2.4. Banco de Dados

Para a persistência de dados do VSign, será utilizado o sistema gerenciador de banco de dados PostgreSQL.

O PostgreSQL possui excelente integração com o framework Ruby on Rails. Isso permite a utilização de UUID para colunas id do tipo foreign key, além oferecer uma gama de tipos de dados, auxiliando no desenvolvimento de um bom projeto de banco de dados.

## 3. Metas e Restrições Arquiteturais

### 3.1. Metas

A arquitetura do VSign foi definida de forma a atender as seguintes metas:

**Desacoplamento** - A separação do software em duas frentes: interface de usuário (frontend) e API (backend), facilitará para a equipe de desenvolvimento a divisão de tarefas necessárias para a construção do software. Além disso, permite escolher as melhores soluções tecnológicas para a implementação de cada frente, levando em consideração quesitos de boas práticas de software e know-how da equipe.

**Deployment** - Oferecer maior flexibilidade para definição das fases necessárias para a implantação do software nos ambientes de produção, utilizando as ferramentas e serviços mais adequados para cada frente do sistema, levando em consideração tanto a otimização de custos, tal como requisitos técnicos.

**Evolução** - A necessidade do desenvolvimento de novas funcionalidades poderá ser feita de forma independente na API e na interface de usuário, inclusive, adotando outras tecnologias, desde que a integração entre as duas frentes seja mantida.

### 3.2. Restrições

A escolha arquitetural também levou a identificação de algumas restrições:

**Expertise** - A equipe não possui muito experiência de desenvolvimento nas tecnologias escolhidas. Entretanto, sabendo de tal restrição, buscou-se elaborar um Plano de Gerenciamento de Riscos para que o projeto possa ser desenvolvido com êxito.

**Padrões de Projeto** - Apesar de o software adotar padrões de projeto bem conhecidos no mercado, pode encontrar-se dificuldade para adoção de padrões de projetos requeridos para a avaliação do projeto.

## 4. Artefatos Arquiteturais

### 4.1 Funcionalidades

A descrição das funcionalidades do VSign são apresentadas na forma de histórias de usuário, no repositório do projeto. Elas possuirão critérios de aceitação que descrevem de forma técnica como deverá ser desenvolvida a funcionalidade, para que, dessa forma, seja cumprido os planos de gerenciamento e qualidade do projeto.

A implementação das funcionalidades ocorrerá de forma iterativa ao longo do projeto, obedecendo os termos descritos no desenho do processo.

Os artefatos para esta visão são:

* Histórias de Usuário
  * NFR

### 4.2 Integrações

Os artefatos de integração descrevem a decomposição do sistema, bem como as formas de comunicação entre os módulos.

Os documentos que são disponibilizados para essa visão são:

* Rich Picture
  * Diagrama de Classes
  * Diagrama de Sequência

## 5. Qualidade

Na API, os padrões adotados no projeto seguirão convenções do framework Ruby on Rails, que são amplamente utilizados por projetos de diversos tamanhos.

Na interface de usuário, a utilização do React, permitirá que o desenvolvimento seja realizado de forma eficiente e componentizado, com facilidade de integração com outras bibliotecas e serviços.

Os desenvolvedores do projeto também farão uso das folhas de estilo das linguagens de programação adotadas e contarão com ferramentas de análise estática, para assegurar que o desenvolvimento está de acordo com os requisitos de boas práticas de desenvolvimento de software.
