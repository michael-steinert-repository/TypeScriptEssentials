# TypeScript Essentials

## Essentials

- TypeScript is a static typed Extension for JavaScript
- TypeScript have to be transpiled in JavaScript otherwise it can not be executed in Browsers
- With TypeScript Type Errors occur while the Transpilation and not while running the Code
- It forces types at Compile Time and not at Runtime

## Reason for TypeScript

- It reduces Error caused of:

  - `null` or `undefined` Values
  - Calling Function with the wrong Parameters
  - Putting the wrong Fields in an Object

- It allows to code faster caused of Awareness of the right Data like Parameters and Fields of an Object

## Setup

- Get installed TypeScript Version:

```console
tsc -v
```

- Run Watch Mode to automatically transpile all TypeScript Files into JavaScript Files:

```console
tsc -w
```

- Execute TypeScript Files:

```console
ts-node functions-test.ts
```
