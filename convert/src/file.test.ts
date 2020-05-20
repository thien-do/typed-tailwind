import { getFile } from "./file";

describe("file", () => {
  it("works", () => {
    expect(getFile({ corePlugins: [] })(["a", "b"])).toMatchInlineSnapshot(`
      "// http://github.com/dvkndn/typed-tailwind
      export const Tw = (): Tailwind => new Tailwind();

      class Tailwind {
        value = \\"\\";

        // Getter methods
        // Why \\"$\\":
        // - https://github.com/microsoft/TypeScript/issues/2361
        // - https://github.com/microsoft/TypeScript/issues/4538
        // - https://en.wikipedia.org/wiki/Regular_expression
        $(): string { return this.value; }
        [Symbol.toPrimitive](): string { return this.$(); }

        // Building methods
        private add(value: string): Tailwind {
          this.value && (this.value += \\" \\");
          this.value += value;
          return this;
        }

        // Styling methods
        a(): Tailwind { return this.add(\\"a\\"); }
        b(): Tailwind { return this.add(\\"b\\"); }
      }
      "
    `);
  });
});
