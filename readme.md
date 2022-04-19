# Tasks

Reusable `plop` tasks for repetitive actions.

## Usage

1. Clone tasks somewhere

```
git clone https://github.com/alextheartisan/tasks.git <some-dir>
```

2. Install `plop` globally

```
npm install -g plop
```

3. Add `powershell` alias (or unix equivalent)

```shell
# For example using `glop` as a name
function glop {
    plop --plopfile <some-dir>/plop.config.js --dest ($pwd).path $args
}
```

## Tasks

### `glop prettier`

Adds Prettier to the project

- Modifies `package.json` file
  - Adds `prettier` task
  - Sets `prettier` field to `@alextheartisan/prettier-config`

### `glop typescript`

Adds TypeScript support to the project

- Adds `tsconfig.json` file that extends `@alextheartisan/typescript-config`
  - Adds basic alias support
- Installs `typescript`, `@alextheartisan/typescript-config`

### `glop jest`

Adds Jest support

- Modifies `package.json` file
  - Adds `test` and `test:watch` tasks
  - Sets `jest` field to `{ preset: "@alextheartisan/jest-config" }`
- Installs `jest`, `ts-jest`, `@types/jest`, `@alextheartisan/jest-config`

### `glop module`

Allows to create a module inside `src` directory

### `glop component`

Allows to create a component inside a specified module

### `glop next`

Scaffolds a project for using with `Next.js`

- Generates a file structure
- Installs `next`, `react(-dom)@17`, `normalize.css`, `sass` and corresponding types

### `glop eslint`

todo
