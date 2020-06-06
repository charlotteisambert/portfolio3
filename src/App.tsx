import React from 'react';
import AppStyle from './AppStyle';
import Grid from '@material-ui/core/Grid';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from "./utils/palette"
import Home from "./components/home/Home"
import AboutMe from './components/aboutMe/AboutMe';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Header from "./components/header/Header"
import {
  HashRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  const classes = AppStyle();
  return (
    <ThemeProvider theme={theme}>
      <HashRouter basename='/'>
        <div className={classes.wrapperApp}>
          <Grid container justify="center" className={classes.wrapperHeader}>
            <Header />
          </Grid>
          <Switch>
            <Route path="/home">
              <Grid container justify="center" className={classes.wrapperComponent}>
                <Home />
              </Grid>
            </Route>
            <Route path="/aboutMe">
              <Grid container justify="center" className={classes.wrapperComponent}>
                <AboutMe />
              </Grid>
            </Route>
            <Route path="/contact">
              <Grid container justify="center" className={classes.wrapperComponent}>
                <Contact />
              </Grid>
            </Route>
            <Route path="/projects">
              <Grid container justify="center" className={classes.wrapperComponent}>
                <Projects />
              </Grid>
            </Route>
            <Route path="/">
              <Redirect to={{ pathname: "/home" }} />;
            </Route>
          </Switch>
        </div>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
