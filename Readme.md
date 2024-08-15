# API-REST

API Rest para estudo.

## Sumário

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Usar](#como-usar)

## Sobre o Projeto

Este projeto é uma API REST desenvolvida para estudar como é feito o desenvolvimento de uma API. A API foi construída utilizando Node.js.

### Endpoints Principais

- `GET /api/resource` - Retorna uma lista de recursos.
- `GET /api/resource/{id}` - Retorna um recurso específico por ID.
- `POST /api/resource` - Cria um novo recurso.
- `PUT /api/resource/{id}` - Atualiza um recurso existente.
- `DELETE /api/resource/{id}` - Deleta um recurso existente.

## Tecnologias Utilizadas

- [Linguagem de Programação] - Node.js
- [Framework] - Express
- [Banco de Dados] - MySQL

## Arquivos de configuração

`.sequelizerc` - Arquivo de configuração do Sequelize

    sequelize cli - interface de linha de comando para gerenciar as bases de dados e as migrations

    Caminho do arquivo de configuração:

    ```javascript
    {
      config: resolve(__dirname, 'src', 'config', 'database.js')
    }
    ```

    Caminho dos Models

    ```javascript
    {
      'models-path': resolve(__dirname, 'src', 'models'),
    }
    ```

    Caminho da Migrations

    >Obs.: Essas migrations vão ser alterações na base de dados, por exemplo, ao criar uma tabela o sequelize cria um tipo de histórico de alterações da base de dados.

    ```javascript
    {
      'migrations-path': resolve(__dirname, 'src', 'database', 'migrations'),
    }
    ```

    Caminho dos Seeders:

    ```javascript
    {
      'seeders-path': resolve(__dirname, 'src', 'database', 'seeds'),
    }
    ```

## Banco de dados

O banco de dados foi criado com o MySQL Workbench, caso possua a conta no Google Cloud com um servidor Linux remoto, crie uma nova conexão com o IP estático do servidor remoto, assim poderá criar a base de dados diretamente nele. Caso não tenha um servidor remoto, crie na conexão local.

No MySQL Workbench crie um novo Schema com as seguintes configurações:

![MySQL Schema](./documentation/mysqlschemacreation.png)

O banco de dados será gerenciado através do sequelize, que é **...**

Inatalações:

```shell
npm i sequelize mariadb
npm i -D sequelize-cli
```

Para criar a primeira migration execute a linha de comando:

```shell
npx sequelize migration:create --name=alunos
```

Esso comando vai criar um arquivo na pasta database/migrations, conforme configuração prévia. Esse arquivo vai conter as configurações das tabelas do banco de dados.

Para executar uma migration e fazer ela refletir no banco de dados real, execute:

```shell
npx sequelize db:migrate
```

Para deesfazer uma migração execute:

```shell
npx sequelize db:migrate:undo
```
