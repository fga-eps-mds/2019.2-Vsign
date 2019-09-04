### Histórico de Revisões

| Versão | Descrição     | Autor   |
|:------:|:-------------:|:-------:|
|  0.1   | Introdução, Uso de Issues | Thiago Ribeiro|
|  0.2   | Templates de Issues | @caue96 |

-----

## 1. Introdução

<p align="justify">Neste documento tem como objetivo descrever os principais itens em relação a Gerência de Configuração do Projeto. Objetiva-se por meio desde, padronizar e explicitar as políticas de contribuição a serem seguidas pela equipe durante o desenvolvimento do projeto e manutenção do mesmo.</p>

## 2. Políticas

### 2.1 Tipo de Issues

#### 2.1.1 Issue de Bug

---
Nome: Bug template<br>
Sobre: Reportar um bug em alguma feature do sistema<br>
Título: BUG(número da história)-(nome da história)<br>
Labels: bug, help wanted

---

```
**Descrição**
Uma descrição clara e concisa do bug.

**Passo a Passo**
Passo a passo para se reproduzir o bug:
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Comportamento Esperado**
Descrição do comportamento esperado pela feature desenvolvida.

**Screenshots**
Pelo menos uma screenshot do bug.

**Informações do Desktop:**
 - OS:
 - Versão do OS:
 - Browser:
 - Versão do Browser:
```

#### 2.1.2 Issue de User Story

---
Nome: US template<br>
Sobre: Nova feature do sistema<br>
Título: US(número da história)-(nome da história)<br>
Labels: enhancement

---

```
**Descrição (Como [quem], eu quero [o quê] para [por quê]?)**
Essa descrição vai indicar o autor da ação, funcionalidade desejada e o valor agregado pela funcionalidade.
Ex: Como ADMINISTRADOR, preciso ter acesso a um relatório de vendas para saber quanto recebi em determinado período.

**Critérios de aceite**
- [ ] Critério 1;
- [ ] Critério 2;
- [ ] Critério n.
Ex:
- [ ] Vendedores não poderão ter acesso ao relatório;
- [ ] Os relatórios devem ter a opção de imprimir;
- [ ] Os relatórios devem ter a opção de exportar para Excel;
- [ ] Deverá ter filtro por data, para que o administrador possa definir o período desejado.
```

#### 2.1.3 Custom Issue

---
Nome: Custom template<br>
Sobre: Criação customizável de outras issues<br>
Título: ""<br>
Labels: ""

---

```
**Descrição**
Descrição do que se trata a issue.
```

referências: [Issue de User Story](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac) e [Issue de Bug](https://github.com/devspace/awesome-github-templates)
