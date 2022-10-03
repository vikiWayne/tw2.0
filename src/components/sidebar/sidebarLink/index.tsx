import { Box, Typography } from "@mui/material";
import { cloneElement, JSXElementConstructor, ReactElement } from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.scss";

type NavLinkProps = {
  to: string;
  icon: ReactElement<any, string | JSXElementConstructor<any>>;
  linkText: string;
  onClick?: () => void;
};

function SidebarLink(props: NavLinkProps) {
  const { to, icon, linkText, onClick } = props;

  return (
    <NavLink
      onClick={onClick}
      to={to}
      className={({ isActive }) => (isActive ? styles.activeLink : undefined)}
    >
      <Box className={styles.linkContainer}>
        {cloneElement(icon, { className: styles.linkIcon })}
        <Typography variant="body2" className={styles.linkText}>
          {linkText}
        </Typography>
      </Box>
    </NavLink>
  );
}

export default SidebarLink;
