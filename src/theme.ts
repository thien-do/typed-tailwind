const grayDark = "#7f848e";
const pink = "#c678dd";
const teal = "#56b6c2";
const grayLight = "#abb2bf";
const yellow = "#e5c07b";
const blue = "#61afef";
const red = "#e06c75";
const orange = "#d19a66";

export const defineTheme = () => {
  if (!window.monaco) { return; }
  window.monaco.editor.defineTheme("one", {
    base: "vs-dark",
    inherit: true,
    colors: {
      "dropdown.background": "#21252b",
      "dropdown.border": "#21252b",
      "focusBorder": "#464646",
      "input.background": "#1d1f23",
      "list.activeSelectionBackground": "#2c313a",
      "list.activeSelectionForeground": "#d7dae0",
      "list.focusBackground": "#383e4a",
      "list.hoverBackground": "#292d35",
      "list.highlightForeground": "#c5c5c5",
      "list.inactiveSelectionBackground": "#2c313a",
      "list.inactiveSelectionForeground": "#d7dae0",
      "list.warningForeground": "#d19a66",
      "menu.foreground": "#c8c8c8",
      "peekViewEditor.background": "#1b1d23",
      "peekViewEditor.matchHighlightBackground": "#29244b",
      "peekViewResult.background": "#22262b",
      "scrollbarSlider.background": "#4e566660",
      "scrollbarSlider.activeBackground": "#747d9180",
      "scrollbarSlider.hoverBackground": "#5a637580",

      "editor.background": "#282c3400",
      "editor.foreground": "#abb2bf",
      "editorError.foreground": "#c24038",
      "editorIndentGuide.activeBackground": "#c8c8c859",
      "editorMarkerNavigation.background": "#21252b",
      "editorRuler.foreground": "#abb2bf26",
      "editorWarning.foreground": "#d19a66",
      "editor.lineHighlightBackground": "#2c313c00",
      "editor.lineHighlightBorder": "#2c313c00",
      "editor.selectionBackground": "#67769660",
      "editor.selectionHighlightBackground": "#ffffff10",
      "editor.selectionHighlightBorder": "#ddd",
      "editorCursor.background": "#ffffffc9",
      "editorCursor.foreground": "#528bff",
      "editorBracketMatch.border": "#515a6b",
      "editorBracketMatch.background": "#515a6b",
      "editor.findMatchBackground": "#42557b",
      "editor.findMatchBorder": "#457dff",
      "editor.findMatchHighlightBackground": "#314365",
      "editor.wordHighlightBackground": "#484e5b",
      "editor.wordHighlightBorder": "#7f848e",
      "editor.wordHighlightStrongBackground": "#abb2bf26",
      "editor.wordHighlightStrongBorder": "#7f848e",
      "editorGroup.background": "#181a1f",
      "editorGroup.border": "#181a1f",
      "editorGroupHeader.tabsBackground": "#21252b",
      "editorIndentGuide.background": "#3b4048",
      "editorLineNumber.foreground": "#495162",
      "editorActiveLineNumber.foreground": "#737984",
      "editorWhitespace.foreground": "#3b4048",
      "editorHoverWidget.background": "#21252b",
      "editorHoverWidget.border": "#181a1f",
      "editorSuggestWidget.background": "#21252b",
      "editorSuggestWidget.border": "#181a1f",
      "editorSuggestWidget.selectedBackground": "#2c313a",
      "editorWidget.background": "#21252b",
    },
    rules: [
      { token: "comment", foreground: grayDark, fontStyle: "italic" },
      { token: "keyword", foreground: red },
      { token: "delimiter", foreground: teal },
      { token: "delimiter.parenthesis", foreground: grayLight },
      { token: "type.identifier", foreground: blue },
      { token: "string", foreground: blue },
      { token: "identifier", foreground: pink },
      { token: "number", foreground: orange },
    ],
  });
  window.monaco.editor.setTheme("one");
};
