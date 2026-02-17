# DCR Documentation

DCR (Dexoron Cargo Realization) is a Cargo-style CLI for C/C++ projects.

## What is available in the current version

- Create a project: `dcr new <name>`.
- Initialize an empty directory: `dcr init`.
- Build `debug` and `release` profiles: `dcr build [--debug|--release]`.
- Run after build: `dcr run [--debug|--release]`.
- Clean build artifacts: `dcr clean [--debug|--release]`.
- Update binary from GitHub Releases: `dcr --update`.
- Help and version: `dcr --help`, `dcr --version`.

## Sections

- [Getting started](./getting-started/)
- [Commands](./commands/)
- [Reference](./reference/)
- [FAQ](./faq/)

## Important implementation facts

- DCR is written in Rust.
- At this stage, build compiles `src/main.c` into `target/<profile>/main`.
- To run `build`, `run`, and `clean`, the `dcr.toml` file must exist in the project root.

## Repository

- [dexoron/dcr](https://github.com/dexoron/dcr)
