## Histórico de Versão

| <center>Versão</center> | <center>Descrição</center> | <center>Autor</center> |
| :----: | :-------: | :---: |
| 0.1 | Resumo do artigo | [Cauê](https://github.com/caue96) |
| 0.2 | Uso de deploy contínuo no projeto | [Cauê](https://github.com/caue96) |

---

Foi feito uma análise crítica em cima do artigo "Continuous deployment at Facebook and OANDA". Acompanhado da análise crítica foi feito um resumo do artigo para facilitar o trabalho de se fazer um paralelo do artigo com nosso projeto Vsign.

---

# Resumo

### 1. Introdução
Updates pequenos e isolados, release imediato depois de desenvolvido e testado, decisão de quando soltar uma nova versão é do time, deploy totalmente automático. Produtividade escalável em comparação com deploy automático, com possibilidade de 20x crescimento de equipe e 50x crescimento de código e deploys mais rápidos. Melhora de produtividade, maior motivação dos desenvolvedores, diminuição dos riscos, maior estabilidade do software e aumento da qualidade. Conforme cresce o uso e aumenta a importância do software, mais crítico se torna garantir que a entrega seja contínua e sem falhas. Suporte a gerência de deploy contínuo é vital, desenvolvedores gostam que seus códigos tenham deploys rápidos, aumento de produtividade.

### 2. Deploy contínuo
É uma prática da engenharia de software que testa, verifica e realiza o deploy em ambiente e produção, sendo que podem levar horas até substituir o ambiente de uso atual a depender do tamanho do software. É utilizado dentro da metodologia de desenvolvimento ágil, sendo uma extensão da mesma, porém também é utilizado com outras metodologias ágeis. Para sistemas Web as atualizações ocorrem atualmente no ambiente de produção e nos aplicativos as atualizações ocorrem em ciclos de tempos definidos após irem para ambientes beta.

#### 2.1 Processo de deploy contínuo
Pequenos incrementos de atualizações independentes, quando update é finalizado o deploy ocorre logo em seguida. As atualizações são de responsabilidade de quem as desenvolveu, por isso desenvolvedores também são responsáveis por participarem de todos os ciclos de deploys (testes, configurações e suporte pós-deploy), pois assim em caso de uma eventual falha, a mesma pode ser corrigida rapidamente, por isso a importância de feedbacks rápidos. Deploy contínuo é orientado ao time dividindo objetivos em comum e descentralizando as tomadas de decisão, com isso os desenvolvedores tem bastante responsabilidade com todo o ciclo de vida do software e particularmente por decisões relacionadas as releases do software (importante utilizar as ferramentas adequadas para que se tenha menos chances de erro). O deploy contínuo envolve as práticas de testar, revisão de código, engenharia de releases e deploys, que pode ser feito de 3 formas diferente: - blue-green deployments (deploy realizado com a última build estável de forma gradual, começando com 1 porcento da base de usuários até 100% dos usuários, assim diminuindo a exposição aos riscos); - Dark launches (deploys realizados fora dos horários de pico, mudanças realizadas em quem não está utilizando o software, para os que estã usando as mudanças serão aplicadas após o término do uso); - staging/banking (mudanças são testadas em ambiente similar ao de produção com simulações de uso para verificar se tudo está em ordem e se houve alguma discrepância encontrada). Ferramentas de configuração são utilizadas para determinar quais usuário receberam as novas funcionalidades, pois se problemas ocorrerem o desenvolvedor corre para subir as atualizações.

#### 2.2 Transição para deploy contínuo
Introduzir deploy contínuo não é trivial e envolve uma mudança de cultura, e não se pode querer colocar sem antes entender a organização bem e com suporte adequado para caso algo de errado. Software altamente coesos e com baixo acoplamento são melhores trabalhados isoladamente, pois pequenas porções de mudanças tem menor probabilidade de dar algo errado em atualizações. Ferramentas de suporte são importantes, porém requerem investimento, elas aumentam produtividade e diminuem riscos, pois diminuem o número de atividades realizadas manualmente (ferramentas de infraestrutura de testes automátizados, sistema de gerenciamento de deploys, ferramenta de deploys e monitoramente da infraestrutura saõ exemplos de atividades que podem ser automatizadas e diminuirem riscos com uso de ferramentas). Muitas ferramentas são bastante customizadas, com isso se tem o trabalho inicial de configurar e adaptar as ferramentas para uso no projeto.

### 3. Análise quantitativa
#### 3.1 Produtividade
A produtividade foi calculada pelas linhas por código por ser uma métrica mais fácil de ser contada, mais entendível e estava disponível para  acesso fácil. Facebook gera mais atualizações na semana e com menos linhas de código por atualização do que a OANDA que gera menos atualizações na semana, porém com mais linhas de código por atualização. Produtividade dos desenvolvedores do Facebook se manteve estável através do tempo apesar do crescimento enorme no número de desenvolvedores. Desenvolvedores do Facebook preferem trabalhar em equipes menores para evitar problemas de comunicação e são incentivados através de feedbacks das métricas de seu progresso de trabalho. Produtividade se manteve constante no Facebook mesmo tendo o código aumentando em cerca de 50 vezes o tamanho em um período de 6 anos e os produtos ficaram bem mais maduros, juntamente com um código mais completo e mais ênfase em qualidade. O deploy contínuo não é necessariamente um contribuidor chave para escalabilidade da produtividade, pois existem diversos outros fatores que também são importantes como: acreditar na missão da empresa, remuneração, crescimento individual, realização com o trabalho e etc. Pode-se concluir que deploy contínuo não previne que a engenharia de uma organização escale a produtividade com um produto ficando maior e mais complexo. Na visão dos autores a qualidade é um fator que habilita a escalabilidade no desenvolvimento de software e deixa atividades rotineiras e repetitivas livre de erros, e a automatização facilita a realização de testes e coleta de métricas.

#### 3.2 Qualidade
O deploy contínuo carrega bastante responsabilidade para os desenvolvedores que acabam por escolher quando será realizado o deploy de seu próprio código, porém com isso gera a ele uma responsabilidade enorme com a quantidade de issues que vierem a ser abertas após o deploy do desenvolvedor. O Facebook separa suas issues em críticas, nivel médio e baixa prioridade, sendo que conforme o número de deploys crescem no mês, o número de issues também cresce, porém como o número de issues por deploy é muito pequeno, quase não se precisa fechar issue por deploy realizado. É possível gerenciar deploy contínuo sem ter times de teste separados e o time de engenharia de release não cresce a medida que o número de deploys cresce, pois se tem o foco em automatização. Um grande número de hotfixes mostra que a qualidade do código no período anterior não foi muito bom, o que acaba influenciando na produtividade da equipe, pois para corrigir os erros necessitará tempo.

#### 3.3 Fatores humanos
Alguns fatores humanos que influenciam na produtividade e qualidade diretamente são: troca de gerencimanto e motivação de desenvolvedores. O suporte de gestão pode afetar a produtividade de uma organização e desenvolvedores preferem deploys mais rápidos em vez de mais lentos.

### 4. Lições aprendidas
Algumas lições aprendidas pelo Facebook e pela OANDA durante o período observado foram as seguintes: desejabilidade de deploy contínuo; é necessário um investimento considerável e contínuo; desenvolvedores versáteis e qualificados são necessários; gerenciamento técnico é essencial; cultura de empoderamento; gerenciamento da relação risco-recompensa; Necessidade por retrospectivas objetivas quando falhas ocorrem; dependências consideradas prejudiciais; esforço extra para atualizações abrangentes no software; ausência de equipe de teste separada; convergência em mínimos locais; lançamento de produtos abaixo do padrão; suscetível à deformação de recursos e desempenho; suscetível à síndrome de não invenção no código; e variabilidade na qualidade.

### 5. Limitações do estudo
Dados foram analisados de somente duas empresas e durante somente um período de tempo, com isso os dados podem não representar o que acontece na maioria da empresas e acaba virando somente um hipótese para o contexto de outras empresas. As observações levantadas durante o artigo são subjetivos, outras organizações podem ter experiências completamente diferente do concluído pelos autores.

### 6. Conclusão
Os autores concluem baseado nos dados analisados do Facebook e da OANDA que o número de desenvolvedores e o tamanho de código escalam bastante com o uso de deploy contínuo e que desenvolvedores preferem pequenas releases do que maiores. Deploy contínuo é altamente dependente da gerência, que pode afetar a produtividade do time. Ferramentas customizadas, ambiente de teste e monitoramento de performance, são alguns dos pontos que consomem bastante trabalho dos recursos de engenharia.

---

# Análise crítica

### Vsign
Falando sobre a utilização de deploy contínuo no projeto Vsign, pode-se dizer que o projeto possui 3 diferentes deploys automáticos: servidor de homologação (branch develop), servidor de produção (branch master) e wiki (documentação na branch master).

Falando um pouco sobre esses 3, no caso dos deploys realizados no servidor de homologação, eles são realizados de forma automática a partir das atualizações que são subidas na *branch develop*, nos deploys realizados no servidor de produção e na wiki, eles são realizados de forma automática a partir das atualizações que são subidas na *branch master*, sendo que o servidor de produção é aquele que está sendo utilizando por usuários e a wiki é o espaço onde está toda a documentação do projeto.

Durante o desenvolvimento do projeto foi notável o tempo que se economiza com cada deploys automático dos servidores e da wiki, que acabam liberando o time (menos o DevOps) desse tipo de preocupação e podendo focar mais no código e nos documentos do projeto. Essa comparação pode ser realizado após passado toda a primeira sprint (agosto e setembro), onde fizemos deploys manuais dos documentos presentes na wiki.

Com a utilização do servidor de homologação, pudemos realizar os testes em tempo real das porções do software que iam se juntando aos poucos. Alguns erros foram descobertos assim, realizando alguns testes de uso da aplicação conforme ele ia sendo incrementado. *Bugs* encontrados foram resolvidos pelos próprios desenvolvedores da funcionalidade.

O deploys só eram realizado no servidor de homologação quando os pull requests abertos tinham passado nos testes e na build do CircleCI (ferramenta responsável pela integração contínua do software), e após revisados era dado o merge que subia as atualizações para a *branch develop*.


### Paralelo entre Vsign e Artigo
