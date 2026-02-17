# dcr --update

Updates installed DCR binary to the latest release from GitHub.

## Usage

```bash
dcr --update
```

## How it works

1. Requests `https://api.github.com/repos/dexoron/dcr/releases/latest`.
2. Reads latest release `tag_name`.
3. Selects matching asset for current target (`DCR_TARGET`).
4. Downloads new binary into a temporary file.
5. Replaces current executable via `self-replace`.

## When update is not required

If current version is already the latest, command reports it and exits without changes.

## Limitations

- The command does not accept arguments.
- Access to GitHub API and release assets is required.
- For Windows, expected asset is `dcr-x86_64-pc-windows-msvc.exe`.
