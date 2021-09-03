import { createTheme } from "@mui/material/styles";
// import { createTheme } from "@material-ui/core/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#FFF",
      light: "#fafafa",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
