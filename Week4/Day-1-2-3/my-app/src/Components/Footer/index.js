import React from "react";
import { Box, Typography } from "@mui/material";
import Top from "./Top/Top";

export default function Footer() {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={3} py={"24px"}>
      <Top />
      <Box
        sx={{
          borderBottom: "1px solid #1E50FF",
        }}
      />
      <Typography fontSize={"16px"} lineHeight={"32px"} color="text.disabled">
        © 2022 Yorfy Template • All Rights Reserved
      </Typography>
      <Typography fontSize={"16px"} lineHeight={"32px"} color="text.disabled">
        Made With Love by Groweb Studio
      </Typography>
    </Box>
  );
}
