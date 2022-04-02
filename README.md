# express-postgres-mongo

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

## Postman collection

[Postman collection](./sql_vs_nosql.postman.json) to test it easily. (v2.1)