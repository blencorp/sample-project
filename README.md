# BLEN Sample Project

Thanks for your interest.

Create a `React` and `Node.js` backend application using `GraphQL`.

## Getting Started

- Fork this repo to your own account.
- Build the application as per the [Instructions](#instructions) below.
- This application needs to be written fully in `TypeScript`. Define types as much as possible. Do not use `any` type.
- We'll be looking for clean code as much as possible.
- Once done, please commit your code to your forked repo and share the link with us.

Good luck

## [Instructions](#instructions)

Folder structure is up to you. You can use the following structure:

```bash
├── backend
│   ├── src
│   │   ├── index.ts
│   │   ├── schema.ts
│   │   ├── resolvers.ts
│   │   └── data.json
│   ├── package.json
│   ├── tsconfig.json
│   └── ...
├── frontend
│   ├── src
│   │   ├── index.tsx
│   │   ├── App.tsx
│   │   ├── pages
│   │   │   ├── listing.tsx
│   │   │   └── detail.tsx
│   │   └── ...
│   ├── package.json
│   ├── tsconfig.json
│   └── ...
├── README.md
└── ...
```

### [Backend](#backend)

- Read the [Sample data](#data) using the [`File system`](https://nodejs.org/api/fs.html) module. You can create a `data.json` file and read the data from it.
- Create a `GraphQL` server using [`Apollo Server`](https://www.apollographql.com/docs/apollo-server/) and expose the data as follows:
  - Create a `Query` type with a `clients` field that returns the list of clients.
  - Create a `Client` type with the following fields:
    - `id`
    - `name`
    - `age`
    - `gender`
    - `additionalInfo`
  - Create a `AdditionalInfo` type with the following fields:
    - `company`
    - `email`
    - `phone`
    - `address`

### [Frontend](#frontend)

- Create a `React` application using [`Vite`](https://vitejs.dev/).
- Read data from the `GraphQL` server using Apollo client and render the data as follows:
  - Store read data in a global state using React context or Redux/Redux toolkit.
  - Create a listing page that shows the `id`, `name` and `age` of the clients in a table. When the user clicks on the `name`, navigate to a detail page. Use `react-router-dom`. Use version 6.4 or above. Usage of route `loader`, `Outlet`, `defer`, `Awaited` and `Suspense` is a plus.
  - Create a detail page that shows the `id`, `name`, `age`, `gender` and `additionalInfo` of the client.
  - Style the pages as you see fit. Feel free to use one of the CSS frameworks below:
    - [USWDS](https://designsystem.digital.gov/)
    - [Tailwind CSS](https://tailwindcss.com/)
    - [Chakra UI](https://chakra-ui.com/)

## [Bonus](#bonus)

Some of the following are not required but will be a plus.

- Store the data in a database. You can use [`PostgreSQL`](https://www.postgresql.org/) or [`MySQL`](https://www.mysql.com/).
- Use [`TypeGraphQL`](https://typegraphql.com/) to define the `GraphQL` schema.
- Use [`Sequelize`](https://sequelize.org/) to define the database models.
- Create migrations for the database models.
- Create unit tests for the backend using [`Jest`](https://jestjs.io/).
- Create unit tests for the frontend using [`Jest`](https://jestjs.io/) and [`React Testing Library`](https://testing-library.com/docs/react-testing-library/intro/).
- Use codegen to generate types for the `GraphQL` schema to be used in the frontend.

## [Sample data](#data)

```json
{
  "clients": [
    {
      "id": "59761c23b30d971669fb42ff",
      "age": 36,
      "name": "Dunlap Hubbard",
      "gender": "male",
      "additionalInfo": {
        "company": "CEDWARD",
        "email": "dunlaphubbard@cedward.com",
        "phone": "+1 (890) 543-2508",
        "address":
          "169 Rutledge Street, Konterra, Northern Mariana Islands, 8551"
      }
    },
    {
      "id": "59761c233d8d0f92a6b0570d",
      "age": 24,
      "name": "Kirsten Sellers",
      "additionalInfo": {
        "gender": "female",
        "company": "EMERGENT",
        "email": "kirstensellers@emergent.com",
        "phone": "+1 (831) 564-2190",
        "address": "886 Gallatin Place, Fannett, Arkansas, 4656"
      }
    },
    {
      "id": "59761c23fcb6254b1a06dad5",
      "age": 30,
      "name": "Acosta Robbins",
      "additionalInfo": {
        "gender": "male",
        "company": "ORGANICA",
        "email": "acostarobbins@organica.com",
        "phone": "+1 (882) 441-3367",
        "address": "697 Linden Boulevard, Sattley, Idaho, 1035"
      }
    },
  ]
}

```
