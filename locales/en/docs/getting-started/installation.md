# Installation

### Standalone installer

DCR provides a standalone installer to download and install DCR:

=== "macOS and Linux"

    Use `curl` to download the script and execute it with `bash`:

    ```sh
    $ curl -fsSL https://dcr.dexoron.su/install.sh | bash
    ```

    If your system doesn't have `curl`, you can use `wget`:

    ```sh
    $ wget -qO- https://dcr.dexoron.su/install.sh | bash
    ```

=== "Windows"

    Use `irm` to download the script and execute it with `iex`:

    ```sh
    PS> powershell -ExecutionPolicy ByPass -c "irm https://dcr.dexoron.su/install.ps1 | iex"
    ```

    Changing the [execution policy](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7.4#powershell-execution-policies) allows running scripts from the internet.

!!! tip

    You can inspect the install script before running it:

    === "macOS and Linux"

        ```sh
        $ curl -fsSL https://dcr.dexoron.su/install.sh | less
        ```

    === "Windows"

        ```sh
        PS> powershell -c "irm https://dcr.dexoron.su/install.ps1 | more"
        ```

    You can also download the installer or binaries directly from [GitHub Releases](https://github.com/dexoron/dcr/releases).

## Build from source manually

```bash
git clone https://github.com/dexoron/dcr.git
cd dcr
cargo build --release
mkdir -p ~/.local/bin
ln -sf "$PWD/target/release/dcr" ~/.local/bin/dcr
```

## Verify installation

```bash
dcr --version
```

Expected output format:

```text
dcr <version> (<target>)
```

## Important installer notes

- Installation scripts provide two modes: download release binary or build from `git`.
- The binary is installed into a user directory and added to path.
- `--update` uses GitHub API and release assets.
- The installer script can also update DCR to the latest version.

## Next

- [First steps](./first-steps/)
