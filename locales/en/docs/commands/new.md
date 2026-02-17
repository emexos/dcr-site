# dcr new

Creates a new project in a separate directory.

## Usage

```bash
dcr new <name>
```

## What this command does

1. Creates directory `<name>`.
2. Creates `dcr.toml` with `[package]` and `[dependencies]` sections.
3. Creates `src/main.c` with a `Hello World` template.

## Behavior and errors

- If no name is provided, command exits with error.
- If more than one argument is provided, command exits with error.
- If directory `<name>` already exists, command suggests using `dcr init`.

## Example

```bash
dcr new app
cd app
dcr run
```
