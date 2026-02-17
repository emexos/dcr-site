# Первые шаги

## 1) Создать проект

```bash
dcr new hello
cd hello
```

DCR создаст:

```text
hello/
- dcr.toml
- src/
- - main.c
```

## 2) Собрать проект

Debug-профиль (по умолчанию):

```bash
dcr build
```

Release-профиль:

```bash
dcr build --release
```

## 3) Запустить проект

```bash
dcr run
```

или

```bash
dcr run --release
```

## 4) Очистить артефакты

```bash
dcr clean
```

Удаление только одного профиля:

```bash
dcr clean --debug
dcr clean --release
```

## Текущее ограничение

Сборка в текущей реализации ориентирована на `src/main.c` и выходной файл `target/<profile>/main`.

## Дальше

- [Команды](../commands/)
- [Конфигурация dcr.toml](../reference/configuration/)
