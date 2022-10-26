import { createTheme } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

const theme = createTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      light: "#dedede",
      main: "#313131",
      dark: "#6d6d6d",
      contrastText: "#fff",
    },
    secondary: {
      light: "#bef2ff",
      main: "#86ddf6",
      dark: "#1a97fd",
      contrastText: "#000",
    },
    openTitle: "#000",
    protectedTitle: green["400"],
    type: "light",
  },
});

export default theme;
