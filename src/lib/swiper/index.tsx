import {
  KeyboardArrowLeftRounded,
  KeyboardArrowRightRounded,
} from "@mui/icons-material";
import { Box } from "@mui/material";
import { ReactNode } from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperProps } from "swiper/react";
import SliderNavButton from "./sliderNavButton";
import styles from "./styles.module.scss";

const breakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  599: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  900: {
    slidesPerView: 4,
    spaceBetween: 40,
  },
};

type CarousalProps = {
  children: ReactNode;
} & SwiperProps;

function SwiperCarousal(props: CarousalProps) {
  const { children, className, ...rest } = props;
  return (
    <Box className={styles.carousel}>
      <Swiper
        breakpoints={breakpoints}
        modules={[Pagination]}
        pagination={{
          clickable: true,
          renderBullet: (index, className) =>
            `<div class="${className} ${styles.bullet}"></div>`,
        }}
        className={`mySwiper ${className}`}
        {...rest}
      >
        <SliderNavButton moveTo="left">
          <KeyboardArrowLeftRounded fontSize="large" />
        </SliderNavButton>
        <SliderNavButton moveTo="right">
          <KeyboardArrowRightRounded fontSize="large" />
        </SliderNavButton>
        {children}
      </Swiper>
    </Box>
  );
}

export default SwiperCarousal;
