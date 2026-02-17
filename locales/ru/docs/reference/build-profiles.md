# Профили сборки

DCR поддерживает два профиля: `debug` и `release`.

## debug

Используется по умолчанию для `dcr build` и `dcr run`.

Флаги:

```text
-O0 -g -Wall -Wextra -fno-omit-frame-pointer -DDEBUG
```

## release

Включается через `--release`.

Флаги:

```text
-O3 -DNDEBUG -march=native
```

## Где лежат артефакты

- `target/debug/main`
- `target/release/main`

## Использование

```bash
dcr build --debug
dcr build --release
dcr run --release
dcr clean --debug
```
