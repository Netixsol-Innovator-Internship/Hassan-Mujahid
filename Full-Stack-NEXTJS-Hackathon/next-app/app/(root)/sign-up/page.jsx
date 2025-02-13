"use client";

import {
  TextField,
  Button,
  Card,
  CardContent,
  IconButton,
  Alert,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const router = useRouter();
  console.log("errorMessage:", errorMessage);

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      await signIn("google", {
        callbackUrl: "/",
      });
    } catch (error) {
      console.error("Google sign in error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await res.json();
      console.log(data);

      if (data.success === true) {
        setLoading(false);
        setErrorMessage(null);
        setSuccessMessage(data.message);
        router.push("/sign-in");
      } else if (data.success === false) {
        // Handle error
        setLoading(false);
        setSuccessMessage(null);
        setErrorMessage(data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen min-w-screen flex flex-col lg:flex-row gap-4 lg:gap-10 justify-start lg:items-center lg:justify-center mt-6 lg:mx-auto">
      <div>
        <div className="text-3xl lg:text-6xl font-bold text-center ">News</div>
        <div className="text-sm font-semibold text-center mt-2">
          Sign Up with Email or google to see exciting News!
        </div>
      </div>

      <div className="max-lg:justify-center max-lg:flex">
        <Card
          elevation={10}
          sx={{
            width: "325px",
            mt: "1rem",
            borderRadius: "8px",
          }}
        >
          <CardContent>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                id="username"
                type="text"
                label="Username"
                variant="filled"
                margin="normal"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                fullWidth
                id="email"
                type="email"
                label="Email"
                variant="filled"
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                fullWidth
                id="password"
                type="password"
                label="Password"
                variant="filled"
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <Button
                disabled={loading}
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  bgcolor: "primary.main",
                  mt: "1rem",
                }}
              >
                Sign Up
              </Button>
              <Button
                disabled={loading}
                onClick={handleGoogleSignIn}
                variant="contained"
                fullWidth
                sx={{
                  bgcolor: "primary.main",
                  mt: "1rem",
                  display: "flex",
                  alignItems: "center",
                  justifyItems: "center",
                  gap: "0.5rem",
                }}
              >
                <IconButton
                  size="small"
                  edge="start"
                  color="inherit"
                  aria-label="Google icon"
                  sx={{
                    padding: "0px",
                  }}
                >
                  <GoogleIcon fontSize="inherit" />
                </IconButton>
                <span className="items-end">Sign Up with Google</span>
              </Button>
            </form>
            {errorMessage && (
              <Alert
                severity="error"
                sx={{
                  mt: "16px",
                }}
              >
                {errorMessage}
              </Alert>
            )}
            {successMessage && (
              <Alert sx={{ mt: "16px" }} severity="success">
                {successMessage}
              </Alert>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignIn;
