// https://www.typescriptlang.org/docs/handbook/declaration-merging.html#merging-interfaces
declare namespace NodeJS {
  export interface ProcessEnv {
    PORT: string;
    SQL_DATABASE_URL: string;
    NOSQL_DATABASE_URL: string;
  }
}
