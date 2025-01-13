import React from "react";
import { Card, Box } from "@mui/material";
import CardHeading from "./CardHeading/CardHeading";
import CardInput from "./CardInput/CardInput";

export default function NewsLetterCard() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card
        sx={{
          py: { xs: "24px", sm: "24px", md: "40px", xl: "80px" },
          px: { xs: "16px", sm: "16px", md: "40px", xl: "80px" },
          bgcolor: "#081956",
          display: "flex",
          flexDirection: "column",
          alignItems: { xl: "center" },
          justifyContent: { xl: "center" },
          gap: 5,
          borderRadius: { xs: "8px", sm: "8px", md: "16px" },
          maxWidth: { md: "664px" },
          minWidth: { xl: "1136px" },
          minHeight: { xl: "432px" },
        }}
      >
        <CardHeading />
        <CardInput />
      </Card>
    </Box>
  );
}
