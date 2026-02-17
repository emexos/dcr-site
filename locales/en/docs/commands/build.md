# dcr build

Builds the project in `debug` or `release` profile.

## Usage

```bash
dcr build
dcr build --debug
dcr build --release
```

## What this command does

- Checks that `dcr.toml` exists.
- Creates `target/<profile>/` when needed.
- Compiles `src/main.c` using `clang`.
- Writes binary to `target/<profile>/main`.

## Profiles

- `--debug` (default)
- `--release`

Build flags are described in [Build profiles](../reference/build-profiles/).

## Important details

- In current implementation, only the first argument after `build` is parsed.
- Unknown argument or flag returns an error.
- If `src/main.c` is missing, command does not compile code.
