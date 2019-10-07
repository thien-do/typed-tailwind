# Typed Tailwind

Typed Tailwind brings types to [Tailwind CSS](https://tailwindcss.com) by generating TypeScript classes ([example](https://github.com/dvkndn/typed-tailwind/blob/master/src/style/index.ts)) whose methods produce the utility classes from your Tailwind config:

<img width="400" alt="Code completion" src="https://typed-tailwind.com/img1.png"> <img width="400" alt="Typo catching" src="https://typed-tailwind.com/img2.png">

Try it live at [typed-tailwind.com](https://typed-tailwind.com)!

Jump to: [Why](#why) · [Usage](#usage) · [FAQ](#faq) · [Credits](#credits) · [License](#license)

## Why

TBA

## Usage

1. Go to [typed-tailwind.com](https://typed-tailwind.com) and paste your Tailwind [configuration](https://tailwindcss.com/docs/configuration) into the first panel.
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

Example usages: https://github.com/dvkndn/typed-tailwind/search?l=TSX&q=Tw%28%29

## FAQ

+ [Where to put the generated file?](#where-to-put-the-generated-file)
+ [Does it work without TypeScript?](#does-it-work-without-typescript)
+ [Does it work with PurgeCSS?](#does-it-work-with-purgecss)
+ [Does it work with custom plugins?](#does-it-work-with-custom-plugins)
+ [Does it work with custom classes?](#does-it-work-with-custom-classes)
+ [Is there any performance issue?](#is-there-any-performance-issue)
+ [Is there a CLI?](#is-there-a-cli)
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

Not yet. It requires a custom extractor, which is [planned](https://github.com/dvkndn/typed-tailwind/issues/2). In the meantime, try [remove unused values](https://tailwindcss.com/docs/controlling-file-size#removing-unused-theme-values).

### Does it work with custom plugins?

It's not officially supported yet but could work if your plugins are defined as inline anonymous functions (like in the [docs](https://tailwindcss.com/docs/plugins)). Also see: [Does it work with custom classes](#oes-it-work-with-custom-classes).

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

Out of the box, it's a run time solution so it's slower and use more memory than typing the class strings directly. However, this can be improved:

- Move the calls out of the renders. The work is still done at run time, but just once at start-up instead of every render.

    ```tsx
    const styles = Tw().fontBold().textBlue().$();
    
    const Foo = () => <p className={styles} />;
    ```
- Use a build plugin to handle all the works at compile time. It does not exist yet but is [planned](https://github.com/dvkndn/typed-tailwind/issues/1).

### The generated code style doesn't match ours. Can I reformat it?

Yes. The generated code should be checked into your source control so you can (and should) format it with your code formatter. In other words, just judge it as your own source code.

### Is there a CLI?

It's [planned](https://github.com/dvkndn/typed-tailwind/issues/3).

## Credits

- [@nhducit](https://github.com/nhducit) for the help in implementation
- [@trungfinity](https://github.com/trungfinity) for the help in API design
- [anduin.design/style/](http://anduin.design/style/) for the inspiration

## License
[MIT](https://choosealicense.com/licenses/mit/)
