"use client";

import type { IconButtonProps, SpanProps } from "@chakra-ui/react";
import { ClientOnly, IconButton, Skeleton, Span } from "@chakra-ui/react";
import type { ThemeProviderProps } from "next-themes";
import { ThemeProvider, useTheme } from "next-themes";
import * as React from "react";
import { LuMoon, LuSun } from "react-icons/lu";

export interface ColorModeProviderProps extends ThemeProviderProps {
}

export function ColorModeProvider({ ...props }: ColorModeProviderProps) {
  return (
    <ThemeProvider 
      attribute="class" 
      disableTransitionOnChange={false}
      enableSystem={true}
      defaultTheme="system"
      storageKey="chakra-ui-color-mode"
      enableColorScheme={false}
      {...props} 
    />
  );
}

export type ColorMode = "light" | "dark";

export interface UseColorModeReturn {
  colorMode: ColorMode;
  setColorMode: (colorMode: ColorMode) => void;
  toggleColorMode: () => void;
}

export function useColorMode(): UseColorModeReturn {
  const { resolvedTheme, setTheme, forcedTheme } = useTheme();
  const colorMode = forcedTheme || resolvedTheme;
  const toggleColorMode = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };
  return {
    colorMode: colorMode as ColorMode,
    setColorMode: setTheme,
    toggleColorMode,
  };
}

export function useColorModeValue<T>(light: T, dark: T) {
  const { colorMode } = useColorMode();
  return colorMode === "dark" ? dark : light;
}

export function ColorModeIcon() {
  const { colorMode } = useColorMode();
  return colorMode === "dark" ? <LuMoon /> : <LuSun />;
}

interface ColorModeButtonProps extends Omit<IconButtonProps, "aria-label"> {}

export const ColorModeButton = React.forwardRef<
  HTMLButtonElement,
  ColorModeButtonProps
>(function ColorModeButton(props, forwardedRef) {
  const { toggleColorMode } = useColorMode();
  const [isAnimating, setIsAnimating] = React.useState(false);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = async (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!document.startViewTransition) {
      toggleColorMode();
      return;
    }

    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    setIsAnimating(true);

    const transition = document.startViewTransition(() => {
      toggleColorMode();
    });

    await transition.ready;

    const clipPath = [
      `circle(0px at ${x}px ${y}px)`,
      `circle(${Math.hypot(
       	 Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      )}px at ${x}px ${y}px)`,
    ];

    document.documentElement.animate(
      {
        clipPath,
      },
      {
        duration: 600,
        easing: "linear",
        pseudoElement: "::view-transition-new(root)",
      }
    );

    await transition.finished;
    setIsAnimating(false);
  };

  return (
    <ClientOnly fallback={<Skeleton boxSize="9" />}>
      <IconButton
        ref={forwardedRef || buttonRef}
        onClick={handleToggle}
        variant="outline"
        aria-label="Toggle color mode"
        size="sm"
				rounded="full"
        disabled={isAnimating}
        {...props}
        css={{
          _icon: {
            width: "5",
            height: "5",
          },
        }}
      >
        <ColorModeIcon />
      </IconButton>
    </ClientOnly>
  );
});

export const LightMode = React.forwardRef<HTMLSpanElement, SpanProps>(
  function LightMode(props, ref) {
    return (
      <Span
        color="fg"
        display="contents"
        className="chakra-theme light"
        colorPalette="gray"
        colorScheme="light"
        ref={ref}
        {...props}
      />
    );
  },
);

export const DarkMode = React.forwardRef<HTMLSpanElement, SpanProps>(
  function DarkMode(props, ref) {
    return (
      <Span
        color="fg"
        display="contents"
        className="chakra-theme dark"
        colorPalette="gray"
        colorScheme="dark"
        ref={ref}
        {...props}
      />
    );
  },
);
