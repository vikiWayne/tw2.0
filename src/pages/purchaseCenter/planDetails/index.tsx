import { Typography } from "@mui/material";
import styles from "./styles.module.scss";

type PlanDetailsProps = {
  title: string;
  subTitle: string;
  description: string;
  isActive?: boolean;
};

function PlanDetails(props: PlanDetailsProps) {
  const { title, subTitle, description, isActive } = props;
  return (
    <>
      <Typography
        variant="body2"
        component="h3"
        className={`${styles.title} ${
          isActive ? styles.activeText : styles.inActiveText
        }`}
      >
        {title}
      </Typography>
      <Typography variant="body2" component="h4" className={styles.subTitle}>
        {subTitle}
      </Typography>
      <Typography variant="caption" component="h3" className={styles.caption}>
        {description}
      </Typography>
    </>
  );
}

export default PlanDetails;
