import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "./components/Layout";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";
import Allocation from "./pages/Allocation";
import Admin from "./pages/Admin";
import Report from "./pages/Report";
import Payment from "./pages/Payment";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00AC4F",
      light: "#D3FFE7",
    },
    secondary: {
      main: "#5932EA",
    },
    danger: {
      main: "#DF0404",
      light: "#FFC5C5",
    },
  },
  typography: {
    fontFamily: "Poppins",
    h1: {
      fontSize: "4rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "2.6rem",
      fontWeight: 700,
      color: "primary",
    },
    body1: {
      fontSize: "1.4rem",
      fontWeight: 400,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          {/* <Route exact path= "/keepinitreal">
          <Signup/>
        </Route>
        <Route exact path= "/signin">
          <Signin/>
        </Route> */}
          <Route exact path="/payments">
            <Payment />
          </Route>
          <Layout>
            <Route exact path="/allocations">
              <Allocation />
            </Route>
            <Route exact path="/admin">
              <Admin />
            </Route>
            <Route exact path="/reports">
              <Report />
            </Route>
          </Layout>
        </Switch>
      </Router>
    </ThemeProvider>

    // <Create/>
  );
}

export default App;
