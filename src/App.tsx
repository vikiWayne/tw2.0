import { Paper } from "@mui/material";
import styles from "app.module.scss";
import PageRoutes from "routes";

function App() {
  return (
    <Paper className={styles.wrapper}>
      <PageRoutes />
    </Paper>
  );
}

export default App;
