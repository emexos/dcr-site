# Build profiles

DCR supports two profiles: `debug` and `release`.

## debug

Used by default for `dcr build` and `dcr run`.

Flags:

```text
-O0 -g -Wall -Wextra -fno-omit-frame-pointer -DDEBUG
```

## release

Enabled via `--release`.

Flags:

```text
-O3 -DNDEBUG -march=native
```

## Artifact locations

- `target/debug/main`
- `target/release/main`

## Usage

```bash
dcr build --debug
dcr build --release
dcr run --release
dcr clean --debug
```
