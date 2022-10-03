import { DarkMode, LightMode } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useTheme } from "hooks";

function ThemeToggler() {
  const { mode, toggleTheme } = useTheme();

  const onToggleClick = () => {
    const nextTheme = mode === "dark" ? "light" : "dark";
    document.body.classList.remove(`theme-${mode}`);
    document.body.classList.add(`theme-${nextTheme}`);
    toggleTheme();
  };

  return (
    <IconButton onClick={onToggleClick} color="inherit">
      {mode === "dark" ? (
        <LightMode fontSize="large" />
      ) : (
        <DarkMode fontSize="large" />
      )}
    </IconButton>
  );
}

export default ThemeToggler;
