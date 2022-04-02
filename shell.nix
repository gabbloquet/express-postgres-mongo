let
  sources = import nix/sources.nix;
  nixpkgs = import sources.nixpkgs { };
in with nixpkgs;

mkShell {
  PORT = "3000";
}
