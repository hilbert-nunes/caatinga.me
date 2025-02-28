<p align="center">
  <a href="" rel="noopener">
 <img src="https://user-images.githubusercontent.com/52302576/162342259-3352276c-d0af-4fe7-b518-162f75303ff1.PNG" alt="Project logo"></a>
</p>
<h1 align="center"><a href="https://caatinga-me.vercel.app/home">Caatinga.me</a></h1>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/hil-beer-t/caatinga-api.svg)](https://github.com/hil-beer-t/caatinga-api/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE.md)
[![Netlify Status](https://api.netlify.com/api/v1/badges/ed9f5d44-3832-47b1-9d42-0d39cd76699c/deploy-status)](https://app.netlify.com/sites/caatinga/deploys)

</div>

<p align="center"> Mostra toda a vasta utilidade e usos das árvores e arbustos da Caatinga, tão desconhecida por todos.
    <br> 
</p>

## 📝 Conteúdos

- [Motivação](#problem_statement)
- [O que aprendi](#idea)
- [Mapa do Maroto](#map)
- [Feito com](#tech_stack)
- [Executando na sua máquina](#exec)
- [Funcionalidades](#func)
- [Autores](#authors)
- [Crédito literário](#credits)

## 🧐 Motivação <a name = "problem_statement"></a>

Aplicar meus conhecimentos em algo que eu gosto e admiro muito, que é a cultura nordestina.

## 💡 O que eu aprendi ? <a name = "idea"></a>

- Angular Routing
- Angular Module
- Angular Observables (RxJs)
- Angular Forms
- Error interceptor
- Scalable Angular Structure
- JWT in Angular + Spring
- AWS hosting
- VS extension: Angular Schematics

## 🗺️ Mapa do Maroto <a name = "map"></a>

- Backend
  - CRUD completo de árvores ✔️
- Frontend
  - Pages ✔️
  - CRUD pela aplicação web✔️
- Integração ✔️
- Segurança ✔️
- Imagens ✔️

## ⛏️ Feito com: <a name = "tech_stack"></a>

- Spring
- PostgreSQL
- Angular + Tailwindcss
- AWS
  - Route 53
  - CloudFront
  - S3
  - Elastic Beanstalk

## 🏁 Executando na sua máquina <a name = "exec"></a>

### Prerequisites

- Backend
  - [Maven](https://maven.apache.org/download.cgi)
  - [Docker](https://docs.docker.com/get-docker/)
- Frontend
  - [Npm](https://www.npmjs.com/package/download)

```bash
git clone https://github.com/hil-beer-t/caatinga-api.git
```

### Backend

Entrando na pasta `Backend`

```bash
cd caatinga-api && cd backend
```

Instalalando dependências

```bash
mvn clean install
```

O pacote será gerado dentro da pasta `target`.

<br> Profile `test`

É usado o banco de dados H2, sem necessidade do Postgres.

Escolha o profile no arquivo `application.properties`

```
spring.profiles.active=${APP_PROFILE:test}
```

Dentro da pasta `target`, basta executá-lo com o comando abaixo.

Executando o Spring

```bash
java -jar -Dserver.port=443 caatinga-api-0.0.1-SNAPSHOT.jar
```

<br> Profile `dev`

É usado o banco de dados Postgres.

Instalando o banco de dados. Execute dentro da pasta `./backend`

```bash
docker compose up
```

Escolha o profile no arquivo `application.properties`

```
spring.profiles.active=${APP_PROFILE:dev}
```

Dentro da pasta `target`, basta executá-lo com o comando abaixo.

Executando o Spring

```bash
java -jar -Dserver.port=443 caatinga-api-0.0.1-SNAPSHOT.jar
```

### Frontend

Instalalando dependências

```bash
npm install
```

Iniciando o serviço

```bash
npm start
```

Rota padrão local do Angular

[http://localhost:4200/]()

# 💻 Funcionalidades <a name = "funcs"></a>

- Rotas públicas
  - Home
  - Lista árvores
  - Login
- Rotas privadas (precisa estar logado / token válido no local storage)
  - Criar árvores
  - Deletar árvores
  - Alterar árvores

## ✍️ Autores <a name = "authors"></a>

- [@hilbert](https://github.com/hil-beer-t)

## 🏆 Crédito literário <a name = "credits"></a>

- [Gerda Nickel Maia](https://books.google.com.br/books/about/Caatinga.html?hl=pt-BR&id=TUt9AAAACAAJ&redir_esc=y) - Livro - Caatinga: Árvores E Arbustos E Suas Utilidades.

## 📖 Licença

[MIT](#LICENCE)
