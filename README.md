# Next.js + Material-UI with TypeScript template

This is a really simple project that shows the usage of [Next.js](https://nextjs.org/docs/basic-features/typescript) and [Material-UI](https://mui.com/components/) React components with TypeScript.

## How to run?

Basically run the following command in the main directory:

```
npm run dev
```

## What is Material-UI?

[Material-UI](https://mui.com/components/) React components is simply a library that allows us to import and use different components to create a user interface in our React applications. This saves a significant amount of time since the developers do not need to write everything from scratch.

Material-UI widgets are heavily inspired by Google’s principles on building user interfaces. It is, therefore, easy for developers to build visually-appealing applications. You can learn more about Google’s material design principles from [here](https://material.io/design/introduction#principles).

## Notes

This example shows how to integrate the TypeScript type system into Next.js. Since TypeScript is supported out of the box with Next.js, all we have to do is to install TypeScript:

```
npm install --save-dev typescript
```

To enable TypeScript's features, we install the type declarations for React:

```
npm install --save-dev @types/react @types/react-dom
```

Also we need to install types for Material-UI React components:

```
npm install --save-dev @material-ui/core
```

When we run `npm run dev` next time, Next.js will start looking for any `.ts` or `.tsx` files in our project and builds it. It even automatically creates a `tsconfig.json` file for our project with the recommended settings.

Next.js has built-in TypeScript declarations, so we'll get autocompletion for Next.js modules straight away.

A `type-check` script is also added to `package.json`, which runs TypeScript's `tsc` CLI in `noEmit` mode to run type-checking separately. You can then include this, for example, in your `test` scripts.
