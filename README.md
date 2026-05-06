# API de Gerenciamento de Usuários

Esta é uma API REST desenvolvida em Node.js para o gerenciamento de usuários, utilizando Prisma ORM para persistência de dados no MongoDB Atlas.

## Tecnologias Utilizadas

* Node.js e Express
* Prisma ORM
* MongoDB Atlas
* Cors

## Requisitos Próvios

* Node.js instalado (v18 ou superior)
* Instância do MongoDB (Local ou Atlas)

## Configuração para Desenvolvimento Local

1. Clone o repositório:
   git clone https://github.com/seu-usuario/nome-do-repositorio-backend.git

2. Instale as dependências:
   npm install

3. Configure as variáveis de ambiente:
   Crie um arquivo .env na raiz do projeto com a seguinte variável:
   DATABASE_URL="mongodb+srv://<usuario>:<senha>@cluster.mongodb.net/<nome-do-banco>?retryWrites=true&w=majority"

4. Gere o Prisma Client:
   npx prisma generate

5. Inicie o servidor:
   node index.js

O servidor estará disponível em http://localhost:3000.

## Estrutura de Endpoints

* POST /usuarios: Cria um novo usuário (Requer name, email e age no corpo da requisição).
* GET /usuarios: Retorna a lista de todos os usuários cadastrados.
* PUT /usuarios/:id: Atualiza os dados de um usuário específico via ID.
* DELETE /usuarios/:id: Remove um usuário do banco de dados via ID.
