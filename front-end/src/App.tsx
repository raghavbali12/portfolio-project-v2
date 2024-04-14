import "./style.css";
import LandingPage from "./Components/LandingPage";
import createTheme from "@mui/material/styles/createTheme";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BackgroundPage from "./Components/Background/BackgroundPage";

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
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#09111b",
          fontFamily: "'Nunito-Regular'",
          fontWeight: 700,
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/background" element={<BackgroundPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
