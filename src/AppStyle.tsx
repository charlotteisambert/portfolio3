import { makeStyles } from "@material-ui/core";

const App = makeStyles(() => ({
  wrapperApp: {
    height: "100vh",
  },
  wrapperHeader: {
    height: "10%",
  },
  wrapperComponent: {
    height: "90%",
    overflow: "auto",
  },
}));

export default App;
