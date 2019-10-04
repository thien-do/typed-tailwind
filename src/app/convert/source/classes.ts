const isNotVendor = (() => {
  const pseudos = [
    "::-webkit-input-placeholder", "::-moz-placeholder",
    ":-ms-input-placeholder", "::-ms-input-placeholder"
  ];
  return (selector: string) => (
    pseudos.every(pseudo => !selector.includes(pseudo))
  );
})();

const removePseudo = (() => {
  const pseudos = [
    // These are not Tailwind's pseudo variants but are used
    ":before", ":after", "::placeholder",
    // These are Tailwind's pseudo variants
    ":hover", ":active", ":focus-within", ":focus", ":visited", ":disabled",
    ":first-child", ":last-child", ":nth-child(odd)", ":nth-child(even)",
  ];
  const remove = (value: string, pseudo: string) => value.replace(pseudo, "");
  return (selector: string) => pseudos.reduce(remove, selector);
})();

// Slashes are used for escaping in CSS. We will put these classes in TS so
// no longer need escaping slashes
const removeSlash = (selector: string) => selector.split("\\").join("");

const removeDot = (selector: string) => selector.replace(".", "")

/**
 * Returns classes from list of selector
 *
 * @param selectors - List of selectors
 * @returns Classes from selectors
 */
export const getClasses = (selectors: string[]) => selectors
  .filter(isNotVendor)
  .map(removePseudo)
  .map(removeSlash)
  .map(removeDot);
