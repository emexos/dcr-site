# Документация DCR

DCR (Dexoron Cargo Realization) - CLI для C/C++ проектов в стиле Cargo.

## Что есть в текущей версии

- Создание проекта: `dcr new <name>`.
- Инициализация пустой директории: `dcr init`.
- Сборка профилей `debug` и `release`: `dcr build [--debug|--release]`.
- Запуск после сборки: `dcr run [--debug|--release]`.
- Очистка артефактов: `dcr clean [--debug|--release]`.
- Обновление бинарника из GitHub Releases: `dcr --update`.
- Справка и версия: `dcr --help`, `dcr --version`.

## Разделы

- [Начало работы](./getting-started/)
- [Команды](./commands/)
- [Справочник](./reference/)
- [FAQ](./faq/)

## Важные факты о реализации

- DCR написан на Rust.
- На текущем этапе сборка компилирует `src/main.c` в бинарник `target/<profile>/main`.
- Для успешной работы команд `build`, `run`, `clean` нужен файл `dcr.toml` в корне проекта.

## Репозиторий

- [dexoron/dcr](https://github.com/dexoron/dcr)
