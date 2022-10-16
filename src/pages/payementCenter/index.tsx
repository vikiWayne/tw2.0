import {
  Box,
  Button,
  Divider,
  Typography,
  useTheme as useMuiTheme,
} from "@mui/material";
import { Breadcrumb, PageWrapper, PaymentCard, Plan } from "components/ui";
import styles from "./styles.module.scss";

const breadcrumbs = {
  paymentDetails: [
    { text: "Payment details", active: true },
    {
      text: "Add any credit/debit card details and manage which card is to be active",
    },
  ],
  accessCode: [
    { text: "Access Code", active: true },
    {
      text: "Manage your access code here",
    },
  ],
};

const NO_OF_PAYMENTS = 10;
const NO_OF_ACCESS_CODES = 5;

function PaymentCenter() {
  const { palette } = useMuiTheme();

  return (
    <PageWrapper>
      <Box className={styles.pageLayout}>
        <Box className={styles.spaceBetween}>
          <Breadcrumb crumbs={breadcrumbs.paymentDetails} />
          <Button
            color="primary"
            variant="contained"
            classes={{ root: styles.paymentButton }}
          >
            Add payment details
          </Button>
        </Box>
        <Box className={styles.scrollContainer}>
          {Array.from({ length: NO_OF_PAYMENTS }, (_, i) => i + 1).map(
            (num) => (
              <PaymentCard
                key={num}
                cardType="Credit Card"
                isActiveCard
                cardName="mastercard ending in *1234"
              />
            )
          )}
        </Box>
        <Breadcrumb crumbs={breadcrumbs.accessCode} />
        <Box className={styles.scrollContainer}>
          {Array.from({ length: NO_OF_ACCESS_CODES }, (_, i) => i + 1).map(
            (num) => (
              <Plan
                width="20%"
                active
                activeColor={
                  num % 2 ? palette.success.main : palette.error.main
                }
                key={num}
              >
                <Box className={styles.accessCode}>
                  <Box className={styles.code}>
                    <Typography className={styles.codeText}>PW2023</Typography>
                  </Box>
                  <Divider className={styles.divider} />
                  <Box className={styles.expiryDetails}>
                    <Typography className={styles.expiryInfo}>
                      Valid till
                    </Typography>

                    <Box className={styles.status}>
                      <Typography className={styles.expiryInfo}>
                        Dec 31, 2030
                      </Typography>
                      <Typography className={styles.expiryInfo}>
                        {num % 2 ? "Active" : "Inactive"}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Plan>
            )
          )}
        </Box>
      </Box>
    </PageWrapper>
  );
}

export default PaymentCenter;
