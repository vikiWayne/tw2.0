import { Box, Card, Typography } from "@mui/material";
import { ReactNode } from "react";
import styles from "./styles.module.scss";

type PlanTypes = {
  label?: string;
  active?: boolean;
  activeColor?: string;
  children: ReactNode;
  width?: string;
  hideLabel?: boolean;
};

function Plan(props: PlanTypes) {
  const { label, active, activeColor, children, width, hideLabel } = props;
  return (
    <Card
      className={styles.planWrapper}
      sx={{ width, border: active ? `3px solid ${activeColor}` : "none" }}
      elevation={2}
      classes={{ root: styles.card }}
    >
      {active && !hideLabel && label && (
        <Box
          className={styles.label}
          sx={{ backgroundColor: active ? activeColor : "transparent" }}
        >
          <Typography className={styles.labelText}>{label}</Typography>
        </Box>
      )}
      {children}
    </Card>
  );
}

export default Plan;

Plan.defaultProps = {
  width: "50%",
};
