import { Box, Divider, Typography } from "@mui/material";
import masterCard from "assets/icons/mastercard.svg";
import styles from "./styles.module.scss";

type PaymentCardPropType = {
  cardName: string;
  cardType: string;
  isActiveCard: boolean;
};

function PaymentCard(props: PaymentCardPropType) {
  const { cardName, cardType, isActiveCard } = props;
  return (
    <Box className={styles.cardWrapper}>
      <Box className={styles.cardDetails}>
        <img src={masterCard} alt="mastercard" className={styles.cardLogo} />
        <Box className={styles.cardInfo}>
          <Typography className={styles.cardName}>{cardName}</Typography>
          <Box className={styles.cardStatus}>
            <Typography className={styles.cardStatusText}>
              {cardType}
            </Typography>
            <Typography className={styles.cardStatusText}>
              {isActiveCard ? "Active" : "Inactive"}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Divider />
      <Box className={styles.cardControls}>
        <Typography className={styles.usageText}>usage</Typography>
        <Box className={styles.action}>
          <Typography className={styles.viewUsage}>view usage</Typography>
          <Typography className={styles.remove}>remove</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default PaymentCard;
