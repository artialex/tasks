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

3. Add alias for plop using these tasks

```
function glop {
    plop --plopfile <some-dir>/plop.config.js --dest ($pwd).path $args
}
```

## Tasks

    plop prettier
    plop jest
    plop typescript
    plop next

    plop component
    plop module

### To do

    plop eslint
    plop webpack
