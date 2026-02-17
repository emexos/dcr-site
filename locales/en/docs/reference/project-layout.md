# Project layout

## Minimal layout

```text
project/
- dcr.toml
- src/
- - main.c
```

### File and directory purpose

- `dcr.toml` - project configuration file.
- `src/main.c` - entry source file currently compiled by DCR.

## Extended layout

```text
project/
- dcr.toml
- dct.lock
- src/
- - main.c
- target/
- - debug/
- - - main
- - release/
- - - main
```

### File and directory purpose

- `dcr.toml` - project configuration file.
- `dct.lock` - dependency lock file.
- `src/main.c` - entry source file currently compiled by DCR.
- `target/debug/main` - compiled debug binary.
- `target/release/main` - compiled release binary.
