import React from "react";
import { Card, CardMedia } from "@mui/material";
import SixFaces5 from "../../../../../assets/images/six-faces-5.png";

export default function ImageCard() {
  return (
    <Card
      elevation={"10"}
      sx={{
        borderRadius: "8px",
        boxShadow: "0px 10px 26px 5px rgba(0,0,0,0.7)",
      }}
    >
      <CardMedia component={"img"} src={SixFaces5} height={"296px"}></CardMedia>
    </Card>
  );
}
