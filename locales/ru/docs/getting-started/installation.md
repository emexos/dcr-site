# Установка

### Standalone installer

DCR предоставляет standalone-установщик для загрузки и установки DCR:

=== "macOS and Linux"

    Используй `curl`, чтобы скачать скрипт и выполнить его через `bash`:

    ```sh
    $ curl -fsSL https://dcr.dexoron.su/install.sh | bash
    ```

    Если в системе нет `curl`, можно использовать `wget`:

    ```sh
    $ wget -qO- https://dcr.dexoron.su/install.sh | bash
    ```

=== "Windows"

    Используй `irm`, чтобы скачать скрипт и выполнить его через `iex`:

    ```sh
    PS> powershell -ExecutionPolicy ByPass -c "irm https://dcr.dexoron.su/install.ps1 | iex"
    ```

    Изменение [execution policy](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7.4#powershell-execution-policies) позволяет запускать скрипт из интернета.

!!! tip

    Перед запуском скрипт установки можно просмотреть:

    === "macOS and Linux"

        ```sh
        $ curl -fsSL https://dcr.dexoron.su/install.sh | less
        ```

    === "Windows"

        ```sh
        PS> powershell -c "irm https://dcr.dexoron.su/install.ps1 | more"
        ```

    Также можно скачать установщик или бинарники напрямую из [GitHub Releases](https://github.com/dexoron/dcr/releases).

## Сборка из исходников вручную

```bash
git clone https://github.com/dexoron/dcr.git
cd dcr
cargo build --release
mkdir -p ~/.local/bin
ln -sf "$PWD/target/release/dcr" ~/.local/bin/dcr
```

## Проверка установки

```bash
dcr --version
```

Ожидается строка вида:

```text
dcr <версия> (<target>)
```

## Что важно знать про инсталлер

- Скрипты установки предлагают два режима: скачать релизный бинарник или собрать из `git`.
- Бинарник ставится в пользовательскую директорию и добавляется в путь.
- Для `--update` используется GitHub API и ассеты релиза.
- Этот скрипт может также обновлять DCR до последней версии.

## Дальше

- [Первые шаги](./first-steps/)
