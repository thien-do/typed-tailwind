# typed-tailwind-loader

A webpack loader for [Typed Tailwind](https://github.com/dvkndn/typed-tailwind). It simply executes all `Tw()...$()` calls at compile time so there is no run time cost and the output can then be processed normally with other tools (such as [PurgeCSS](https://github.com/dvkndn/typed-tailwind/blob/master/examples/webpack/package.json#L8)).

Note that you don't need this loader in order to use Typed Tailwind. Those benefits come with a trade-off that you must add it into your build config (e.g. [CRA](https://create-react-app.dev) users may need to [eject](https://create-react-app.dev/docs/available-scripts#npm-run-eject) or [fork](https://create-react-app.dev/docs/alternatives-to-ejecting)).

## Usages

Install `typed-tailwind-loader`:

```console
$ npm install typed-tailwind-loader --save-dev
```

Then add the loader to your `webpack` config. It only required option is a path to your [generated TypeScript class](https://github.com/dvkndn/typed-tailwind#usage):

**webpack.config.js** ([Example](https://github.com/dvkndn/typed-tailwind/blob/master/examples/webpack/webpack.config.js))

```js
const path = require("path");

const ttwLoader = {
  loader: "typed-tailwind-loader",
  options: { config: path.resolve("./src/tw.ts") },
};

const tsRules = {
  test: /\.tsx?$/,
  // Ensure that "typed-tailwind-loader" is run first
  use: ["ts-loader", ttwLoader],
  exclude: /node_modules/,
};

module.exports = { module: { rules: [tsRules] } };
```

**source.ts**

```ts
import { Tw } from './file.txt';
console.log(Tw().textRed().lgBlock().$());
```

**output.ts**

```ts
console.log("text-red lg:block");
```

## Examples

See a working example at [examples/webpack](https://github.com/dvkndn/typed-tailwind/tree/master/examples/webpack).

## License

[MIT](./LICENSE)
