import React from 'react';
import HomeStyle from './HomeStyle';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Title from './../../uiKit/Title/Title';
import CV_picture from './CV_picture.jpg'
import { Link } from "react-router-dom";

function Home() {
    const classes = HomeStyle();
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
                        <Typography variant="h5" color="textPrimary">Charlotte Isambert, 22 ans </Typography>
                        <Typography variant="h5" color="textPrimary">Ingénieur</Typography>
                        <Typography variant="subtitle1" color="textPrimary">Paris</Typography>
                    </Grid>
                </Grid>
                <Grid container item sm={12} justify="center" className={classes.wrapperDescription}>
                    <Grid container item sm={6} className={classes.description}>
                        <Grid container item sm={12}>
                            <Typography variant="subtitle2" color="textPrimary" align="justify" display="inline">
                                Hello !
                        </Typography>
                        </Grid>
                        <Grid container item sm={12}>
                            <Typography variant="subtitle2" color="textPrimary" align="justify" display="inline">
                                Je suis étudiante en dernière année d'école d'ingénieur à l’ISEP et développeuse front-end en stage de fin d'études.
                        </Typography>
                        </Grid>
                        <Grid container item sm={12}>
                            <Typography variant="subtitle2" color="textPrimary" align="justify" display="inline">
                                Au cours de mes études et de mes stages, produire un code performant, propre et facile à lire est devenu un de mes principaux objectifs.
                         </Typography>
                        </Grid>
                        <Grid container item sm={12}>
                            <Typography variant="subtitle2" color="textPrimary" align="justify">
                                J’ai aussi réalisé combien j’aimais travailler au sein d’une équipe.
                        </Typography>
                        </Grid>
                        <Grid container item sm={12}>
                            <Typography variant="subtitle2" color="textPrimary">
                                Je suis à la recherche d'un CDI, donc si vous pensez que nos valeurs match n'hésitez pas à me {
                                    <Link to="/aboutMe" className={classes.link}>
                                        <Typography variant="subtitle2" color="textPrimary" align="justify" display="inline" className={classes.linkName}>contacter </Typography>
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
