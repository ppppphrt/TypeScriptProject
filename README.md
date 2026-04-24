# TypeScript Merge Project

Merges three sorted number arrays into one sorted ascending array.
`collection_1` and `collection_2` are sorted ascending; `collection_3` is sorted descending.

## Prerequisites

- [Node.js](https://nodejs.org/) v16 or higher
- npm (comes with Node.js)

## Setup

Install all dependencies:

```bash
npm install
```

## Project Structure

```
TypeScriptProject/
├── src/
│   ├── merge.ts          # merge function implementation
│   └── merge.test.ts     # unit tests
├── jest.config.js
├── tsconfig.json
└── package.json
```

## Run Unit Tests

```bash
npm test
```

Expected output:

```
Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
```

## Compile TypeScript

```bash
npx tsc
```

Compiled JavaScript output will be in the `dist/` folder (as configured in `tsconfig.json`).
