import { AccountBalanceWalletOutlined } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { SIDEBAR_TOP_MENUS } from "config/app";
import SidebarLink from "../sidebarLink";
import styles from "./styles.module.scss";

function SidebarContent() {
  return (
    <Box>
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
