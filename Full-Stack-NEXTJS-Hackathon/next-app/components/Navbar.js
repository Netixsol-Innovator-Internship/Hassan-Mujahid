"use client";

import { AppBar, Toolbar, Box, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import handleSignOut from "../utils/signOut";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          bgcolor: "#37b24d",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            <Link href={"/"}>
              <div className="font-bold text-2xl">News</div>
            </Link>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {!session ? (
              <Link href={"/sign-in"}>
                <Button color="inherit">Sign In</Button>
              </Link>
            ) : (
              <Link href={"/"}>
                <Button color="inherit" onClick={handleSignOut}>
                  Sign Out
                </Button>
              </Link>
            )}
            {/* <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{
                display: { xs: "inline-flex", md: "none" },
              }}
            >
              <MenuIcon />
            </IconButton> */}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
