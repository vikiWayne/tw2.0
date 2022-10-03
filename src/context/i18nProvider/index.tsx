import { CircularProgress, Paper } from "@mui/material";
import { useTranslation } from "react-i18next";

function I18nProvider(props: { children: any }) {
  const { children } = props;

  const { ready } = useTranslation(undefined, { useSuspense: false });

  if (ready) return children;

  return (
    <Paper sx={{ display: "grid", placeItems: "center", minHeight: "100vh" }}>
      <CircularProgress size={20} />
    </Paper>
  );
}

export default I18nProvider;
