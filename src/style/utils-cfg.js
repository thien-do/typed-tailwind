module.exports = {
  prefix: "",
  important: false,
  separator: "$",
  theme: {
    screens: {},
    colors: {
      currentColor: "currentColor", transparent: "transparent",
      "0": "#282c34", "1": "#353b45", "2": "#3e4451", "3": "#545862",
      "4": "#565c64", "5": "#abb2bf", "6": "#b6bdca", "7": "#c8ccd4",
      "8": "#e06c75", "9": "#d19a66", "A": "#e5c07b", "B": "#98c379",
      "C": "#56b6c2", "D": "#61afef", "E": "#c678dd", "F": "#be5046",
      "0at90": "rgba(40, 44, 52, 0.90)",
    },
    spacing: {
      "4": "4px", "8": "8px", "12": "12px", "16": "16px", "24": "24px",
      "32": "32px", "40": "40px", "48": "48px", "60": "40px",
    },
    backgroundColor: theme => theme("colors"),
    borderColor: theme => theme("colors"),
    borderRadius: { "4": "4px", full: "999px" },
    borderWidth: { "0": "0", "1": "1px", "2": "2px" },
    boxShadow: {
      "panel": `
        #3e4451 0 0 0 1px inset,
        hsl(220, 13%, 13%) 0 0 0 1px,
        hsl(0, 0%, 0%, 0.6) 0 4px 16px
      `,
    },
    cursor: { pointer: "pointer" },
    flex: { "1": "1 1 0%", none: "0 0 auto" },
    fontSize: { "14": "14px", "16": "16px", "18": "18px" },
    fontWeight: { normal: "400", semibold: "600" },
    fontFamily: {
      mono: ["Source Code Pro", "monospace"],
    },
    height: theme => ({ ...theme("spacing"), full: "100%", screen: "100vh" }),
    inset: { "0": "0px" },
    lineHeight: { "16": "16px" },
    padding: theme => theme("spacing"),
    margin: { auto: "auto" },
    textColor: theme => theme("colors"),
    width: theme => ({ ...theme("spacing"), full: "100%", screen: "100vw" }),
  },
  variants: {
    backgroundColor: [], textColor: [], boxShadow: [],
  },
  corePlugins: [
    "display", "flex", "height", "overflow", "textColor", "userSelect", "width",
    "backgroundColor", "fontFamily", "padding", "borderRadius", "backgroundSize",
    "flexDirection", "position", "inset", "margin", "lineHeight", "textAlign",
    "alignItems", "justifyContent", "boxShadow", "backgroundAttachment",
    "backgroundPosition",
  ],
  plugins: [],
}
