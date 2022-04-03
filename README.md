# Nods.js - Express - MongoDB & Postgres

NodeJS Server using express which consume MongoDB & Postgres.

## Getting started

1. `npm run dev` (Watch changes and reload server with `nodemon`)
2. docker-compose up sql nosql (to launch mongodb and postgres dockerized images)

Else you can :

1. `npm run build` & `npm run serve`. (to launch the application without hot reloading)

## Endpoints

I put database type (sql / nosql) in uri to be able to test it quickly.

### SQL

Get all users (GET) : `/sql/users`  
Get a specific user (GET) : `/sql/users/:id`  
Create a user (POST) : `/sql/users`  
Modify a user (PUT) : `/sql/users/:id`  
Delete a user (DELETE): `/sql/users/:id`

### NoSQL

Get all users (GET) : `/nosql/users`  
Get a specific user (GET) : `/nosql/users/:id`  
Create a user (POST) : `/nosql/users`  
Modify a user (PUT) : `/nosql/users/:id`  
Delete a user (DELETE) : `/nosql/users/:id`

### User object

```typescript
export interface User {
  id: Number;
  username: String;
  email: String;
  password: String;
}
```

## Useful documentations

- I used [tsc](https://www.typescriptlang.org/docs/handbook/compiler-options.html) to "compile" typescript to javascript
- I Used [Nodemon](https://www.npmjs.com/package/nodemon) for server hot reloading
- I used [Sequelize](https://sequelize.org/docs/v6/getting-started/) as ORM for Postgres
- I used [Mongoose](https://mongoosejs.com/docs/guide.html) as ODM for MongoDB
- I used [linters](https://blog.bitsrc.io/how-to-set-up-node-js-application-with-eslint-and-prettier-b1b7994db69f), ESLint & Prettier.

## Postman collection

[Postman collection](./sql_vs_nosql.postman.json) to test it easily. (v2.1)
