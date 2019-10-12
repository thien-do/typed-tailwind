const { readFileSync } = require("fs");
const getOptions = require("loader-utils").getOptions;
const validateOptions = require("schema-utils");
const ts = require("typescript");

const schema = {
  type: "object",
  properties: { config: { type: "string" } },
};

const re = /Tw\(\)[\n \w.\(\)]*\$\(\)/g;

const getJsSrc = (src) => {
  const options = { compilerOptions: { module: ts.ModuleKind.CommonJS } };
  return ts.transpileModule(src, options).outputText;
};

const getTw = (options) => {
  const tsSrc = readFileSync(options.config, "utf-8");
  const jsSrc = getJsSrc(tsSrc);
  const m = new module.constructor;
  m._compile(jsSrc, "tw");
  return m.exports.Tw;
};

module.exports = function(source) {
  if (!globalThis.Tw) {
    const options = getOptions(this);
    validateOptions(schema, options, "Typed Tailwind Loader");
    globalThis.Tw = getTw(options);
  }
  let newSource = source;
  [...source.matchAll(re)].forEach(match => {
    const str = Function(`"use strict";return (${match[0]})`)();
    newSource = newSource.replace(match[0], `"${str}"`);
  });
  return newSource;
};
