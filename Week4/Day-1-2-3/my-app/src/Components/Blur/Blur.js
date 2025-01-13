import { Box } from "@mui/material";
import BlurImage1 from "../../assets/blurImages/Blur-3.png";
import BlurImage2 from "../../assets/blurImages/Blur-2.png";

export const Blur1 = () => {
  return (
    <Box
      component={"img"}
      src={BlurImage1}
      height={{
        xs: "320px",
        sm: "320px",
        md: "320px",
        lg: "320px",
        xl: "400px",
      }}
      width={{
        xs: "320px",
        sm: "320px",
        md: "320px",
        lg: "320px",
        xl: "400px",
        "2xl": "500px",
      }}
      sx={{
        position: "absolute",
        top: { xs: "88px", sm: "88px", md: "224px" },
        right: { xs: "-10%", sm: "-10%", md: "-10%" },
      }}
    ></Box>
  );
};

export const Blur2 = () => {
  return (
    <Box
      component={"img"}
      src={BlurImage2}
      height={{
        xs: "240px",
        sm: "240px",
        md: "240px",
        lg: "240px",
        xl: "320px",
        "2xl": "480px",
      }}
      width={{
        xs: "240px",
        sm: "240px",
        md: "240px",
        lg: "240px",
        xl: "320px",
        "2xl": "480px",
      }}
      sx={{
        position: "absolute",
        top: { xs: "496px", sm: "496px", md: "136px" },
        left: { xs: "-5%", sm: "-5%", md: "40%", lg: "45%", xl: "40%" },
        transform: { md: "scaleX(-1)" },
      }}
    ></Box>
  );
};

export const Blur3 = () => {
  return (
    <Box
      component={"img"}
      src={BlurImage1}
      height={{
        xs: "320px",
        sm: "320px",
        md: "320px",
        lg: "320px",
        xl: "400px",
        "2xl": "500px",
      }}
      width={{
        xs: "320px",
        sm: "320px",
        md: "320px",
        lg: "320px",
        xl: "400px",
        "2xl": "500px",
      }}
      sx={{
        position: "absolute",
        top: { xs: "584px", sm: "584px", md: "208px" },
        right: { xs: "-20%", sm: "-20%" },
        left: { md: "-10%" },
        transform: { md: "scaleX(-1)" },
      }}
    ></Box>
  );
};

export const Blur4 = () => {
  return (
    <Box
      component={"img"}
      src={BlurImage2}
      height={{ xl: "400px", "2xl": "500px" }}
      width={{ xl: "400px", "2xl": "500px" }}
      sx={{
        display: { xs: "none", sm: "none", md: "block" },
        position: "absolute",
        top: { md: "2228px", xl: "2032px" },
        right: { md: "0%" },
        transform: { md: "scaleX(-1)" },
      }}
    ></Box>
  );
};

export const Blur5 = () => {
  return (
    <Box
      component={"img"}
      src={BlurImage1}
      height={{ xl: "400px", "2xl": "500px" }}
      width={{ xl: "400px", "2xl": "500px" }}
      sx={{
        display: { xs: "none", sm: "none", md: "block" },
        position: "absolute",
        top: { md: "1964px", xl: "1928px" },
        left: { md: "0%" },
        transform: { md: "scaleX(-1)" },
      }}
    ></Box>
  );
};
