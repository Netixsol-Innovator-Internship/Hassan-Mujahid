import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Card,
  Stack,
  Grid,
} from "@mui/material";
import Heading from "./Heading/Heading";
import MileStone from "./MileStone/mileStone";
import ImageCard from "./Image/imageCard";

const HeroSection = () => {
  return (
    <Grid container={true} spacing={2} position={"relative"} zIndex={1}>
      {/* First Grid Item */}

      <Grid item={true} xs={12} sm={6}>
        <Box display={"flex"} flexDirection={"column"} sx={{ gap: 2 }}>
          <Heading />
          <MileStone />
        </Box>
      </Grid>

      {/* Second Grid Item */}
      <Grid item={true} xs={12} sm={6}>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{}}
        >
          <ImageCard />
        </Box>
      </Grid>
    </Grid>
  );
};

export default HeroSection;
