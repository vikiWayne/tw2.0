import { Paper } from "@mui/material";
import styles from "app.module.scss";
import { useTheme } from "hooks";
import { useLayoutEffect } from "react";
import PageRoutes from "routes";

function App() {
  const { mode } = useTheme();
  // Add theme class to body before loading
  useLayoutEffect(() => {
    document.body.classList.add(`theme-${mode}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Paper className={styles.wrapper}>
      <PageRoutes />
    </Paper>
  );
}

export default App;
