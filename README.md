To reproduce the error:

1. Clone repo: `git clone https://github.com/Dessader/vanilla-extract-style-issue.git`
2. Go to project dir: `cd vanilla-extract-style-issue`
3. Install dependencies: `yarn`
4. Go to `design-system` package dir: `cd packages/design-system`
5. Build this package: `yarn build`
6. Go to web app dir: `cd ../../apps/web`
7. Run web app: `yarn dev`
8. Open in browser: `http://localhost:3001`

Reproducible error when importing variables from a package created using the `createGlobalTheme` function:

> ./src/styles/app.css.ts
NonErrorEmittedError: (Emitted value instead of an instance of Error) ReferenceError: document is not defined
