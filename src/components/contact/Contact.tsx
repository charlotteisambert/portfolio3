import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import ContactStyle from './ContactStyle';
import Title from './../../uiKit/Title/Title';
import AlternateEmailOutlinedIcon from '@material-ui/icons/AlternateEmailOutlined';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneAndroidOutlinedIcon from '@material-ui/icons/PhoneAndroidOutlined';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

function Contact() {
    const classes = ContactStyle();
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
                        <Grid container item sm={12} justify="center" className={classes.wrapperInfoLine}>
                            <Grid container item sm={1} className={classes.wrapperIcon}>
                                <PhoneAndroidOutlinedIcon className={classes.icon} />
                            </Grid>
                            <Grid container item sm={10} className={classes.wrapperInfoLabel}>
                                <Typography variant="body1" color="textPrimary">+33 6 67 35 47 34</Typography>
                            </Grid>
                        </Grid>
                        <Grid container item sm={12} justify="center" className={classes.wrapperInfoLine}>
                            <Grid container item sm={1} className={classes.wrapperIcon}>
                                <AlternateEmailOutlinedIcon className={classes.icon} />
                            </Grid>
                            <Grid container item sm={10} className={classes.wrapperInfoLabel}>
                                <Typography variant="body1" color="textPrimary">charlotte.isambert@gmail.com</Typography>
                            </Grid>
                        </Grid>
                        <Grid container item sm={12} justify="center" className={classes.wrapperInfoLine}>
                            <Grid container item sm={1} className={classes.wrapperIcon}>
                                <LocationOnIcon className={classes.icon} />
                            </Grid>
                            <Grid container item sm={10} className={classes.wrapperInfoLabel}>
                                <Typography variant="body1" color="textPrimary">30 rue Boissière, 75116 Paris</Typography>
                            </Grid>
                        </Grid>
                        <Grid container item sm={12} justify="center" className={classes.wrapperInfoLine}>
                            <Grid container item sm={1} className={classes.wrapperIcon}>
                                <LinkedInIcon className={classes.icon} />
                            </Grid>
                            <Grid container item sm={10} className={classes.wrapperInfoLabel}>
                                <a href="https://www.linkedin.com/in/charlotte-isambert-9b7886151/" target="_blank" rel="noopener noreferrer" className={classes.link}>
                                    <Typography variant="body1" color="textPrimary" className={classes.linkName}>LinkedIn</Typography>
                                </a>
                            </Grid>
                        </Grid>
                        <Grid container item sm={12} justify="center" className={classes.wrapperInfoLine}>
                            <Grid container item sm={1} className={classes.wrapperIcon}>
                                <GitHubIcon className={classes.icon} />
                            </Grid>
                            <Grid container item sm={10} className={classes.wrapperInfoLabel}>
                                <a href="https://github.com/charlotteisambert" target="_blank" rel="noopener noreferrer" className={classes.link}>
                                    <Typography variant="body1" color="textPrimary" className={classes.linkName}>Github</Typography>
                                </a>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Contact;