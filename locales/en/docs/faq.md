# FAQ

## What commands are available right now?

`new`, `init`, `build`, `run`, `clean`, `--help`, `--version`, `--update`.

## Is `dcr.toml` required for build?

Yes. `build`, `run`, and `clean` check for its presence in current directory.

## What exactly is compiled?

In current implementation, `src/main.c` is compiled into `target/<profile>/main`.

## Can I choose gcc instead of clang via dcr.toml?

Not yet. Currently DCR uses compiler hardcoded in DCR (`clang`).

## What does `dcr run` do when build fails?

It tries to run the last binary from selected profile. If there is no binary, it asks you to fix code errors.

## How do I update DCR?

Run:

```bash
dcr --update
```

Or use the installer script from [Installation](../getting-started/installation/).

## What if `dcr` command is not found?

Check that `~/.local/bin` is added to your `PATH`, then reopen terminal.
