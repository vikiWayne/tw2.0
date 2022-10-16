import { Box, Button, CircularProgress, Typography } from "@mui/material";
import phoneImg from "assets/images/phone.png";
import { APP_ROUTES } from "config/app";
import { useAuth } from "hooks";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

function Login() {
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const onLogin = async () => {
    setLoading(true);
    const isLogged = await login("admin", "admin@123");
    setLoading(false);
    if (isLogged) {
      navigate(APP_ROUTES.PURCHASE_CENTER);
    }
  };
  return (
    <Box className={styles.container}>
      <Box className={styles.formContainer}>
        <Typography fontWeight="500" fontSize="5.8rem">
          <span className="colorPrimary">pepel account </span>for people who are
          looking for...
        </Typography>
        <Typography sx={{ mb: 2, color: "primary.main" }}>
          Click on login and wait for 2 seconds to login
        </Typography>
        <Button variant="contained" onClick={onLogin}>
          Login
          {loading && (
            <CircularProgress size={15} color="info" sx={{ mx: 1 }} />
          )}
        </Button>
      </Box>
      <Box className={styles.imageContainer}>
        <img src={phoneImg} alt="phone" className={styles.img} />
      </Box>
    </Box>
  );
}

export default Login;
