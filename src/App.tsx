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
import {
  home,
  aboutMe,
  projects,
  contacts,
  root,
} from "./routes"

function App() {
  const classes = AppStyle();

  function renderComponent(component: React.ReactElement) {
    return (
      <Grid container justify="center" className={classes.wrapperComponent}>
        {component}
      </Grid>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <HashRouter basename='/'>
        <div className={classes.wrapperApp}>
          <Grid container justify="center" className={classes.wrapperHeader}>
            <Header />
          </Grid>
          <Switch>
            <Route path={home}>
              {renderComponent(<Home />)}
            </Route>
            <Route path={aboutMe}>
              {renderComponent(<AboutMe />)}
            </Route>
            <Route path={contacts}>
              {renderComponent(<Contact />)}
            </Route>
            <Route path={projects}>
              {renderComponent(<Projects />)}
            </Route>
            <Route path={root}>
              <Redirect to={{ pathname: home }} />;
            </Route>
          </Switch>
        </div>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
