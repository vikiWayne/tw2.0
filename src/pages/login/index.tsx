import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { PageWrapper } from "components/ui";
import { APP_ROUTES } from "config/app";
import { useAuth } from "hooks";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <PageWrapper>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "2rem",
          flexDirection: "column",
        }}
      >
        <Typography>
          Click to login as temp user / wait 2 sec to Login
        </Typography>
        <Button variant="contained" color="primary" onClick={onLogin}>
          Login
        </Button>
        {loading && <CircularProgress size={22} color="primary" />}
      </Box>
    </PageWrapper>
  );
}

export default Login;
