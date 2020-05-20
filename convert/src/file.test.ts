import { getFile } from "./file";

describe("file", () => {
  it("works", () => {
    expect(getFile({ corePlugins: [] })(["a", "b"])).toMatchInlineSnapshot(`
      "// http://github.com/dvkndn/typed-tailwind
      export const Tw = new Tailwind();

      class Tailwind {
        constructor(private readonly value: string = \\"\\") {}

        // Getter methods
        // Why \\"$\\":
        // - https://github.com/microsoft/TypeScript/issues/2361
        // - https://github.com/microsoft/TypeScript/issues/4538
        // - https://en.wikipedia.org/wiki/Regular_expression
        get $(): string { return this.value; }
        [Symbol.toPrimitive](): string { return this.value; }

        // Building methods
        private add(value: string): Tailwind {
          const sep = this.value && \\" \\";
          return new Tailwind(this.value + sep + value);
        }

        // Styling methods
        get a(): Tailwind { return this.add(\\"a\\"); }
        get b(): Tailwind { return this.add(\\"b\\"); }
      }
      "
    `);
  });
});
