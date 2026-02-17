# First steps

## 1) Create a project

```bash
dcr new hello
cd hello
```

DCR will create:

```text
hello/
- dcr.toml
- src/
- - main.c
```

## 2) Build the project

Debug profile (default):

```bash
dcr build
```

Release profile:

```bash
dcr build --release
```

## 3) Run the project

```bash
dcr run
```

or

```bash
dcr run --release
```

## 4) Clean artifacts

```bash
dcr clean
```

Remove only one profile:

```bash
dcr clean --debug
dcr clean --release
```

## Current limitation

At this stage, build in the current implementation is focused on `src/main.c` and output file `target/<profile>/main`.

## Next

- [Commands](../commands/)
- [dcr.toml configuration](../reference/configuration/)
