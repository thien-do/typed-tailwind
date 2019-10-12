# Usage with Webpack and PurgeCSS

This is an example project using [Typed Tailwind](https://github.com/dvkndn/typed-tailwind) at compile time with [typed-tailwind-loader](https://github.com/dvkndn/typed-tailwind/tree/master/webpack-loader).

The build result (the `dist` folder) of this project in intentionally checked in to show that:

- [`main.js`](https://github.com/dvkndn/typed-tailwind/blob/master/examples/webpack/dist/main.js): All `Tw()...$()` are inlined as normal strings and the generated TS class is removed.
- [`main.css`](https://github.com/dvkndn/typed-tailwind/blob/master/examples/webpack/dist/main.css): [Processed](https://github.com/dvkndn/typed-tailwind/blob/master/examples/webpack/package.json#L8) by PurgeCSS so only contains selectors that are used in our source code.
