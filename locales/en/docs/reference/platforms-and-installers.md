# Platforms and installation

## Supported release targets

- `x86_64-unknown-linux-gnu`
- `x86_64-apple-darwin`
- `aarch64-apple-darwin`
- `x86_64-pc-windows-msvc`

## Install scripts

- `install.sh` for Linux/macOS.
- `install.ps1` for Windows.

Both scripts provide:

1. Download ready binary from release.
2. Or build from source.

## Installation paths

- Linux/macOS: binary is installed into a user directory and linked into `~/.local/bin`.
- Windows: binary is copied into a user directory and duplicated into `~/.local/bin`.

## Post-install update

For installed DCR you can run:

```bash
dcr --update
```

The command updates binary in the location of current `dcr` executable.
Or update through the installer script.
