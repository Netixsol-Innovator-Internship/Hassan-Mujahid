import React from "react";
import { CssBaseline, Container, Grid2, Box } from "@mui/material";
import Header from "./Components/Header/Header";
import HeroSection from "./Components/Hero-section";
import { Blur1, Blur2, Blur3 } from "./Components/Blur/Blur";
import Sale from "./Components/Sale/Sale.js";
import Highlight from "./Components/Highlight/index.js";
import Collection from "./Components/Collection/index.js";
import Community from "./Components/Community/index.js";
import Collaboration from "./Components/Collaboration/index.js";
import NewsLetter from "./Components/NewsLetter/index.js";
import Footer from "./Components/Footer/index.js";

export default function App() {
  return (
    <Box
      sx={{
        position: "relative",
        overflowX: "hidden",
        width: "100%",
        height: "100%",
        px: { xs: "0", sm: "0", md: "0", lg: "0", xl: "0", "2xl": "0" },
      }}
    >
      <CssBaseline />
      <Grid2
        container={true}
        spacing={6}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={"16px"}
          width={"100%"}
        >
          <Container
            maxWidth={"2xl"}
            width={"100%"}
            sx={{
              px: { md: "40px", lg: "0", xl: "0", "2xl": "0" },
            }}
          >
            <Header />
            <HeroSection />
            <Blur1 />
            <Blur2 />
            <Blur3 />
          </Container>
        </Box>
        <Container
          maxWidth={"2xl"}
          sx={{
            px: { xs: "0", sm: "0", md: "0", lg: "0", xl: "0", "2xl": "0" },
          }}
        >
          <Sale />
        </Container>
        <Container
          maxWidth={"2xl"}
          sx={{
            px: { md: "40px", lg: "0", xl: "0", "2xl": "0" },
          }}
        >
          <Box display={"flex"} flexDirection={"column"} gap={6}>
            <Highlight />
            <Collection />
            <Community />
          </Box>
        </Container>
        <Container
          maxWidth={"2xl"}
          sx={{
            px: { xs: "0", sm: "0", md: "0", lg: "0", xl: "0", "2xl": "0" },
          }}
        >
          <Sale />
        </Container>
        <Container
          maxWidth={"2xl"}
          sx={{
            px: { md: "40px", lg: "0", xl: "0", "2xl": "0" },
          }}
        >
          <Box display={"flex"} flexDirection={"column"} gap={6}>
            <Collaboration />
            <NewsLetter />
            <Footer />
          </Box>
        </Container>
      </Grid2>
    </Box>
  );
}
