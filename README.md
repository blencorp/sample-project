# BLEN Sample Project

Thanks for your interest.

We are looking for a React.JS application with Node.JS backend using GraphQL. 

## Getting Started

- [ ] The Node.JS application needs to be written in `TypeScript`.
- [ ] We'll be looking for clean code as much as possible.
- [ ] Once done, please commit your code to your repo along with a simple README file.

Good luck

---

## Acceptance Critrea

- [ ] Read the [Sample data](#data) using the [`File system`](https://nodejs.org/api/fs.html) module.
- [ ] Integrate `GraphQL` using [`Apollo Server`](https://www.apollographql.com/docs/apollo-server/v1/)
- [ ] Read the data from the `GraphQL` by building a React.JS Functional Component with Redux Hooks for fully managed data.
  - [ ] The listing page should be an HTML table with 3 columns: id, name and age and link the id to a detail page.
  - [ ] The detail page will show all the fields: `company`, `email`, `phone`, `address`.


## [Sample Data](#data)

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
    }
  ]
}

```
