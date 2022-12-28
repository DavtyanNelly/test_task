import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const themeMUI = createTheme({
  palette: {
    secondary: {
      main: "#5b5a5a",
    },
    error: {
      main: red.A400,
    },
  },
});

export default themeMUI;
