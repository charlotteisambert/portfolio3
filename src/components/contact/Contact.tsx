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
import { useTranslation } from 'react-i18next';

function Contact() {
    const classes = ContactStyle();
    const { t } = useTranslation();

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
                        <Title label={t("contacts.subtitle")} />
                    </Grid>
                </Grid>
                <Grid container item sm={12} alignItems="center" justify="center" className={classes.wrapperBody}>
                    <Grid container item sm={12} alignItems="center" justify="center" className={classes.wrapperInfos}>
                        <div className={classes.barTop} />
                        <div className={classes.barRight} />
                        <div className={classes.barBottom} />
                        <div className={classes.barLeft} />
                        {renderInfo(<PhoneAndroidOutlinedIcon className={classes.icon} />, t("contacts.phone"))}
                        {renderInfo(<AlternateEmailOutlinedIcon className={classes.icon} />, t("contacts.mail"))}
                        {renderInfo(<LocationOnIcon className={classes.icon} />, t("contacts.address"))}
                        {renderLink(<LinkedInIcon className={classes.icon} />, t("contacts.linkedin"), "https://www.linkedin.com/in/charlotte-isambert-9b7886151/")}
                        {renderLink(<GitHubIcon className={classes.icon} />, t("contacts.github"), "https://github.com/charlotteisambert")}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Contact;