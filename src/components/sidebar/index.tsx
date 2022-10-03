import { Box } from "@mui/material";
import SidebarContent from "./sidebarContent";
import styles from "./styles.module.scss";

type SidebarProps = {};

function Sidebar(props: SidebarProps) {
  return (
    <Box className={styles.sidebar_container}>
      <SidebarContent />
    </Box>
  );
}

export default Sidebar;
