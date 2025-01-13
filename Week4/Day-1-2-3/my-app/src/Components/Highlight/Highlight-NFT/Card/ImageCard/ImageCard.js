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
        minHeight: { md: "608px", xl: "400px" },
      }}
    >
      <CardMedia
        component={"img"}
        src={SixFaces5}
        sx={{
          height: { xs: "296px", sm: "296px", md: "608px", xl: "400px" },
          width: { md: "272px", xl: "400px" },
        }}
      ></CardMedia>
    </Card>
  );
}
