import { createSystem, defaultConfig } from "@chakra-ui/react";

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        body: { value: "var(--font-geist-sans), sans-serif" },
        heading: { value: "var(--font-geist-sans), sans-serif" },
        mono: { value: "var(--font-geist-mono), monospace" },
      },
    },
    semanticTokens: {
      colors: {
        bg: {
          DEFAULT: {
            value: { _light: "oklch(0.98 0 0)", _dark: "oklch(0.12 0 0)" },
          },
          subtle: {
            value: { _light: "oklch(0.95 0 0)", _dark: "oklch(0.18 0 0)" },
          },
          muted: {
            value: { _light: "oklch(0.92 0 0)", _dark: "oklch(0.269 0 0)" },
          },
        },
        fg: {
          DEFAULT: {
            value: { _light: "oklch(0.145 0 0)", _dark: "oklch(0.95 0 0)" },
          },
          muted: {
            value: { _light: "oklch(0.556 0 0)", _dark: "oklch(0.708 0 0)" },
          },
          subtle: {
            value: { _light: "oklch(0.205 0 0)", _dark: "oklch(0.985 0 0)" },
          },
        },
        card: {
          bg: {
            value: { _light: "oklch(0.95 0 0)", _dark: "oklch(0.18 0 0)" },
          },
          fg: {
            value: { _light: "oklch(0.145 0 0)", _dark: "oklch(0.95 0 0)" },
          },
        },
        primary: {
          DEFAULT: {
            value: {
              _light: "oklch(0.488 0.243 264.376)",
              _dark: "oklch(0.55 0.2 260)",
            },
          },
          fg: {
            value: { _light: "oklch(0.985 0 0)", _dark: "oklch(0.95 0 0)" },
          },
        },
        secondary: {
          DEFAULT: {
            value: { _light: "oklch(0.97 0 0)", _dark: "oklch(0.269 0 0)" },
          },
          fg: {
            value: { _light: "oklch(0.205 0 0)", _dark: "oklch(0.985 0 0)" },
          },
        },
        muted: {
          DEFAULT: {
            value: { _light: "oklch(0.92 0 0)", _dark: "oklch(0.269 0 0)" },
          },
          fg: {
            value: { _light: "oklch(0.556 0 0)", _dark: "oklch(0.708 0 0)" },
          },
        },
        destructive: {
          DEFAULT: {
            value: {
              _light: "oklch(0.577 0.245 27.325)",
              _dark: "oklch(0.577 0.245 27.325)",
            },
          },
          fg: {
            value: {
              _light: "oklch(0.985 0 0)",
              _dark: "oklch(0.985 0 0)",
            },
          },
        },
      },
    },
  },
  globalCss: {
    "html, body": {
      bg: "bg",
      color: "fg",
      fontFamily: "body",
      transition: "background-color 0.4s ease-out, color 0.4s ease-out",
    },
    body: {
      fontFamily: "var(--font-geist-sans), sans-serif",
    },
    "*": {
      transition:
        "background-color 0.4s ease-out, color 0.4s ease-out, border-color 0.4s ease-out",
    },
  },
});
