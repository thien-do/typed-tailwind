# Typed Tailwind – [typed.tw](https://typed.tw)

A tool to generate TypeScript source code from Tailwind CSS.

* [Usage](#usage)
* [FAQ](#faq)
    + [Is there a CLI?](#is-there-a-cli)
    + [Does it work without TypeScript?](#does-it-work-without-typescript)
    + [Does it work with PurgeCSS?](#does-it-work-with-purgecss)
    + [Is it slow?](#is-it-slow)
* [License](#license)

## Usage

1. Go to [typed.tw](https://typed.tw) and paste your Tailwind [configuration](https://tailwindcss.com/docs/configuration) into the first panel.
2. Save the generated code in the second panel as a TypeScript file in your codebase.
3. Import the `Style` function from that file and use its ([chain-able](https://en.wikipedia.org/wiki/Method_chaining)) methods:

```tsx
import { Style } from "style";

const Foo = () => (
  <p className={Style().textBlue().fontBold().$()}>
    Bold, blue text
  </p>
);
```

## FAQ

### Is there a CLI?

We are [working on it](https://github.com/dvkndn/typed-tailwind/issues/3).

### Does it work without TypeScript?

Yes. You can always compile the generated file to JS, optionally with a [declaration file](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html):

```sh
tsc --declaration style.ts
```

This way, you can still get full [code completion](https://code.visualstudio.com/docs/editor/intellisense), just no compile-time type checking.

### Does it work with PurgeCSS?

It requires a custom extractor, which [is planned](https://github.com/dvkndn/typed-tailwind/issues/2).

### Is it slow?

Out of the box, yes, it's slower than typing the class strings directly. It looks strings up and concatenate them at run time (as you can see in the generated file). This can be improved in several ways:

- Move the calls out of render. The work is still done at run time, but just once instead of every render.

    ```tsx
    const styles = Style().fontBold().textBlue().$();
    
    const Foo = () => (
      <p className={styles} />
    );
    ```
- Use a build plugin to move all of these works to compile time. It does not exist yet but [is planned](https://github.com/dvkndn/typed-tailwind/issues/1).

## License
[MIT](https://choosealicense.com/licenses/mit/)
