import { CloseRounded } from "@mui/icons-material";
import {
  Box,
  Drawer,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme as useMuiTheme } from "@mui/material/styles";
import { AppBar, Sidebar } from "components";
import SidebarContent from "components/sidebar/sidebarContent";
import { useTheme } from "hooks";
import { ReactNode, useEffect, useLayoutEffect, useState } from "react";
import styles from "./styles.module.scss";

const PRO_PIC =
  "https://images.lifestyleasia.com/wp-content/uploads/sites/7/2022/02/28155940/The-Batman-1.jpg";
const NAME = "Patrick";

type LayoutProps = { children: ReactNode };

function Layout(props: LayoutProps) {
  const { children } = props;
  const { mode } = useTheme();
  const theme = useMuiTheme();
  const isLargerScreen = useMediaQuery(theme.breakpoints.up("sm"));

  const [showSidebar, setShowSidebar] = useState(false);

  const toggleDrawer = () => {
    setShowSidebar((prev) => !prev);
  };

  // Add theme class to body before loading
  useLayoutEffect(() => {
    document.body.classList.add(`theme-${mode}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isLargerScreen) {
      showSidebar && toggleDrawer();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLargerScreen]);

  return (
    <>
      <AppBar imageUri={PRO_PIC} name={NAME} onMenuClick={toggleDrawer} />
      <Drawer
        anchor="right"
        open={showSidebar}
        variant="temporary"
        onClose={toggleDrawer}
        classes={{ paper: styles.drawerPaper }}
      >
        <Box className={styles.drawerBox} role="presentation">
          <Box className={styles.userInfo}>
            <Box className={styles.imageContainer}>
              <img
                src={PRO_PIC}
                alt={NAME}
                loading="lazy"
                className={styles.img}
              />
            </Box>
            <Typography variant="body2" className={styles.name}>
              {NAME}
            </Typography>
          </Box>
          <IconButton onClick={toggleDrawer}>
            <CloseRounded className={styles.icon} />
          </IconButton>
        </Box>
        <Box sx={{ height: "100%" }}>
          <SidebarContent />
        </Box>
      </Drawer>
      <Box className={styles.pageContent}>
        <Sidebar />
        {children}
      </Box>
    </>
  );
}

export default Layout;
