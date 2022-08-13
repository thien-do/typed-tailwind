Heads-up! This project is archived. Please see https://github.com/stitchesjs/stitches for a good alternative

<hr />

# Typed Tailwind · [typed.tw](https://typed.tw)

Typed Tailwind brings types to [Tailwind CSS](https://tailwindcss.com) by generating TypeScript classes ([example](https://github.com/dvkndn/typed.tw/blob/master/src/style/index.ts)) whose methods let you use the utility classes generated from your Tailwind config:

<p align="center"><img width="593" alt="Code completion" src="https://typed.tw/img1.png"></p>

Try it live at [typed.tw](https://typed.tw)!

Jump to: [Why](#why) · [Usage](#usage) · [Examples](#examples) · [FAQ](#faq) · [Credits](#credits) · [License](#license)

## Why

I wanted to combine the 2 great things in Front End engineering nowadays: [static typing](https://www.typescriptlang.org) and [functional CSS](https://tailwindcss.com/docs/utility-first). Turn out, they get along very well. The constraint and predictability of utilities classes makes them ideal candidates to be statically typed as methods of a TypeScript class.

<p align="center"><img width="593" alt="Error catching" src="https://typed.tw/img2.png"></p>

**Is it more than just [code completion](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)?** Yes. Code completion is just suggestion. Static typing _enforces_ the correctness of your ~~code~~ styling, so you can do things like defining better API, automated code refactoring, and errors (like using undefined colors) can be caught at compile time.

## Usage

1. Go to [typed.tw](https://typed.tw) (or [typed-tailwind.com](https://typed-tailwind.com) if you can't access .tw domain) and paste your Tailwind [configuration](https://tailwindcss.com/docs/configuration) into the first panel.
2. Save the generated file in the second panel to your codebase.
3. Import the `Tw` function from that file and use its ([chain-able](https://en.wikipedia.org/wiki/Method_chaining)) methods:

```tsx
// In practice, the file should be imported using absolute path
import { Tw } from "./tw";

const Foo = () => (
  <p className={Tw().textBlue().fontBold().$()}>
    Bold, blue text
  </p>
);
```

Example usages:
- https://github.com/dvkndn/typed.tw/search?l=TSX&q=Tw%28%29
- https://github.com/dvkndn/otf.show/search?l=TSX&q=Tw%28%29

### Compile time usage with Webpack

Above is a run time usage. It allows you to easily add Typed Tailwind to many projects and build systems (e.g. it works with [CRA](http://create-react-app.dev) without ejecting). However, it has some problems:

- The bundled JS is bigger because it includes the whole generated TypeScript class that reflects all possible values from your Tailwind configuration, even if you don't use them.
- It's a little bit slower for users because class names are looked up and concatenated at run time.
- Other tools like PurgeCSS cannot process the code out of the box.

Therefore, we have a [typed-tailwind-loader](https://github.com/dvkndn/typed.tw/tree/master/webpack-loader) to apply all `Tw()...$()` calls at compile time (as a part of your webpack build process, to be exact). This eliminates all 3 issues above.

- Learn more at [the package folder](https://github.com/dvkndn/typed.tw/tree/master/webpack-loader).
- See a working example at [examples/webpack](https://github.com/dvkndn/typed.tw/tree/master/examples/webpack).

## Examples

- **With Webpack:** Please see the [examples/webpack](https://github.com/dvkndn/typed.tw/tree/master/examples/webpack) folder.
- **With CRA:** The [typed.tw](https://typed.tw) web app actually uses CRA itself. Its source code is in the [web](https://github.com/dvkndn/typed.tw/tree/master/web) folder. Please see its [style definition](https://github.com/dvkndn/typed.tw/tree/master/web/src/style) and a [sample usage](https://github.com/dvkndn/typed.tw/blob/master/web/src/app/app.tsx#L9).
- **With Next.js:** The [otf.show](https://github.com/dvkndn/otf.show/tree/master/src/styles) web app is a real-life open source project that uses Typed Tailwind and Next.js. Please see its [style definition](https://github.com/dvkndn/otf.show/tree/master/src/styles) and a [sample usage](https://github.com/dvkndn/otf.show/blob/master/src/components/dropdown/menu.tsx#L11).

## FAQ

+ [Where to put the generated file?](#where-to-put-the-generated-file)
+ [Does it work without TypeScript?](#does-it-work-without-typescript)
+ [Does it work with PurgeCSS?](#does-it-work-with-purgecss)
+ [Does it work with custom plugins?](#does-it-work-with-custom-plugins)
+ [Does it work with custom classes?](#does-it-work-with-custom-classes)
+ [Is there any performance issue?](#is-there-any-performance-issue)
+ [The generated code style doesn't match ours. Can I reformat it?](#the-generated-code-style-doesnt-match-ours-can-i-reformat-it)

### Where to put the generated file?

The file should be imported from many places in your codebase so place it where you can take advantage of absolute imports. For example, if you are using CRA and your [`baseUrl`](https://create-react-app.dev/docs/importing-a-component#absolute-imports) is the `src` folder then you can place the file at `src/tw/index.ts`.

```ts
import { Tw } from "tw";
```

### Does it work without TypeScript?

Yes. You can always compile the generated file to JS, optionally with a [declaration file](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html):

```sh
tsc --declaration style.ts
```

This way, you still get full [code completion](https://code.visualstudio.com/docs/editor/intellisense), just no compile time type checking.

### Does it work with PurgeCSS?

Yes. Please see [Compile time usage with Webpack](#compile-time-usage-with-webpack) section. If you can't follow that, try [remove unused values](https://tailwindcss.com/docs/controlling-file-size#removing-unused-theme-values) to reduce the bundled size.


### Does it work with custom plugins?

It's not officially supported yet but could work if your plugins are defined as inline anonymous functions (like in the [docs](https://tailwindcss.com/docs/plugins)). Also see: [Does it work with custom classes](#does-it-work-with-custom-classes).

### Does it work with custom classes?

Yes. The result is simply a source file, so feel free to modify it anyway you want:

```typescript
// style.ts

class Tailwind {
  /* ... */
  
  // Add your custom ones:
  textShadow(): Tailwind { return this.add("text-shadow"); }
}
```

### Is there any performance issue?

Out of the box, maybe, because styling are applied at run-time, on render to be specific. However, you can [use it at compile time](#compile-time-usage-with-webpack) to eliminate all of these issues.

If you can't modify your build config, or if you don't use webpack, it helps a little bit by moving the calls out of the renders. The work is still done at run time, but just once at start-up instead of every render.

```tsx
const styles = Tw().fontBold().textBlue().$();

const Foo = () => <p className={styles} />;
```

### The generated code style doesn't match ours. Can I reformat it?

Yes. The generated code should be checked into your source control so you can (and should) format it with your code formatter. In other words, just judge it as your own source code.

## Credits

- [@nhducit](https://github.com/nhducit) and [@trungfinity](https://github.com/trungfinity) for their help in the implementation design.
- [anduin.design/style/](http://anduin.design/style/) for the inspiration.

## Alternatives
- [re-tailwind](https://github.com/phthhieu/re-tailwind) Tailwind CSS in ReasonML

## License
[MIT](https://choosealicense.com/licenses/mit/)
