import React from "react";
import { Box, Card, CardMedia, CardActions, Button } from "@mui/material";
import sixFaceImage from "../../../assets/images/six-faces-1.png";

export default function imageCard() {
  return (
    <Box sx={{ position: "relative", zIndex: 1, height: "461px" }}>
      <Card
        elevation={10}
        sx={{
          maxWidth: "280px",
          height: { xs: "312px" },
          display: "flex",
          alignItems: "center",
          zIndex: "10",
          position: "relative",
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
          p: "120px 16px 16px 16px",
          backdropFilter: "blur(80px)",
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          position: "absolute",
          bottom: "0%",
          left: "-9%",
          width: "328px",
          height: "248px",
          zIndex: "1",
          border: "2px solid #1E50FF",
          borderRadius: "8px",
        }}
      >
        <CardActions
          sx={{
            display: "flex",
            flexDirection: "column",
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
            fullWidth
            variant="contained"
            sx={{
              py: "8px",
              px: "40px",
              textTransform: "none",
              fontSize: "16px",
              lineHeight: "32px",
            }}
          >
            Buy an OpenSea
          </Button>
          <Button
            fullWidth
            variant="outlined"
            sx={{
              py: "8px",
              px: "40px",
              textTransform: "none",
              fontSize: "16px",
              lineHeight: "32px",
              color: "#fff",
              borderColor: "white",
            }}
          >
            Know More
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
