import {
  CheckCircleOutlineRounded,
  HighlightOffRounded,
} from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import styles from "./styles.module.scss";

type PlanOptionProps = {
  isAvailable: boolean;
  label: string;
};

function PlanOption(props: PlanOptionProps) {
  const { isAvailable, label } = props;

  return (
    <Box className={styles.listItem}>
      {isAvailable ? (
        <CheckCircleOutlineRounded
          className={`${styles.listIcon} ${styles.available}`}
        />
      ) : (
        <HighlightOffRounded
          className={`${styles.listIcon} ${styles.unavailable}`}
        />
      )}
      <Typography variant="body2" className={styles.itemText}>
        {label}
      </Typography>
    </Box>
  );
}

export default PlanOption;
