import { Box, Typography } from "@mui/material";
import { Fragment } from "react";
import styles from "./styles.module.scss";

type BreadcrumbProps = {
  crumbs: {
    text: string;
    active?: boolean;
  }[];
  separator?: string;
};

function Breadcrumb(props: BreadcrumbProps) {
  const { crumbs, separator } = props;
  return (
    <Box className={styles.breadcrumbs}>
      {crumbs.map((crumb, index) => (
        <Fragment key={`${crumb.text} - ${index}`}>
          <Typography
            className={`${styles.text} ${
              crumb.active ? styles.activeText : ""
            }`}
          >
            {crumb.text}
          </Typography>
          {index !== crumbs.length - 1 && (
            <Typography className={styles.text}>{separator}</Typography>
          )}
        </Fragment>
      ))}
    </Box>
  );
}

export default Breadcrumb;

Breadcrumb.defaultProps = {
  separator: "/",
};
