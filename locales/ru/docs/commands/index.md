# Команды

Раздел описывает все команды, которые поддерживаются текущей версией DCR.

## Обзор

- `dcr new <name>` - создать новый проект в подпапке.
- `dcr init` - инициализировать текущую пустую директорию.
- `dcr build [--debug|--release]` - собрать `src/main.c`.
- `dcr run [--debug|--release]` - собрать и запустить `target/<profile>/main`.
- `dcr clean [--debug|--release]` - удалить `target` полностью или по профилю.
- `dcr --update` - обновить бинарник до последнего релиза.
- `dcr --help` - вывести справку.
- `dcr --version` - вывести версию и target.

## Подробно

- [dcr new](./new/)
- [dcr init](./init/)
- [dcr build](./build/)
- [dcr run](./run/)
- [dcr clean](./clean/)
- [dcr --update](./update/)
- [dcr --help / --version](./help-and-version/)
