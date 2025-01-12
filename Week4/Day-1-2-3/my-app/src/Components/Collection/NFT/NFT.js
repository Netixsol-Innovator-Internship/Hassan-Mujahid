import React from "react";
import { Box, Card, CardMedia, Typography, Avatar, Grid2 } from "@mui/material";
import SixFaces2 from "../../../assets/images/six-faces-2.png";
import SixFaces3 from "../../../assets/images/six-faces-3.png";
import SixFaces4 from "../../../assets/images/six-faces-4.png";
import Logo from "../../../assets/logos/Logo.png";

export default function NFT() {
  const data = [
    { img: SixFaces2, text: "YorNoose #432" },
    { img: SixFaces3, text: "YorNoose #332" },
    { img: SixFaces4, text: "YorNoose #765" },
  ];
  return data.map((item) => {
    return (
      <Grid2 xs={12} sm={6} md={4} key={item.text}>
        <Box
          border={"1px solid #1E50FF"}
          borderRadius={"8px"}
          p={"16px"}
          display={"flex"}
          flexDirection={"column"}
          gap="24px"
        >
          <Card
            sx={{
              borderRadius: "8px",
              boxShadow: "0px 20px 26px -1px rgba(0,0,0,0.7)",
            }}
          >
            <CardMedia component={"img"} src={item.img} height={"320px"} />
          </Card>
          <Box display={"flex"} gap={"16px"}>
            <Avatar
              src={Logo}
              sx={{
                height: "32px",
                width: "32px",
              }}
            />
            <Typography
              variant="body1"
              fontSize={"16px"}
              lineHeight={"32px"}
              fontWeight={"bold"}
            >
              {item.text}
            </Typography>
          </Box>
        </Box>
      </Grid2>
    );
  });
}
