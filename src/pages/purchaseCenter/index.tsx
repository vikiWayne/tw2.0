import {
  Box,
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { Breadcrumb, PageWrapper, Plan } from "components/ui";
import SwiperCarousal from "lib/swiper";
import { SwiperSlide } from "swiper/react";
import PlanDetails from "./planDetails";
import PlanOption from "./planOption";

import styles from "./styles.module.scss";

const breadcrumbs = {
  subscriptionInfo: [
    { text: "Subscriptions", active: true },
    {
      text: "Manage your subscriptions and begin building your future with the tools and coaching to match you with your ideal career.",
    },
  ],
  addOns: [
    { text: "Add-Ons", active: true },
    {
      text: "Feeling a little left behind? Here are add-ons that can help you get ahead of the pack",
    },
  ],
};

const PLAN_OPTIONS = [
  { label: "Get Daily Matches", isFree: true, isPreferred: true },
  { label: "Show Employers Your Interest", isFree: true, isPreferred: true },
  {
    label: "Preferred Search Results Positioning",
    isFree: false,
    isPreferred: true,
  },
  { label: "manage your interest with AML", isFree: false, isPreferred: true },
  {
    label: "priority matching to job opportunities",
    isFree: false,
    isPreferred: true,
  },
];

function PurchaseCenter() {
  return (
    <PageWrapper>
      <Box className={styles.pageLayout}>
        <Breadcrumb crumbs={breadcrumbs.subscriptionInfo} />
        <Box className={styles.subscriptionItems}>
          <Plan
            label="My Current Plan"
            active
            activeColor="#00cccc"
            width="40%"
          >
            <Box className={styles.cardContent}>
              <Box className={styles.topContent}>
                <PlanDetails
                  title="Free"
                  subTitle="Build your profile and grow your network"
                  description="As a free member, you get to set-up your profile and get
                  viewed by employers."
                  isActive
                />
              </Box>
              <Divider className={styles.divider} />
              <Box className={styles.midContent}>
                <Typography
                  variant="body2"
                  component="h5"
                  className={styles.text}
                >
                  FREE TO START
                </Typography>
              </Box>
              <Divider className={styles.divider} />
              <Box className={styles.bottomContent}>
                {PLAN_OPTIONS.map((option) => (
                  <PlanOption
                    label={option.label}
                    key={option.label}
                    isAvailable={option.isFree}
                  />
                ))}
              </Box>
            </Box>
          </Plan>

          <Plan label="My Current Plan" width="40%" activeColor="#00cccc">
            <Box className={styles.cardContent}>
              <Box className={styles.topContent}>
                <PlanDetails
                  title="Preferred"
                  subTitle="Match with employers and build your future"
                  description="As a preferred member, you get perfect job matches daily"
                />
              </Box>
              <Divider className={styles.divider} />
              <Box className={styles.midContent}>
                <Box className={styles.radioContainer}>
                  <FormControl>
                    <RadioGroup
                      row
                      aria-labelledby="plan-options"
                      name="row-plan-group"
                    >
                      <FormControlLabel
                        value="month"
                        control={<Radio />}
                        label="$15/Month"
                        classes={{ label: styles.radioLabel }}
                      />
                      <FormControlLabel
                        value="year "
                        control={<Radio />}
                        label="$150/Year"
                        classes={{ label: styles.radioLabel }}
                      />
                    </RadioGroup>
                  </FormControl>
                  <Box className={styles.btnContainer}>
                    <Button variant="contained" color="primary" fullWidth>
                      Upgrade Plan
                    </Button>
                  </Box>
                </Box>
              </Box>
              <Divider className={styles.divider} />
              <Box className={styles.bottomContent}>
                {PLAN_OPTIONS.map((option) => (
                  <PlanOption
                    label={option.label}
                    key={option.label}
                    isAvailable={option.isPreferred}
                  />
                ))}
              </Box>
            </Box>
          </Plan>
        </Box>
        <Breadcrumb crumbs={breadcrumbs.addOns} />
        <SwiperCarousal className={styles.carouselContainer}>
          {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
            <SwiperSlide key={num}>
              <Box className={styles.swiper}>
                <Plan
                  label="Achieve Goals faster"
                  active
                  width="80%"
                  activeColor="#19ce99"
                >
                  <Box className={styles.sliderContent}>
                    <Box>
                      <Typography className={styles.sliderItemTitle}>
                        Title {num}
                      </Typography>
                      <Typography className={styles.sliderSubText}>
                        Make a plan to reach your income and career goals by
                        talking with an experienced career coach.
                      </Typography>
                    </Box>
                    <Divider className={styles.divider} />
                    <Box className={styles.sliderItemBottom}>
                      <Typography className={styles.bottomText}>
                        $5/session
                      </Typography>
                    </Box>
                  </Box>
                </Plan>
              </Box>
            </SwiperSlide>
          ))}
        </SwiperCarousal>
      </Box>
    </PageWrapper>
  );
}

export default PurchaseCenter;
