import "./style.css";
import LandingPage from "./Components/LandingPage";
import createTheme from "@mui/material/styles/createTheme";
import { ThemeProvider } from "@mui/material/styles";

// Or Create your Own theme:
const theme = createTheme({
  palette: {
    primary: {
      main: "#09111b",
    },
  },
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          color: "whitesmoke",
          backgroundColor: "#09111b",
        },
        arrow: {
          color: "#09111b",
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="box">
        <LandingPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
