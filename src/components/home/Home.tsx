import React from 'react';
import HomeStyle from './HomeStyle';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Title from './../../uiKit/Title/Title';
import CV_picture from './CV_picture.jpg'
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

function Home() {
    const classes = HomeStyle();
    const { t } = useTranslation();

    return (
        <Grid container item className={classes.wrapperComponent}>
            <Grid container item className={classes.wrapperHome}>
                <Grid container item sm={12} className={classes.wrapperTitle}>
                    <Grid container item sm={2} className={classes.title}>
                        <Title label="Home" />
                    </Grid>
                </Grid>
                <Grid container item sm={12} alignItems="center" className={classes.wrapperOverview}>
                    <Grid container item sm={6} justify="flex-end" className={classes.wrapperPicture}>
                        <img src={CV_picture} alt="CV_picture" className={classes.picture}></img>
                    </Grid>
                    <Grid container item sm={6} direction="column" className={classes.wrapperInfos}>
                        <Typography variant="h5" color="textPrimary">{t("home.name")}</Typography>
                        <Typography variant="h5" color="textPrimary">{t("home.job")}</Typography>
                        <Typography variant="subtitle1" color="textPrimary">{t("home.place")}</Typography>
                    </Grid>
                </Grid>
                <Grid container item sm={12} justify="center" className={classes.wrapperDescription}>
                    <Grid container item sm={6} className={classes.description}>
                        <Grid container item sm={12}>
                            <Typography variant="subtitle2" color="textPrimary" align="justify" display="inline">
                                {t("home.text1")}
                            </Typography>
                        </Grid>
                        <Grid container item sm={12}>
                            <Typography variant="subtitle2" color="textPrimary" align="justify" display="inline">
                                {t("home.text2")}
                            </Typography>
                        </Grid>
                        <Grid container item sm={12}>
                            <Typography variant="subtitle2" color="textPrimary" align="justify" display="inline">
                                {t("home.text3")}
                            </Typography>
                        </Grid>
                        <Grid container item sm={12}>
                            <Typography variant="subtitle2" color="textPrimary" align="justify">
                                {t("home.text4")}
                            </Typography>
                        </Grid>
                        <Grid container item sm={12}>
                            <Typography variant="subtitle2" color="textPrimary">
                                {t("home.text5")}
                                {
                                    <Link to="/aboutMe" className={classes.link}>
                                        <Typography variant="subtitle2" color="textPrimary" align="justify" display="inline" className={classes.linkName}>{t("home.text6")} </Typography>
                                    </Link>
                                } !
                        </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Home;
