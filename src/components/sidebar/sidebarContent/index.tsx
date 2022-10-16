import { AccountBalanceWalletOutlined } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import ThemeToggler from "components/themeToggler";
import { APP_ROUTES, SIDEBAR_TOP_MENUS } from "config/app";
import { useAuth } from "hooks";
import SidebarLink from "../sidebarLink";
import styles from "./styles.module.scss";

function SidebarContent() {
  const { logout } = useAuth();

  const logoutUser = (path: string) => () => {
    if (path === APP_ROUTES.LOGOUT) {
      logout();
    }
  };

  return (
    <Box>
      <ThemeToggler />
      {SIDEBAR_TOP_MENUS.map((menu) => (
        <Box key={menu.mainMenu}>
          <Box className={styles.titleContainer}>
            <Typography className={styles.sectionTitle}>
              {menu.mainMenu}
            </Typography>
          </Box>
          <Box>
            {menu.subMenu.map((subMenu) => (
              <SidebarLink
                onClick={logoutUser(subMenu.link)}
                key={subMenu.name}
                to={subMenu.link}
                linkText={subMenu.name}
                icon={<AccountBalanceWalletOutlined fontSize="large" />}
              />
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default SidebarContent;
