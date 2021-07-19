# Flix-Simpsons
Criação de um CRUD de todos os epsodios dos simpsons.

`Arquitetura`
#### Server.js
> Sobe servidor nodejs, usa as rotas, converte os dados para Json e faz conexao com a importação do db.

#### .env
> Gerencia a variavel de ambiente de configuração do MongoDb

#### .env.example
> Salva a variavel de forma genérica

#### .gitignore
> Ignora arquivos e pastas para o git

#### 📂SRC

#### 📂Routes
>  Cria as rotas apenas com a responsabilidade dos metodos HTTP
#### 📂Controllers
> Cria a lógica e salva as informações do db.
#### 📂Models
> Modela o esquema de dados para o banco.
#### 📂Data
> Cria a configuração de conexão com o banco.

`Tecnologias`
| Ferramenta | Descrição |
| --- | --- |
| `javascript` | Linguagem de programação |
| `nodejs` | Ambiente de execução do javascript|
| `express` | Framework NodeJS |
| `dotenv` | Dependência para proteger dados sensíveis do projeto|
| `mongoose` | Dependência que interage com o MongoDB para a conexão da database, criação do model e das collections|
| `nodemon` | Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente|
| `npm` | Gerenciador de pacotes|
| `MongoDb` | Banco de dado não relacional orietado a documentos|
| `MongoDb Compass` | Interface gráfica para verificar se os dados foram persistidos|
 `Postman` | Interface gráfica para realizar os testes|

<br>
**CRUD:**
o endpoint será: localhost:8080/simpsons

<br>
<br>
`Comportamento esperado`

| Recurso | Descrição |
| --- | --- |
| `/` | Deverá listar todos os episodios cadastrados|

| Recurso | Descrição |
| --- | --- |
| `/` | Deverá criar um novo episodio a partir do corpo da requisição|

| Recurso | Descrição |
| --- | --- |
| `/:id` | A partir do route params id, deverá ser possível buscar um epsodio para listá-lo.|

| Recurso | Descrição |
| --- | --- |
| `/:id` | A partir do route params id, deverá ser possível buscar um episodio para alterar uma informação específica que será passada pelo corpo da requisição.|

| Recurso | Descrição |
| --- | --- |
| `/:id` | A partir do route params id, deverá ser possível buscar um episodio para deletá-lo.|

<br>

Titulo
temporada
descrição
indicador
Personagem