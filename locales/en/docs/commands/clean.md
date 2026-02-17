# dcr clean

Removes build artifacts.

## Usage

```bash
dcr clean
dcr clean --debug
dcr clean --release
```

## What gets removed

- Without arguments: entire `target` directory.
- With profile: only `target/debug` or `target/release`.

## Checks

- `dcr.toml` must exist in the current directory.
- If `target` or selected profile does not exist, a warning is shown.

## Argument behavior

The command expects at most one profile argument.
