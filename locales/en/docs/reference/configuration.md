# dcr.toml configuration

The main project file is `dcr.toml`.

## Minimal example

```toml
[package]
name = "hello"
version = "0.1.0"
language = "c"
compiler = "clang"

[dependencies]
```

## What DCR writes

`dcr new` and `dcr init` create `dcr.toml` in this base format.

## Current behavior

- For `build`, `run`, and `clean`, `dcr.toml` is required.
- At this stage, values from `dcr.toml` are not used to select source files for build.
- Actual compilation is focused on `src/main.c` and constants in DCR code.

## Practice

Treat `dcr.toml` as a project marker and a base for future configuration expansion.
