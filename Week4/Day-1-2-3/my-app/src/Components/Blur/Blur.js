import { Box } from "@mui/material";
import BlurImage1 from "../../assets/blurImages/Blur-3.png";
import BlurImage2 from "../../assets/blurImages/Blur-2.png";

export const Blur1 = () => {
  return (
    <Box
      component={"img"}
      src={BlurImage1}
      height="320px"
      width="320px"
      sx={{
        position: "absolute",
        top: "88px",
        right: "-20%",
        borderRadius: "50%",
      }}
    ></Box>
  );
};

export const Blur2 = () => {
  return (
    <Box
      component={"img"}
      src={BlurImage2}
      height="240px"
      width="240px"
      sx={{
        position: "absolute",
        top: "496px",
        left: "-10%",
        borderRadius: "50%",
      }}
    ></Box>
  );
};

export const Blur3 = () => {
  return (
    <Box
      component={"img"}
      src={BlurImage1}
      height="320px"
      width="320px"
      sx={{
        position: "absolute",
        top: "584px",
        right: "-20%",
        borderRadius: "50%",
      }}
    ></Box>
  );
};
