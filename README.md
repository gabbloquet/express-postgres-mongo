# express-postgres-mongo
NodeJS Server using express which consume MongoDB & Postgres.

## Getting started

1. `npm run dev` (Watch changes and reload server with `nodemon`)
2. docker-compose up sql nosql (to launch mongodb and postgres dockerized images)

Else you can : 

1. `npm run build` & `npm run serve`. (to launch the application without hot reloading)


## Endpoints

### SQL
Get all users : `/sql/users`
`/sql/users/:id`
`/sql/users`
`/sql/users/:id`
`/sql/users/:id`

### NoSQL
Get all users : `/nosql/users`
`/nosql/users/:id`
`/nosql/users`
`/nosql/users/:id`
`/nosql/users/:id`