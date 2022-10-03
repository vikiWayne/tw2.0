import {
  createTheme,
  CssBaseline,
  PaletteOptions,
  Theme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material";
import { useLocalStorage, usePreferDarkMode } from "hooks";
import { createContext, ReactNode, useMemo, useState } from "react";
import colors from "styles/abstracts/_theme-colors.scss";

type ThemeType = "light" | "dark";

type InitialType = {
  mode: ThemeType;
  toggleTheme: () => void;
};

type ProviderType = {
  children: ReactNode;
};

export const ThemeContext = createContext<InitialType>({
  mode: "light",
  toggleTheme: () => {},
});

export function ThemeProvider(props: ProviderType) {
  const { children } = props;
  const prefersDarkMode = usePreferDarkMode();
  const [savedTheme, setSavedTheme] = useLocalStorage("default-theme");

  const getDefaultTheme = (): ThemeType => {
    const browserDefault: ThemeType = prefersDarkMode ? "dark" : "light";
    return savedTheme || browserDefault;
  };

  const [mode, setMode] = useState<ThemeType>(getDefaultTheme());

  const colorMode = useMemo<InitialType>(
    () => ({
      toggleTheme: () => {
        const nextThemeMode: ThemeType = mode === "dark" ? "light" : "dark";
        setMode(nextThemeMode);
        setSavedTheme(nextThemeMode);
      },
      mode,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [mode]
  );

  // color configuration for light mode
  const lightThemePalette = useMemo<PaletteOptions>(
    () => ({
      primary: {
        main: colors.colorPrimaryLight,
      },
      secondary: {
        main: colors.colorSecondaryLight,
      },
    }),
    []
  );

  // color configuration for dark mode
  const darkThemePalette = useMemo<PaletteOptions>(
    () => ({
      mode: "dark",
      primary: {
        main: colors.colorPrimaryDark,
      },
      secondary: {
        main: colors.colorSecondaryDark,
      },
    }),
    []
  );

  const theme = useMemo<Theme>(
    () =>
      createTheme({
        palette: mode === "dark" ? darkThemePalette : lightThemePalette,
        typography: {
          fontSize: 14,
          htmlFontSize: 16,
        },
      }),
    [mode, darkThemePalette, lightThemePalette]
  );

  return (
    <ThemeContext.Provider value={colorMode}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}
