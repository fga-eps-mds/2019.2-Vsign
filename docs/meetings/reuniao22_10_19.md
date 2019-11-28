# Ata da Reunião de 22/10/2019

## Histórico de Revisões

|Versão|Descrição|Autor|
|:----:|:--------|:---:|
|0.1|Redação da ata em tempo de reunião|Victor Gomide|
|1.0|Estruturação e detalhamento|Victor Gomide|

## Descrição
* **Tipo:** Remota (via Zoom)
* **Início:** 19:00
* **Fim:** 20:00

***

* Terceira reunião com o **Cliente**;
    - Fabrício Buzeto, representante da equipe de desenvolvimento da bxblue (**Empresa**).
- Apresentação do produto atual já em ambiente de produção para o cliente;
- Apresentação da ideia do nosso produto como um serviço a ser prestado para diferentes empresas, não só para a bxblue;
- Empresas podem ter mais de um contrato por produto;
- Landing page;
- Quando se criar um contrato no Vsign, o cliente recebe um link com um token para assinar o contrato;
- Esse link tem prazo de validade;
- Página de instruções;
- Pretendemos fazer uma interface que se adapte com a identidade visual da empresa que nos contratou;
- Página de envio de documentos;
- Para enviar o documento, pretendemos permitir o uso do celular
    * Por meio de QR Code, por exemplo
- Página do roteiro;
    * Funcionalidade de reportar roteiro
- Página de gravação;
    * Tour/tutorial de como gravar
    * Mantemos a divisão do roteiro em blocos pensando na experiência do usuário
- Novas funcionalidades de upload de vídeo, áudio e imagens
    * Segurança
    * Não trabalharemos com o vídeo na comparação, apenas imagens obtidas por meio do vídeo
    * Validação feita de forma assíncrona pela nuvem
    * Empresa notificada por meio do Web Hook (?)
    * Url disponibilizado pela própria empresa onde será avisada
    * Pensaremos em outras informações em breve
        - Ex.: quanto tempo demorou
- Personalizável para diferentes empresas:
    * Ex.: "quero que a comparação tenha 80% de certeza"
- Embora seja um trabalho de faculdade, queremos obter um resultado robusto
    * Para que possa ser minimamente aproveitado
- Falamos sobre as tecnologias (linguagens) que estamos utilizando
    * API Rest: bastante utilizada atualmente para integração
- Falamos sobre o andamento do projeto
    * Está caminhando bem
- Falamos sobre a disciplina
    * Release 2 = MVP
- Falamos sobre o planejamento para as próximas Sprints
    * Nas próximas 3 Sprints iremos fechar o escopo, e então iremos focar na finalização
- Temos limitações
    * Membros com mais dificuldade
    * Estamos pareando e buscando outras formas de ajudar
- Tentar melhorar experiência de usuário e validação
- Tentar atender as expectativas da bxblue
- Apresentação foi bem extensa
- Gostou da forma como tratamos o problema como um produto
- Crescemos um pouquinho o escopo desde a última reunião, o que não é uma coisa ruim
- Achou a experiência legal
- Preocupado pois a parte principal ainda não foi implementada
- É bom que aprendemos a utilizar as ferramentas no início e resolvemos alguns problemas, mas o desafio ficou para o final, o que não é ruim, pois nesse tipo de projeto é tranquilo enfrentar um dragão de cada vez
- Ele pode nos ajudar com a comparação de blocos
- Gostou da nossa estrutura de APIs
- Nossa estrutura ficou parecida com algumas já existentes
- Achou interessante que temos tipos de contratos
- Como no momento temos só um tipo (empréstimo), seria interessante entender e documentar os pontos obrigatórios desse tipo de contrato
- Essa questão da porcentagem de confiabilidade não deveria ser uma escolha do cliente para contratos, não soa confiável
    * Porém isso não faz parte do nosso escopo
- Gostou da forma como solucionamos o problema de manter a evidência do vídeo gravado, porém isso pode pesar a banda larga do cliente
- O comportamento web e mobile tem sido diferente
    * Não conseguimos gravar vídeo com o celular
    * Pode ser um problema da biblioteca
    * Não mexer nisso por agora
- Manter consistência das telas (a logo está diferente em páginas diferentes)
    * São detalhes, estamos focando em problemas mais complicados, isso é fácil de ser ajustado
- Definir se o contrato foi de fato assinado, e senão peça para que assine de novo
    * Não diga porque tem que assinar de novo
    * Segurança vs. Usabilidade
- Para tornar mais real, geralmente o prazo de validade para se assinar um contrato é de apenas 48 horas
- Marcamos nossa próxima reunião de apresentação do andamento
    * Dia 12/11, terça-feira, 19h
- Perguntou sobre o LIFT e etc.
    * Já liberaram a bolsa mas houveram problemas com repasse e etc.
    * Pode demorar um pouco, mas provavelmente irá acontecer
    * É possível que o grupo mantenha o projeto, mesmo sem bolsa