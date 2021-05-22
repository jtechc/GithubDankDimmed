const chroma = require('chroma-js');
const { getColors } = require('./colors/getcolors');

function getTheme({ theme, name }) {
  const themes = (options) => options[theme];
  const color = getColors(theme);
  const gradient = color.scale;

  return {
    name: name,
    colors: {
      focusBorder: color.bg.zyteOpaque,
      foreground: color.text.primary,
      descriptionForeground: color.text.tertiary,
      errorForeground: color.text.danger,

      "textLink.foreground": color.text.link,
      "textLink.activeForeground": color.text.link,
      "textBlockQuote.background": color.bg.canvasInset,
      "textBlockQuote.border": color.markdown.blockquoteBorder,
      "textCodeBlock.background": chroma(color.markdown.codeBg).hex(),
      "textPreformat.foreground": color.text.secondary,
      "textSeparator.foreground": color.border.secondary,

      "button.background": color.btn.border,
      "button.foreground": color.btn.primary.text,
      "button.hoverBackground": color.btn.selectedBg,

      "button.secondaryBackground": color.btn.activeBg,
      "button.secondaryForeground": color.btn.text,
      "button.secondaryHoverBackground": color.btn.hoverBg,

      "checkbox.background": color.bg.tertiary,
      "checkbox.border": color.border.primary,

      "dropdown.background": color.bg.overlay,
      "dropdown.border": color.border.primary,
      "dropdown.foreground": color.text.primary,
      "dropdown.listBackground": color.bg.overlay,

      "input.background": color.input.bg,
      "input.border": color.input.border,
      "input.foreground": color.text.primary,
      "input.placeholderForeground": color.text.placeholder,

      "badge.foreground": themes({ danker: gradient.blue[2], dank: gradient.blue[2] }),
      "badge.background": themes({ danker: gradient.blue[7], dank: gradient.blue[7] }),

      "progressBar.background": themes({ danker: gradient.blue[5], dank: color.bg.zyte }),

      "titleBar.activeForeground": color.text.secondary,
      "titleBar.activeBackground": color.bg.canvas,
      "titleBar.inactiveForeground": color.text.tertiary,
      "titleBar.inactiveBackground": color.bg.canvasInset,
      "titleBar.border": color.border.primary,

      "activityBar.foreground": color.bg.zyte,
      "activityBar.inactiveForeground": color.text.tertiary,
      "activityBar.background": color.bg.canvas,
      "activityBarBadge.foreground": gradient.white,
      "activityBarBadge.background": themes({ danker: gradient.blue[5], dank: color.bg.zyte }),
      "activityBar.activeBorder": color.bg.zyte,
      "activityBar.border": color.border.primary,

      "sideBar.foreground": themes({ danker: "#cccccc", dank: "#cccccc" }),
      "sideBar.background": themes({ danker: "#3c3c3c", dank: "#252526" }),
      "sideBar.border": color.border.primary,
      "sideBarTitle.foreground": color.text.primary,
      "sideBarSectionHeader.foreground": color.text.primary,
      "sideBarSectionHeader.background": color.bg.canvasInset,
      "sideBarSectionHeader.border": color.border.primary,

      "list.hoverForeground": color.text.primary,
      "list.inactiveSelectionForeground": color.text.primary,
      "list.activeSelectionForeground": color.text.primary,
      "list.hoverBackground": themes({ danker: gradient.gray[8], dank: gradient.gray[8] }),
      "list.inactiveSelectionBackground": themes({ danker: gradient.gray[8], dank: gradient.gray[8] }),
      "list.activeSelectionBackground": themes({ danker: gradient.gray[7], dank: gradient.gray[7] }),
      "list.focusForeground": themes({ danker: gradient.gray[0], dank: gradient.gray[0] }),
      "list.focusBackground": themes({ danker: gradient.gray[7], dank: gradient.gray[7] }),
      "list.inactiveFocusBackground": themes({ danker: gradient.gray[8], dank: gradient.gray[8] }),
      "list.highlightForeground": themes({ danker: gradient.blue[4], dank: gradient.blue[4] }),

      "tree.indentGuidesStroke": color.border.secondary,

      "notificationCenterHeader.foreground": themes({ danker: gradient.gray[4], dank: gradient.gray[4] }),
      "notificationCenterHeader.background": themes({ danker: gradient.gray[9], dank: gradient.gray[9] }),
      "notifications.foreground": color.text.secondary,
      "notifications.background": themes({ danker: gradient.gray[8], dank: gradient.gray[8] }),
      "notifications.border": color.border.primary,
      "notificationsErrorIcon.foreground": themes({ danker: gradient.red[4], dank: gradient.red[4] }),
      "notificationsWarningIcon.foreground": themes({ danker: gradient.orange[3], dank: gradient.orange[3] }),
      "notificationsInfoIcon.foreground": themes({ danker: gradient.blue[3], dank: gradient.blue[3] }),

      "pickerGroup.border": themes({ danker: gradient.gray[7], dank: gradient.gray[7] }),
      "pickerGroup.foreground": color.text.secondary,
      "quickInput.background": themes({ danker: gradient.gray[9], dank: gradient.gray[9] }),
      "quickInput.foreground": color.text.primary,

      "statusBar.foreground": color.bg.zyte,
      "statusBar.background": color.bg.canvas,
      "statusBar.border": color.border.primary,
      "statusBar.noFolderBackground": color.bg.canvas,
      "statusBar.debuggingBackground": color.bg.dangerInverse,
      "statusBar.debuggingForeground": gradient.white,
      "statusBarItem.prominentBackground": color.bg.tertiary,
      "statusBarItem.remoteBackground": color.bg.zyte,

      "editorGroupHeader.tabsBackground": color.bg.canvasInset,
      "editorGroupHeader.tabsBorder": color.border.primary,
      "editorGroup.border": color.border.primary,

      "tab.activeForeground": color.text.primary,
      "tab.inactiveForeground": color.text.tertiary,
      "tab.inactiveBackground": color.bg.canvasInset,
      "tab.activeBackground": color.bg.canvas,
      "tab.hoverBackground": color.bg.canvas,
      "tab.unfocusedHoverBackground": color.state.hover.secondaryBg,
      "tab.border": color.border.primary,
      "tab.unfocusedActiveBorderTop": color.border.primary,
      "tab.activeBorder": color.bg.canvas,
      "tab.unfocusedActiveBorder": color.bg.canvas,
      "tab.activeBorderTop": color.underlinenav.borderActive,

      "breadcrumb.foreground": themes({ danker: color.text.primary, dank: "#99FFE2" }),
      "breadcrumb.focusForeground": themes({ danker: color.text.primary, dank: "#7bccb5" }),
      "breadcrumb.activeSelectionForeground": color.text.secondary,
      "breadcrumbPicker.background": color.bg.overlay,

      "editor.foreground": color.text.primary,
      "editor.background": "#252526",
      "editorWidget.background": color.bg.overlay,
      "editor.foldBackground": chroma(gradient.gray[4]).alpha(0.1).hex(), // needs opacity
      "editor.lineHighlightBackground": color.codemirror.activelineBg,
      "editorLineNumber.foreground": color.codemirror.linenumberText,
      "editorLineNumber.activeForeground": color.text.primary,
      "editorIndentGuide.background": color.border.secondary,
      "editorIndentGuide.activeBackground": color.border.primary,
      "editorWhitespace.foreground": themes({ danker: gradient.gray[5], dank: gradient.gray[5] }),
      "editorCursor.foreground": themes({ danker: gradient.blue[2], dank: gradient.blue[2] }),

      "editor.findMatchBackground": themes({ danker: "#ffd33d44", dank: "#ffd33d44" }),
      "editor.findMatchHighlightBackground": themes({ danker: "#ffd33d22", dank: "#ffd33d22" }),
      "editor.linkedEditingBackground": themes({ danker: "#3392FF22", dank: "#3392FF22" }),
      "editor.inactiveSelectionBackground": themes({ danker: "#3392FF22", dank: "#3392FF22" }),
      "editor.selectionBackground": themes({ danker: "#3392FF44", dank: "#3392FF44" }),
      "editor.selectionHighlightBackground": themes({ danker: "#17E5E633", dank: "#17E5E633" }),
      "editor.selectionHighlightBorder": themes({ danker: "#17E5E600", dank: "#17E5E600" }),
      "editor.wordHighlightBackground": themes({ danker: "#17E5E600", dank: "#17E5E600" }),
      "editor.wordHighlightStrongBackground": themes({ danker: "#17E5E600", dank: "#17E5E600" }),
      "editor.wordHighlightBorder": themes({ danker: "#17E5E699", dank: "#17E5E699" }),
      "editor.wordHighlightStrongBorder": themes({ danker: "#17E5E666", dank: "#17E5E666" }),
      "editorBracketMatch.background": themes({ danker: "#17E5E650", dank: "#17E5E6BF" }),
      "editorBracketMatch.border": themes({ danker: "#17E5E600", dank: "#7E17E680" }),

      "editorGutter.modifiedBackground": color.diff.change.border,
      "editorGutter.addedBackground": color.diff.addition.border,
      "editorGutter.deletedBackground": color.diff.deletion.border,

      "diffEditor.insertedTextBackground": themes({ danker: chroma(color.diff.addition.bg).hex(), dank: chroma(color.diff.addition.bg).hex() }),
      "diffEditor.removedTextBackground": themes({ danker: chroma(color.diff.deletion.bg).hex(), dank: chroma(color.diff.deletion.bg).hex() }),

      "scrollbar.shadow": themes({ danker: "#0008", dank: "#0008" }),
      "scrollbarSlider.background": themes({ danker: "#484F5833", dank: "#484F5833" }),
      "scrollbarSlider.hoverBackground": themes({ danker: "#484F5844", dank: "#484F5844" }),
      "scrollbarSlider.activeBackground": themes({ danker: "#484F5888", dank: "#484F5888" }),
      "editorOverviewRuler.border": themes({ danker: gradient.black, dank: gradient.black }),

      "panel.background": color.bg.canvasInset,
      "panel.border": color.border.primary,
      "panelTitle.activeBorder": color.underlinenav.borderActive,
      "panelTitle.activeForeground": color.bg.zyte,
      "panelTitle.inactiveForeground": color.bg.zyteOpaque,
      "panelInput.border": color.border.primary,

      "terminal.foreground": color.text.secondary,
      'terminal.ansiBlack': color.ansi.black,
      'terminal.ansiRed': color.ansi.red,
      'terminal.ansiGreen': color.ansi.green,
      'terminal.ansiYellow': color.ansi.yellow,
      'terminal.ansiBlue': color.ansi.blue,
      'terminal.ansiMagenta': color.ansi.magenta,
      'terminal.ansiCyan': color.ansi.cyan,
      'terminal.ansiWhite': color.ansi.white,
      'terminal.ansiBrightBlack': color.ansi.blackBright,
      'terminal.ansiBrightRed': color.ansi.redBright,
      'terminal.ansiBrightGreen': color.ansi.greenBright,
      'terminal.ansiBrightYellow': color.ansi.yellowBright,
      'terminal.ansiBrightBlue': color.ansi.blueBright,
      'terminal.ansiBrightMagenta': color.ansi.magentaBright,
      'terminal.ansiBrightCyan': color.ansi.cyanBright,
      'terminal.ansiBrightWhite': color.ansi.whiteBright,
      'terminal.background': color.bg.termBg,

      "gitDecoration.addedResourceForeground": color.diff.addition.text,
      "gitDecoration.modifiedResourceForeground": color.diff.change.text,
      "gitDecoration.deletedResourceForeground": color.diff.deletion.text,
      "gitDecoration.untrackedResourceForeground": color.diff.addition.text,
      "gitDecoration.ignoredResourceForeground": themes({ danker: color.text.disabled, dank: color.text.disabled }),
      "gitDecoration.conflictingResourceForeground": color.text.warning,
      "gitDecoration.submoduleResourceForeground": color.text.secondary,

      "debugToolBar.background": color.bg.overlay,
      "editor.stackFrameHighlightBackground": themes({ danker: "#D2992225", dank: "#C6902625" }), // needs opacity (yellow)
      "editor.focusedStackFrameHighlightBackground": themes({ danker: "#3FB95025", dank: "#2b6a3033" }), // needs opacity (green)

      "peekViewEditor.matchHighlightBackground": themes({ danker: "#ffd33d33", dank: "#ffd33d33" }),
      "peekViewResult.matchHighlightBackground": themes({ danker: "#ffd33d33", dank: "#ffd33d33" }),
      "peekViewEditor.background": themes({ danker: "#0d111788", dank: "#0d111788" }),
      "peekViewResult.background": themes({ danker: gradient.gray[9], dank: gradient.gray[9] }),

      "settings.headerForeground": color.text.secondary,
      "settings.modifiedItemIndicator": color.diff.change.border,
      "welcomePage.buttonBackground": color.btn.bg,
      "welcomePage.buttonHoverBackground": color.btn.hoverBg,
      "menu.selectionBackground": color.bg.menuBg
    },
    semanticHighlighting: true,
    semanticTokenColors: {
      "variable": "#7bccb5",
      "variable.defaultLibrary": "#EE5959",
      "class": gradient.orange[3]
    },
    tokenColors: [
      {
        scope: ["comment", "punctuation.definition.comment", "string.comment"],
        settings: {
          foreground: themes({ danker: gradient.gray[3], dank: gradient.gray[3] }),
        },
      },
      {
        scope: [
          "constant",
          "entity.name.constant",
          "variable.other.constant",
          "variable.language",
          "entity",
          "variable.other.readwrite"
        ],
        settings: {
          foreground: themes({ danker: gradient.blue[2], dank: color.bg.zyte }),
        },
      },
      {
        scope: [
          "entity.name",
          "meta.export.default",
          "meta.definition.variable"
        ],
        settings: {
          foreground: themes({ danker: gradient.orange[2], dank: gradient.orange[2] }),
        },
      },
      {
        scope: [
          "variable.parameter.function",
          "meta.jsx.children",
          "meta.block",
          "meta.tag.attributes",
          "entity.name.constant",
          "meta.object.member",
          "meta.embedded.expression"
        ],
        settings: {
          foreground: color.text.primary,
        },
      },
      {
        "scope": "entity.name.function",
        "settings": {
          foreground: themes({ danker: gradient.purple[2], dank: gradient.red[3] }),
        }
      },
      {
        "scope": [
          "entity.name.tag",
          "support.class.component"
        ],
        settings: {
          foreground: themes({ danker: gradient.green[1], dank: gradient.green[1] }),
        },
      },
      {
        scope: "keyword",
        settings: {
          fontStyle: "italic",
          foreground: themes({ danker: gradient.red[3], dank: gradient.purple[3] }),
        },
      },
      {
        scope: ["storage", "storage.type"],
        settings: {
          fontStyle: "italic",
          foreground: themes({ danker: gradient.red[3], dank: gradient.purple[3] }),
        },
      },
      {
        scope: [
          "storage.modifier.package",
          "storage.modifier.import",
          "storage.type.java",
        ],
        settings: {
          foreground: color.text.primary,
        },
      },
      {
        scope: [
          "string",
          "punctuation.definition.string",
          "string punctuation.section.embedded source",
        ],
        settings: {
          foreground: themes({ danker: gradient.blue[1], dank: gradient.blue[1] }),
        },
      },
      {
        scope: "support",
        settings: {
          foreground: themes({ danker: gradient.blue[2], dank: gradient.blue[2] }),
        },
      },
      {
        scope: "meta.property-name",
        settings: {
          foreground: themes({ danker: gradient.blue[2], dank: gradient.blue[2] }),
        },
      },
      {
        scope: "variable",
        settings: {
          foreground: themes({ danker: gradient.orange[2], dank: gradient.orange[2] }),
        },
      },
      {
        scope: "variable.other",
        settings: {
          foreground: color.text.primary,
        },
      },
      {
        scope: "invalid.broken",
        settings: {
          fontStyle: "italic",
          foreground: themes({ danker: gradient.red[2], dank: gradient.red[2] }),
        },
      },
      {
        scope: "invalid.deprecated",
        settings: {
          fontStyle: "italic",
          foreground: themes({ danker: gradient.red[2], dank: gradient.red[2] }),
        },
      },
      {
        scope: "invalid.illegal",
        settings: {
          fontStyle: "italic",
          foreground: themes({ danker: gradient.red[2], dank: gradient.red[2] }),
        },
      },
      {
        scope: "invalid.unimplemented",
        settings: {
          fontStyle: "italic",
          foreground: themes({ danker: gradient.red[2], dank: gradient.red[2] }),
        },
      },
      {
        scope: "carriage-return",
        settings: {
          fontStyle: "italic underline",
          background: themes({ danker: gradient.red[3], dank: gradient.red[3] }),
          foreground: themes({ danker: gradient.gray[9], dank: gradient.gray[9] }),
          content: "^M",
        },
      },
      {
        scope: "message.error",
        settings: {
          foreground: themes({ danker: gradient.red[2], dank: gradient.red[2] }),
        },
      },
      {
        scope: "string source",
        settings: {
          foreground: color.text.primary,
        },
      },
      {
        scope: "string variable",
        settings: {
          foreground: themes({ danker: gradient.blue[2], dank: gradient.blue[2] }),
        },
      },
      {
        scope: ["source.regexp", "string.regexp"],
        settings: {
          foreground: themes({ danker: gradient.blue[1], dank: gradient.blue[1] }),
        },
      },
      {
        scope: [
          "string.regexp.character-class",
          "string.regexp constant.character.escape",
          "string.regexp source.ruby.embedded",
          "string.regexp string.regexp.arbitrary-repitition",
        ],
        settings: {
          foreground: themes({ danker: gradient.blue[1], dank: gradient.blue[1] }),
        },
      },
      {
        scope: "string.regexp constant.character.escape",
        settings: {
          fontStyle: "bold",
          foreground: themes({ danker: gradient.green[1], dank: gradient.green[1] }),
        },
      },
      {
        scope: "support.constant",
        settings: {
          foreground: themes({ danker: gradient.blue[2], dank: gradient.blue[2] }),
        },
      },
      {
        scope: "support.variable",
        settings: {
          foreground: themes({ danker: gradient.blue[2], dank: gradient.blue[2] }),
        },
      },
      {
        scope: "meta.module-reference",
        settings: {
          foreground: themes({ danker: gradient.blue[2], dank: gradient.blue[2] }),
        },
      },
      {
        scope: "punctuation.definition.list.begin.markdown",
        settings: {
          foreground: themes({ danker: gradient.orange[2], dank: gradient.orange[2] }),
        },
      },
      {
        scope: ["markup.heading", "markup.heading entity.name"],
        settings: {
          fontStyle: "bold",
          foreground: themes({ danker: gradient.blue[2], dank: gradient.blue[2] }),
        },
      },
      {
        scope: "markup.quote",
        settings: {
          foreground: themes({ danker: gradient.green[1], dank: gradient.green[1] }),
        },
      },
      {
        scope: "markup.italic",
        settings: {
          fontStyle: "italic",
          foreground: color.text.primary,
        },
      },
      {
        scope: "markup.bold",
        settings: {
          fontStyle: "bold",
          foreground: color.text.primary,
        },
      },
      {
        scope: "markup.raw",
        settings: {
          foreground: themes({ danker: gradient.blue[2], dank: gradient.blue[2] }),
        },
      },
      {
        scope: [
          "markup.deleted",
          "meta.diff.header.from-file",
          "punctuation.definition.deleted",
        ],
        settings: {
          background: themes({ danker: gradient.red[9], dank: gradient.red[9] }),
          foreground: themes({ danker: gradient.red[2], dank: gradient.red[2] }),
        },
      },
      {
        scope: [
          "markup.inserted",
          "meta.diff.header.to-file",
          "punctuation.definition.inserted",
        ],
        settings: {
          background: themes({ danker: gradient.green[9], dank: gradient.green[9] }),
          foreground: themes({ danker: gradient.green[1], dank: gradient.green[1] }),
        },
      },
      {
        scope: ["markup.changed", "punctuation.definition.changed"],
        settings: {
          background: themes({ danker: gradient.orange[8], dank: gradient.orange[8] }),
          foreground: themes({ danker: gradient.orange[2], dank: gradient.orange[2] }),
        },
      },
      {
        scope: ["markup.ignored", "markup.untracked"],
        settings: {
          foreground: themes({ danker: gradient.gray[8], dank: gradient.gray[8] }),
          background: themes({ danker: gradient.blue[2], dank: gradient.blue[2] }),
        },
      },
      {
        scope: "meta.diff.range",
        settings: {
          foreground: themes({ danker: gradient.purple[2], dank: gradient.purple[2] }),
          fontStyle: "bold",
        },
      },
      {
        scope: "meta.diff.header",
        settings: {
          foreground: themes({ danker: gradient.blue[2], dank: gradient.blue[2] }),
        },
      },
      {
        scope: "meta.separator",
        settings: {
          fontStyle: "bold",
          foreground: themes({ danker: gradient.blue[2], dank: gradient.blue[2] }),
        },
      },
      {
        scope: "meta.output",
        settings: {
          foreground: themes({ danker: gradient.blue[2], dank: gradient.blue[2] }),
        },
      },
      {
        scope: [
          "brackethighlighter.tag",
          "brackethighlighter.curly",
          "brackethighlighter.round",
          "brackethighlighter.square",
          "brackethighlighter.angle",
          "brackethighlighter.quote",
        ],
        settings: {
          foreground: themes({ danker: gradient.gray[3], dank: gradient.gray[3] }),
        },
      },
      {
        scope: "brackethighlighter.unmatched",
        settings: {
          foreground: themes({ danker: gradient.red[2], dank: gradient.red[2] }),
        },
      },
      {
        scope: ["constant.other.reference.link", "string.other.link"],
        settings: {
          foreground: themes({ danker: gradient.blue[1], dank: gradient.blue[1] }),
          fontStyle: "underline",
        },
      },
      {
        scope: ["constant.numeric.decimal"],
        settings: {
          foreground: gradient.red[6]
        }
      }
    ],
  };
}

module.exports = getTheme;