import React from "react";
import { Box, Card, CardMedia, CardActions, Button } from "@mui/material";
import sixFaceImage from "../../../assets/images/six-faces-1.png";

export default function imageCard() {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      sx={{ position: "relative", zIndex: 1, height: "461px" }}
    >
      <Card
        sx={{
          maxWidth: {
            xs: "280px",
            sm: "280px",
            md: "252px",
            lg: "320px",
            xl: "403px",
            "2xl": "466px",
          },
          height: {
            xs: "312px",
            sm: "312px",
            lg: "350px",
            xl: "368px",
            "2xl": "403px",
          },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: "10",
          position: "relative",
          boxShadow: "0px 20px 26px -1px rgba(0,0,0,0.7)",
        }}
      >
        <CardMedia
          component={"img"}
          height={"100%"}
          image={sixFaceImage}
          alt="sixFacesImage-1"
          sx={{
            objectFit: "fill",
          }}
        />
      </Card>
      <Card
        sx={{
          p: {
            xs: "120px 16px 16px 16px",
            sm: "120px 16px 16px",
            md: "120px 24px 24px",
            md: "120px 40px 40px",
          },
          backdropFilter: "blur(80px)",
          backgroundColor: "rgba(255, 255, 255, 0.09)",
          position: "absolute",
          bottom: { xs: "0%", sm: "0%", md: "0%", lg: "-7%", "2xl": "-15%" },
          left: { xs: "-8.5%", sm: "-8.5%", md: "-9.5%" },
          width: {
            xs: "328px",
            sm: "328px",
            md: "300px",
            lg: "380px",
            xl: "480px",
            "2xl": "525px",
          },
          height: {
            xs: "248px",
            sm: "248px",
            md: "256px",
            lg: "256px",
            xl: "208px",
            "2xl": "220px",
          },
          zIndex: "1",
          border: "2px solid #1E50FF",
          borderRadius: "8px",
        }}
      >
        <CardActions
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "column",
              md: "column",
              lg: "column",
              xl: "row",
            },
            justifyContent: "center",
            alignItems: "center",
            gap: "16px",
            p: 0,
            "& .MuiButton-root": {
              marginLeft: 0, // Remove left margin from all buttons inside CardActions
            },
          }}
        >
          <Button
            variant="contained"
            sx={{
              width: {
                xs: "100%",
                sm: "100%",
                md: "100%",
                lg: "100%",
                xl: "auto",
              },
              py: "8px",
              px: "40px",
              textTransform: "none",
              fontSize: "16px",
              lineHeight: "32px",
              textWrap: { xl: "nowrap" },
            }}
          >
            Buy an OpenSea
          </Button>
          <Button
            variant="outlined"
            sx={{
              width: {
                xs: "100%",
                sm: "100%",
                md: "100%",
                lg: "100%",
                xl: "auto",
              },
              py: "8px",
              px: "40px",
              textTransform: "none",
              fontSize: "16px",
              lineHeight: "32px",
              color: "#fff",
              borderColor: "white",
              textWrap: { xl: "nowrap" },
            }}
          >
            Know More
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
