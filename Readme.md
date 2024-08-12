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
