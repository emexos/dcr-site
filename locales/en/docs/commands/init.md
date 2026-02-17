# dcr init

Initializes a DCR project in the current directory.

## Usage

```bash
dcr init
```

## What this command does

1. Checks that current directory is empty.
2. Uses directory name as `package.name`.
3. Creates `dcr.toml`.
4. Creates `src/main.c`.

## Limitations

- The command does not accept arguments.
- If directory is not empty, command exits with error.

## Example

```bash
mkdir hello
cd hello
dcr init
dcr run
```
