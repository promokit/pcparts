# PCPARTS APP

## Getting started

### Installation

First install all dependencies from `package-lock.json`

```bash
npm install
```

Start development server

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
