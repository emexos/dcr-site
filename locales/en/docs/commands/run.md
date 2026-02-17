# dcr run

Builds the project and runs the binary.

## Usage

```bash
dcr run
dcr run --debug
dcr run --release
```

## What this command does

1. Checks that `dcr.toml` exists.
2. Runs the same build flow as `dcr build`.
3. Executes `./target/<profile>/main`.

## Behavior on build errors

- First, command tries to build the project.
- If build fails, command tries to run the last binary from the selected profile.
- If no matching binary exists, an error message is shown.

## Limitations

- Same as in `build`, only one profile flag is supported as the first argument.
