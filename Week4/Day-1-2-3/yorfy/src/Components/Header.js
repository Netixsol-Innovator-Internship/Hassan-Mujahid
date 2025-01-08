import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Icon,
  CssBaseline,
  Box,
} from "@mui/material";

const Header = () => {
  return (
      <Box
        width={"100%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <AppBar
          position="static"
          color="transparent"
          elevation={0}
          sx={{
            maxWidth: "1280px",
            py: "24px",
          }}
        >
          <Toolbar>
            <Typography variant="h3" style={{ flexGrow: 1 }}>
              Yorfy
            </Typography>
            <Button
              color="primary"
              sx={{
                textTransform: "none",
              }}
              variant="contained"
            >
              Join Us
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
  );
};

export default Header;
