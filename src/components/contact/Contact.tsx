import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import AlternateEmailOutlinedIcon from "@material-ui/icons/AlternateEmailOutlined";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneAndroidOutlinedIcon from "@material-ui/icons/PhoneAndroidOutlined";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import Title from "../../uiKit/Title/Title";
import ContactStyle from "./ContactStyle";

function Contact() {
  const classes = ContactStyle();

  function renderInfo(icon: React.ReactElement, text: string) {
    return (
      <Grid container item sm={12} justify="center" className={classes.wrapperInfoLine}>
        <Grid container item sm={1}>
          {icon}
        </Grid>
        <Grid container item sm={10} className={classes.wrapperInfoLabel}>
          <Typography variant="body1" color="textPrimary">{text}</Typography>
        </Grid>
      </Grid>
    );
  }

  function renderLink(icon: React.ReactElement, text: string, link: string) {
    return (
      <Grid container item sm={12} justify="center" className={classes.wrapperInfoLine}>
        <a href={link} target="_blank" rel="noopener noreferrer" className={classes.link}>
          <Grid container item sm={12} justify="center">
            <Grid container item sm={1}>
              {icon}
            </Grid>
            <Grid container item sm={10} className={classes.wrapperInfoLabel}>
              <Typography variant="body1" color="textPrimary">{text}</Typography>
            </Grid>
          </Grid>
        </a>
      </Grid>
    );
  }

  return (
    <Grid container className={classes.wrapperComponent}>
      <Grid container className={classes.wrapperContact}>
        <Grid container item sm={12} className={classes.wrapperTitle}>
          <Grid container item sm={3} className={classes.title}>
            <Title label="Entrons en contact" />
          </Grid>
        </Grid>
        <Grid container item sm={12} alignItems="center" justify="center" className={classes.wrapperBody}>
          <Grid container item sm={12} alignItems="center" justify="center" className={classes.wrapperInfos}>
            <div className={classes.barTop} />
            <div className={classes.barRight} />
            <div className={classes.barBottom} />
            <div className={classes.barLeft} />
            {renderInfo(<PhoneAndroidOutlinedIcon className={classes.icon} />, "+33 6 67 35 47 34")}
            {renderInfo(<AlternateEmailOutlinedIcon className={classes.icon} />, "charlotte.isambert@gmail.com")}
            {renderInfo(<LocationOnIcon className={classes.icon} />, "14 rue Olier, 75015 Paris")}
            {renderLink(<LinkedInIcon className={classes.icon} />, "LinkedIn", "https://www.linkedin.com/in/charlotte-isambert-9b7886151/")}
            {renderLink(<GitHubIcon className={classes.icon} />, "Github", "https://github.com/charlotteisambert")}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Contact;
