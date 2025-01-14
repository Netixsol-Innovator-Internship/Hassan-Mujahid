import React from "react";
import { Card, Avatar, Box, Typography, IconButton } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
export default function User() {
  const opacityValues = [
    { opacity: 100, top: "", left: "", zIndex: 10, position: "block" },
    {
      opacity: 70,
      top: { xs: 104, xl: 104 },
      left: { xs: 120, xl: 40 },
      zIndex: 5,
      position: "absolute",
    },
    {
      opacity: 50,
      top: { xs: 208, xl: 208 },
      left: { xs: 240, xl: 80 },
      zIndex: 1,
      position: "absolute",
    },
  ];

  return opacityValues.map((styles) => {
    return (
      <Card
        sx={{
          bgcolor: "#081956",
          width: { xs: "100%", sm: "100%", md: "65%", xl: "424px" },
          p: 2,
          borderRadius: "8px",
          boxShadow: "0px 24px 80px 0px #000000CC",
          zIndex: `${styles.zIndex}`,
          opacity: `${styles.opacity}%`,
          top: { xs: `${styles.top.xs}px`, xl: `${styles.top.xl}px` },
          left: { xs: `${styles.left.xs}px`, xl: `${styles.left.xl}px` },
          position: { xs: "block", sm: "block", md: `${styles.position}` },
        }}
        key={styles.opacity}
      >
        <Box display={"flex"} justifyContent={"space-between"}>
          <Box
            sx={{
              display: "flex",
              gap: "16px",
            }}
          >
            <Box
              sx={{
                bgcolor: "#D9D9D9",
                width: "56px",
                height: "56px",
                borderRadius: "50px",
              }}
            />
            <Box display={"flex"} flexDirection={"column"}>
              <Typography
                variant="h6"
                fontSize={"16px"}
                lineHeight={"32px"}
                fontWeight={"bold"}
              >
                ShooPharDhie
              </Typography>
              <Typography fontSize={"12px"} fontWeight={"24px"}>
                Last Online 2 Hour Ago
              </Typography>
            </Box>
          </Box>
          <IconButton aria-label="more" size="large">
            <MoreHorizIcon sx={{ color: "white" }} />
          </IconButton>
        </Box>
      </Card>
    );
  });
}
