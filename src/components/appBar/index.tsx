import { MenuRounded } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import styles from "./styles.module.scss";

interface IAppBarProps {
  name: string;
  imageUri: string;
  onMenuClick: () => void;
}

function AppBar(props: IAppBarProps) {
  const { imageUri, name, onMenuClick } = props;

  return (
    <div className={styles.container}>
      <div className={styles.logo}></div>
      <div className={styles.userInfo}>
        <div className={styles.imageContainer}>
          <img
            alt={name}
            loading="lazy"
            className={styles.image}
            src={imageUri}
          />
        </div>
        <Typography variant="body2" className={styles.name}>
          {name}
        </Typography>
      </div>
      <IconButton className={styles.button} onClick={onMenuClick}>
        <MenuRounded color="info" className={styles.icon} />
      </IconButton>
    </div>
  );
}

export default AppBar;
