import { makeStyles, createStyles, Theme } from "@material-ui/core";

const App = makeStyles((theme: Theme) => createStyles({
  wrapperComponent: {
    background: theme.palette.primary.main,
  },
  wrapperAboutMe: {
    padding: "2rem 1rem",
    height: "fit-content",
  },
  wrapperTitle:{
    maxHeight:"10%",
  },
  title: {
    height: "fit-content",
  },
  wrapperArticle: {
    padding: "2rem 1rem",
  },
  bar: {
    padding: "0 1rem",
    borderLeft: `4px solid ${theme.palette.secondary.dark}`
  },
  wrapperCard:{
     padding:"1rem",
     minHeight:"22rem"
  }
}));

export default App;