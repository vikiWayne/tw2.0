import { Box } from "@mui/material";
import { ReactNode } from "react";

type PageWrapperProps = {
  children: ReactNode;
};

function PageWrapper(props: PageWrapperProps) {
  const { children } = props;
  return (
    <Box sx={{ padding: "3rem", width: "100%", overflow: "auto" }}>
      {children}
    </Box>
  );
}

export default PageWrapper;
