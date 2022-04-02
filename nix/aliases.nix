{ pkgs ? import <nixpkgs> { } }:
let
  # Run npm run 
  run = pkgs.writeScriptBin "run" ''
    npm run
  '';

  # Run npm run install 
  run-install = pkgs.writeScriptBin "install" ''
    npm run install
  '';

  # Run npm run build 
  run-build = pkgs.writeScriptBin "build" ''
    npm run build
  '';

  # Run npm run dev 
  run-dev = pkgs.writeScriptBin "dev" ''
    npm run dev
  '';

  # Run npm run serve 
  run-serve = pkgs.writeScriptBin "serve" ''
    npm run serve
  '';

  # Run npm run lint:eslint and lint:style
  run-lint = pkgs.writeScriptBin "lint" ''
    npm run lint:eslint && npm run lint:style
  '';

  # Run npm run test with pattern
  run-test-pattern = pkgs.writeScriptBin "testP" ''
    npm run test -- $@
  '';

  # Run npm run test with pattern and watch
  run-test-watch-pattern = pkgs.writeScriptBin "testPW" ''
    testP --watch $@
  '';
in
{
  aliases = [
    run
    run-install
    run-build
    run-dev
    run-serve
    run-lint
    run-test-pattern
    run-test-watch-pattern
  ];
}
