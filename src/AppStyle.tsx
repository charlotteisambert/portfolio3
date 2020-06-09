import { makeStyles, createStyles, Theme } from "@material-ui/core";

const App = makeStyles((theme: Theme) => createStyles({
  wrapperApp: {
    height:"100vh",
  },
  wrapperHeader: {
    height:"10%",
  },
  wrapperComponent: {
    height:"90%",
    overflow:"auto",
    background: theme.palette.primary.main,
  },
  wrapperFooter: {
    padding:"1rem 2rem"
  },
}));

export default App;



