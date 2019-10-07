module.exports = {
  prefix: "",
  important: false,
  separator: "$",
  theme: {
    screens: {},
    colors: {
      "1": "#f7fafc", "2": "#edf2f7", "3": "#e2e8f0",
      "4": "#cbd5e0", "5": "#a0aec0", "6": "#718096",
      "7": "#4a5568", "8": "#2d3748", "9": "#1a202c",
    },
    spacing: {
      "4": "4px", "8": "8px", "12": "12px", "16": "16px", "24": "24px",
      "32": "32px", "40": "40px", "48": "48px", "60": "60px",
    },
    backgroundColor: theme => theme("colors"),
    borderRadius: { "4": "4px", full: "999px" },
    boxShadow: {
      "lg": `
        0 10px 15px -3px rgba(0,0,0,.2),
        0 4px 6px -2px rgba(0,0,0,.1)
      `,
    },
    cursor: { pointer: "pointer" },
    flex: { "1": "1 1 0%", none: "0 0 auto" },
    fontSize: { "14": "14px", "32": "32px", "96": "96px" },
    lineHeight: { "16": "16px", "1": "1" },
    fontWeight: { "400": "400", "500": "500", "600": "600", "700": "700", "900": "900" },
    fontFamily: { mono: ["Source Code Pro", "monospace"] },
    height: theme => ({ ...theme("spacing"), full: "100%", screen: "100vh" }),
    inset: { "0": "0px" },
    padding: theme => theme("spacing"),
    margin: { auto: "auto" },
    textColor: theme => theme("colors"),
    width: theme => ({ ...theme("spacing"), full: "100%", screen: "100vw" }),
    letterSpacing: { "-1": "-1px" }
  },
  variants: {
    backgroundColor: [], textColor: [], boxShadow: [], fontWeight: [],
    textDecoration: [], borderColor: [],
  },
  corePlugins: [
    "display", "flex", "height", "overflow", "textColor", "userSelect", "width",
    "backgroundColor", "fontFamily", "padding", "borderRadius",
    "flexDirection", "position", "inset", "margin", "lineHeight", "textAlign",
    "alignItems", "justifyContent", "boxShadow", "fontWeight", "fontSize",
    "textDecoration", "letterSpacing"
  ],
  plugins: [],
}
