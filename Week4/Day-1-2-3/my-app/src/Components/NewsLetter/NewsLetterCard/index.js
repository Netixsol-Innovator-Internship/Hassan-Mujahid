import React from "react";
import { Card } from "@mui/material";
import CardHeading from "./CardHeading/CardHeading";
import CardInput from "./CardInput/CardInput";

export default function NewsLetterCard() {
  return (
    <Card
      sx={{
        py: "24px",
        px: "16px",
        bgcolor: "#081956",
        display: "flex",
        flexDirection: "column",
        gap: 5,
      }}
    >
      <CardHeading />
      <CardInput />
    </Card>
  );
}
