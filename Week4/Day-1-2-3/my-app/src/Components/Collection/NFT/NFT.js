import React from "react";
import { Box, Card, CardMedia, Typography, Avatar, Grid2 } from "@mui/material";
import SixFaces2 from "../../../assets/images/six-faces-2.png";
import SixFaces3 from "../../../assets/images/six-faces-3.png";
import SixFaces4 from "../../../assets/images/six-faces-4.png";
import Logo from "../../../assets/logos/Logo.png";

export default function NFT() {
  const data = [
    { img: SixFaces2, text: "YorNoose #432" },
    { img: SixFaces3, text: "YorHayr #332" },
    { img: SixFaces4, text: "YorMwoth #765" },
  ];
  return data.map((item) => {
    return (
      <Grid2 xs={12} md={6} xl={4} key={item.text} zIndex={1}>
        <Box
          border={"1px solid #1E50FF"}
          borderRadius={"8px"}
          p={{ xs: 2, xl: 3 }}
          display={"flex"}
          flexDirection={"column"}
          gap="24px"
          sx={{
            height: { xs: "320px", sm: "320px", md: "408px", xl: "432px" },
            width: { md: "324px", xl: "368px" },
          }}
        >
          <Card
            sx={{
              borderRadius: "8px",
              boxShadow: "0px 20px 26px -1px rgba(0,0,0,0.7)",
            }}
          >
            <CardMedia
              component={"img"}
              src={item.img}
              sx={{
                height: { xs: "320px", sm: "320px", md: "320px" },
                width: { md: "292px" },
              }}
            />
          </Card>
          <Box display={"flex"} gap={"16px"} alignItems={"center"}>
            <Avatar
              src={Logo}
              sx={{
                height: { xs: "32px", xl: "40px" },
                width: { xs: "32px", xl: "40px" },
              }}
            />
            <Typography
              variant="body1"
              fontSize={{ xs: "16px", xl: "24px" }}
              lineHeight={{ xs: "32px", xl: "40px" }}
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
