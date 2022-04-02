let
  sources = import nix/sources.nix;
  nixpkgs = import sources.nixpkgs { };
in with nixpkgs;

mkShell {
  PORT = "3000";
  SQL_DATABASE_URL = "postgres://postgresuser:postgrespass@127.0.0.1:5432/postgres";
  NOSQL_DATABASE_URL = "postgres://postgresuser:postgrespass@127.0.0.1:5432/postgres";
}
