<br />
<p align="center">
  <h1 align="center">FAMILY TREE VERSÃO 1</h1>
 <br />
  <p align="center">SUMÁRIO<p align="center">
  <a href="#sobre-a-aplicação"> Sobre </a> |
  <a href="#ferramentas-utilizadas">Ferramentas utilizadas</a> |
  <a href="#dependências"> Dependências </a> |
  <a href="#inicialização-da-aplicação"> Inicialização </a> |
  <a href="#rotas-da-aplicação"> Rotas</a>
       <br />
    <br />
  </p>
</p>

# Sobre a aplicação:

Projeto realizado como teste técnico para a vaga de *Desenvolvedor Back-end Junior*, para a empresa **Pagar.me**. O objetivo era criar uma API de uma árvore genealógica, que retorna as relações de parentesco um certo indivíduo contendo todos os ascendentes possíveis até o seu nível. Essa primeira versão foi um teste, e por causa de não obter o resultado esperado, uma outra versão usando tecnológias diferentes foi criada, você pode ver clicando [aqui](https://github.com/maysapereira/family-tree-api-v2)

# Ferramentas utilizadas:

Para o desenvolvimento foi utilizado **JavaScript** com **NodeJS** como linguagem da aplicação e o **Express** como framework. Como ORM foi utilizado o **Sequelize**. Como bando de dados foi utilizado o **MySQL**.

O editor de código utilizado foi o **VSCode Studio** e para testes durante o desenvolvimento foram utilizadas o framework **nodemon** e o API Design Tool **Insomnia**

### Observação importante sobre a aplicação

Por conta da utilização do banco de dados MySQL talvez a API não rode por um erro de usuário. Caso isso ocorra mude o usuário para o usuário MySQL e sua respectiva senha no arquivo [config.json](https://github.com/maysapereira/family-tree-api-v1/blob/main/package.json)

# Dependências

```.json
"dependencies": {
    "body-parser": "^1.20.0",
    "express": "^4.18.1",
    "mysql2": "^2.3.3",
    "path": "^0.12.7",
    "sequelize": "^6.19.0",
    "sequelize-cli": "^6.4.1"
    }
 ```
 
As dependências podem ser encontradas [neste arquivo](https://github.com/maysapereira/family-tree-api-v1/blob/main/package.json) e para instalar basta rodar o comando abaixo e colar no terminal. Isso criará um clone deste repositório e instalar as dependencias necessárias.

```
git clone https://github.com/maysapereira/family-tree-api-v1.git && cd family-tree-api-v1 && npm install
```

# Dependências de desenvolvimento

As dependências de desenvolvimento podem ser encontradas [neste arquivo](https://github.com/maysapereira/family-tree-api-v1/blob/main/package.json). Caso deseje instala-las rode o comando abaixo e cole no terminal logo após o comando das dependencias obrigatórias.

```
npm install --save-dev nodemon
```

# Inicialização da aplicação:

Para iniciar a aplicação basta abrir o terminal na pasta do projeto ou executar o código abaixo.

```
npm start
```

# Rotas da aplicação:

**[GET]** /members - A rota exibirá todos familiares cadastrados <br>
**[GET]** /members/:id - Busca apenas um familiar baseado em seu ID  <br>
**[POST]** /members - A rota cria um novo familiar com base nas informações passadas no corpo da requisição. <br>

**Observação:** o id é criado automaticamente com a ajuda do Sequelize <br>

**[PUT]** /members/:id - A rota atualizará os dados de um familiar com as informações passadas no corpo da requisição <br>
**[DELETE]** /members/:id - A rota deletará um familiar baseado em seu ID.
