# PCPARTS APP

## Getting started

### Installation

First install all dependencies from `package-lock.json`

```bash
npm install
```

Start development server with nodemon

```bash
npm run start:dev
```

## Database

### Install locally

**You don't need to install the database locally. You can use already existing one. But if you have a reason to have your own DB follow the next steps.**

First create an account on cloud.mongodb.com.

Get database link and credentials and fill in .env file

Then seed your database with dummy dataset from "/db/seeds" using the following commands:

-   To seed all the data:

```bash
npm run db:seed
```

-   To seed a single collection just give it at the end of command like this:

```bash
npm run db:seed brands
```

-   To delete all the data:

```bash
npm run db:delete
```

-   To delete a single collection:

```bash
npm run db:delete brands
```

## Development

### GraphQL Types Generator

In this project we are using automatic GraphQL types generation with @graphql-codegen
Development process looks like this:

-   create/modify type definisions and resolvers
-   run the application. @graphql-codegen is pointed to the app url
-   run `npm run codegen` to regenerate all types
-   see the result in the file `/src/graphql/generated/graphql.ts`
-   apply generated types where it's necessary

OR

-   run codegen in `watch` mode if you intensively develop types `npm run codegen:watch`

More details about types generation here: https://the-guild.dev/graphql/codegen/docs/getting-started/development-workflow
