import * as React from "react";
import "./App.css";

import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={`top-right ${theme.palette.mode}`}>
        <IconButton
          aria-label="change theme"
          onClick={colorMode.toggleColorMode}
        >
          <DarkModeIcon fontSize="large" />
        </IconButton>
      </div>

      <div className="centered-container">
        <Stack direction="row" spacing={1}>
          <IconButton
            aria-label="github"
            onClick={() => {
              window.open("https://github.com/yiyixuu");
            }}
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
          <IconButton
            aria-label="linkedin"
            onClick={() => {
              window.open("https://www.linkedin.com/in/yiyi-xuu/");
            }}
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
          <IconButton
            aria-label="devpost"
            onClick={() => {
              window.open("https://devpost.com/yiyixu");
            }}
          >
            <LogoDevIcon fontSize="large" />
          </IconButton>

          <a href="Yiyi_ Xu_resume.pdf" download>
            <IconButton aria-label="resume">
              <TextSnippetIcon fontSize="large" />
            </IconButton>
          </a>
        </Stack>
      </div>
    </ThemeProvider>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState("dark");
  const [initialRender, setInitialRender] = React.useState(true);

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
        setInitialRender(false);
      },
    }),
    []
  );

  const initialTheme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  const transitionedTheme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
        components: {
          MuiCssBaseline: {
            styleOverrides: {
              body: {
                transition: "background-color 0.5s ease-in-out",
              },
            },
          },
          MuiIconButton: {
            styleOverrides: {
              root: {
                transition: "background-color 0.5s ease-in-out",
              },
            },
          },
        },
      }),
    [mode]
  );

  const theme = initialRender ? initialTheme : transitionedTheme;

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
