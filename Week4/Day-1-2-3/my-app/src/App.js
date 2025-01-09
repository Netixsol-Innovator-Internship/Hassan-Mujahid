import React from "react";
import { CssBaseline, Container, Grid2, Box } from "@mui/material";
import Header from "./Components/Header/Header";
import HeroSection from "./Components/Hero-section";
import { Blur1, Blur2, Blur3 } from "./Components/Blur/Blur";
import Sale from "./Components/Sale/Sale.js";

export default function App() {
  return (
    <Container
      sx={{
        position: "relative",
        overflowX: "hidden",
        maxWidth: "xl",
        width: "100vw",
        height: "100vh",
        p: 0,
      }}
    >
      <CssBaseline />
      <Grid2 container={true} spacing={6}>
        <Grid2 container={true} spacing={2}>
          <Container>
            <Header />
            <HeroSection />
            <Blur1 />
            <Blur2 />
            <Blur3 />
          </Container>
        </Grid2>
        <Sale />
      </Grid2>
    </Container>
  );
}
