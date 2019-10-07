
const colors = {
  "1": "#f7fafc", "2": "#edf2f7", "3": "#e2e8f0",
  "4": "#cbd5e0", "5": "#a0aec0", "6": "#718096",
  "7": "#4a5568", "8": "#2d3748", "9": "#1a202c",
  "pink": "#B794F4", "teal": "#4FD1C5",
  "blue": "#63B3ED", "red": "#FC8181",
  "transparent": "#00000000",
};

export const defineTheme = () => {
  if (!window.monaco) { return; }
  window.monaco.editor.defineTheme("one", {
    base: "vs-dark",
    inherit: true,
    colors: {
      "editor.background": colors["8"],
      "editor.lineHighlightBorder": colors.transparent,
      "editorWidget.background": colors["9"],
      "editorWidget.border": colors.transparent,
      "list.hoverBackground": colors["7"],
      "list.focusBackground": colors["8"],
      "editorError.foreground": colors.red,
    },
    rules: [
      { token: "comment", foreground: colors["6"], fontStyle: "italic" },
      { token: "delimiter.parenthesis", foreground: colors["3"] },
      { token: "delimiter", foreground: colors.teal },
      { token: "identifier", foreground: colors.red },
      { token: "keyword", foreground: colors.pink },
      { token: "number", foreground: colors.teal },
      { token: "string", foreground: colors.blue },
      { token: "type.identifier", foreground: colors.blue },
    ],
  });
  window.monaco.editor.setTheme("one");
};
