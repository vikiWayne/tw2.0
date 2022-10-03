import { IconButton } from "@mui/material";
import { cloneElement, JSXElementConstructor, ReactElement } from "react";
import { useSwiper } from "swiper/react";
import styles from "./styles.module.scss";

type SliderProps = {
  children: ReactElement<any, string | JSXElementConstructor<any>>;
  moveTo: "left" | "right";
};

function SliderNavButton(props: SliderProps) {
  const { children, moveTo } = props;
  const swiper = useSwiper();

  return (
    <IconButton
      className={`${styles.navigator} ${styles[moveTo]}`}
      onClick={
        moveTo === "left" ? () => swiper.slidePrev() : () => swiper.slideNext()
      }
    >
      {cloneElement(children, { className: styles.navIcon })}
    </IconButton>
  );
}

export default SliderNavButton;
