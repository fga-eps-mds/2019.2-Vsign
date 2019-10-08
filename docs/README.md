

[![CircleCI](https://circleci.com/gh/fga-eps-mds/2019.2-Vsign.svg?style=svg)](https://circleci.com/gh/fga-eps-mds/2019.2-Vsign)

<div style="text-align:center"><img src="project/img/vsign_logo.png" /></div>


## 🐳 Guia para rodar o projeto com o Docker

* ### Instalação

Para o uso é necessário possuir o Docker e o Docker Compose em sua máquina. Caso não os possua segue abaixo os link para instalação.

[Instalação Docker](https://docs.docker.com/engine/installation/linux/docker-ce/)

[Instalação Docker-compose](https://docs.docker.com/compose/install/).


* ## Rodando a aplicação

Entre na pasta raíz do projeto em que está localizado o __docker-compose.yml__ e digite no terminal:

&emsp;&emsp; Primeiro (Enquanto não houver alterações no Gemfile ou Dockerfile, não precisará repetir o comando):

```
  docker-compose build
```

 &emsp;&emsp; Em seguida use o comando para subir o ambiente com logs.

```
  docker-compose up
```

 &emsp;&emsp; Após ter subido o ambiente em um terminal, caso seja a primeira vez que esteja rodando a aplicação, crie o banco (em outro terminal e com o ambiente ainda rodando no anterior):

```
  docker-compose run backend rake db:create
```
 &emsp;&emsp; Espere até que todos os serviços estejam disponíveis, acesse os servidores com os seguintes endereço:

* #### Rails : https://localhost:3000
* #### React : https://localhost:3001

Para subir um ambiente apenas, navegue até a pasta correspondente /backend ou /frontend onde se encontra o __docker-compose.yml__
```
  docker-compose up
```

* ## Comandos Principais

 &emsp;&emsp; Para subir o ambiente com logs digite: (Criará a imagem baseado no Dockerfile e criará os containers de serviços que definimos no docker-compose.yml)

 ```terminal
  docker-compose up
 ```

 &emsp;&emsp; Para desligar o ambiente de maneira completa. (Para e remove os containers, networks, volumes e imagens criadas pelo "up")

 ```terminal
  docker-compose down
 ```

 &emsp;&emsp; Para executar comandos depois de ter subido o docker-compose. (Dentro do seu novo ambiente)

 &emsp;&emsp;&emsp; Maneira direta. Exemplo: (Dirá a versão do Rails ou Node)

 ```terminal
  docker-compose run backend rails -version

  docker-compose run frontend node --version
 ```

 &emsp;&emsp;&emsp; Para abrir um prompt interativo para usar quantos comandos desejar: (Para sair digite: exit)

 ```terminal
  docker-compose run backend sh

  docker-compose run frontend sh
 ```
