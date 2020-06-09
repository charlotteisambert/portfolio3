import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { useLocation } from "react-router-dom";
import HeaderStyle from './HeaderStyle';
import { Typography } from '@material-ui/core';
import { Link } from "react-router-dom";
import MenuButton from "../../uiKit/MenuButton/MenuButton";
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import {
    home,
    aboutMe,
    projects,
    contacts,
} from "./../../routes"
import resume from "./CV_Charlotte_Isambert.pdf"
import resume_en from "./CV_Charlotte_Isambert_en.pdf"
import { useTranslation } from 'react-i18next';
import i18next from "i18next";

function Header() {
    const classes = HeaderStyle();
    const { t } = useTranslation();
    const location = useLocation();
    const [selectedItem, setSelectedItem] = useState<string>(location.pathname);

    useEffect(() => {
        setSelectedItem(location.pathname);
    }, [location.pathname]);

    function checkPathname() {
        const { pathname } = window.location;
        setSelectedItem(pathname);
    }

    return (
        <Grid container item sm={12} alignItems="center" justify="center" className={classes.wrapperHeader}>
            <Grid container item sm={4} alignItems="center" className={classes.wrapperNameBar} >
                <Grid container item sm={1} className={classes.bar} />
                <Grid container item sm={10}>
                    <Link to={home} className={classes.wrapperName}>
                        <Typography variant="h4" color="textSecondary" noWrap={false} onClick={() => setSelectedItem(home)}>{t("header.name")}</Typography>
                    </Link>
                </Grid>
            </Grid>
            <Grid container item sm={8} alignItems="center" justify="space-around">
                <MenuButton label={t("home.title")} link={home} selected={selectedItem === home} onItemClick={checkPathname} />
                <MenuButton label={t("about-me.title")} link={aboutMe} selected={selectedItem === aboutMe} onItemClick={checkPathname} />
                <MenuButton label={t("projects.title")} link={projects} selected={selectedItem === projects} onItemClick={checkPathname} />
                <MenuButton label={t("contacts.title")} link={contacts} selected={selectedItem === contacts} onItemClick={checkPathname} />
                <Grid container item sm={1}>
                    <a
                        href={i18next.language === "english" ? resume_en : resume}
                        download="CV_Charlotte_Isambert"
                        className={classes.linkStyle}
                    >
                        <Grid container item alignItems="center" sm={12}>
                            <Typography variant="h5" color="textSecondary">CV</Typography>
                            <GetAppRoundedIcon className={classes.icon} />
                        </Grid>
                    </a>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Header;