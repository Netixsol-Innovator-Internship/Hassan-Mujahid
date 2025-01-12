import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Card,
  Stack,
  Grid2,
} from "@mui/material";
import Heading from "./Heading/Heading";
import MileStone from "./MileStone/mileStone";
import ImageCard from "./Image/imageCard";

const HeroSection = () => {
  return (
    <Grid2
      container={true}
      spacing={{ xs: 2, sm: 2, md: 5 }}
      position={"relative"}
      zIndex={1}
      alignItems={"center"}
    >
      {/* First Grid2 Item */}
      <Grid2 xs={12} sm={12} md={6} alignItems={"center"}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          sx={{ gap: 2, maxWidth: { md: "324px" } }}
        >
          <Heading />
          <MileStone />
        </Box>
      </Grid2>

      {/* Second Grid2 Item */}
      <Grid2
        xs={12}
        sm={12}
        md={6}
        container
        sx={{
          width: { xs: "100%", sm: "100%", md: "auto" },
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          mx: { md: "auto" },
        }}
      >
        <Box display={"flex"} justifyContent={"center"}>
          <ImageCard />
        </Box>
      </Grid2>
    </Grid2>
  );
};

export default HeroSection;
