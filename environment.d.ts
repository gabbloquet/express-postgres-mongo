// https://www.typescriptlang.org/docs/handbook/declaration-merging.html#merging-interfaces
declare namespace NodeJS {
  export interface ProcessEnv {
    PORT: string;
    PGDATABASE: string;
    PGUSER: string;
    PGPASSWORD: string;
    PGHOST: string;
  }
}
