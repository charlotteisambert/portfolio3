import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import FooterStyle from './FooterStyle';
import { Typography } from '@material-ui/core';
import i18n from "i18next";

function Footer() {
    const [language, setLanguage] = useState<string>("English version");
    const classes = FooterStyle();

    function handleLanguageChange() {
        const oldLanguage = language;
        setLanguage(oldLanguage === "English version" ? "Version française" : "English version");
        i18n.changeLanguage(oldLanguage === "English version" ? "english" : "french");
    }

    return (
        <Grid container item sm={2} justify="flex-end" className={classes.wrapperFooter}>
            <Typography variant="body2" color="textPrimary" onClick={handleLanguageChange}>{language}</Typography>
        </Grid>
    );
}

export default Footer;