import { extendTheme } from "@mui/joy/styles";

const customTheme = extendTheme({
  components: {
    JoyInput: {
      defaultProps: {
        variant: "outlined",
      },
    },
  },
});

export default customTheme;
