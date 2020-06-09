import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import AboutMeStyle from './AboutMeStyle';
import { Typography } from '@material-ui/core';
import Title from './../../uiKit/Title/Title';
import Card from './../card/Card';
import { useTranslation } from 'react-i18next';

function AboutMe() {
    const { t } = useTranslation();
    const classes = AboutMeStyle();
    const [selectedCardId, setSelectedCardId] = useState<string | null>(null);

    function handleCardClick(cardId: string) {
        if (selectedCardId === cardId) {
            setSelectedCardId(null);
        } else {
            setSelectedCardId(cardId);
        }
    }

    return (
        <Grid container className={classes.wrapperComponent}>
            <Grid container className={classes.wrapperAboutMe}>
                <Grid container item sm={12} className={classes.wrapperTitle}>
                    <Grid container item sm={2} className={classes.title}>
                        <Title label={t("about-me.title")} />
                    </Grid>
                </Grid>
                <Grid container item sm={12} className={classes.wrapperArticle}>
                    <Grid container item sm={12}>
                        <Typography variant="h5" color="textPrimary">{t("about-me.professionnal-experiences")}</Typography>
                    </Grid>
                    <Grid container item sm={12} justify="space-evenly">
                        <Grid container item sm={4} className={classes.wrapperCard}>
                            <Card
                                title={t("about-me.amuse.title")}
                                placeName={t("about-me.amuse.place-name")}
                                description={t("about-me.amuse.description")}
                                missions={[
                                    t("about-me.amuse.mission1"),
                                    t("about-me.amuse.mission2"),
                                    t("about-me.amuse.mission3"),
                                ]}
                                dates={t("about-me.amuse.dates")}
                                isSelected={selectedCardId === "amuse"}
                                handleCardClick={() => handleCardClick("amuse")}
                                readOnly={false}
                            />
                        </Grid>
                        <Grid container item sm={4} className={classes.wrapperCard}>
                            <Card
                                title={t("about-me.thales.title")}
                                placeName={t("about-me.thales.place-name")}
                                description={t("about-me.thales.description")}
                                missions={[
                                    t("about-me.thales.mission1"),
                                    t("about-me.thales.mission2"),
                                    t("about-me.thales.mission3"),
                                ]}
                                dates={t("about-me.thales.dates")}
                                isSelected={selectedCardId === "thales"}
                                handleCardClick={() => handleCardClick("thales")}
                                readOnly={false}
                            />
                        </Grid>
                    </Grid>

                </Grid>

                <Grid container item sm={12} className={classes.wrapperArticle}>
                    <Grid container item sm={12} >
                        <Typography variant="h5" color="textPrimary">{t("about-me.education")}</Typography>
                        <Grid container item sm={12} justify="space-evenly">
                            <Grid container item sm={4} className={classes.wrapperCard}>
                                <Card
                                    title={t("about-me.isep.title")}
                                    placeName={t("about-me.isep.place-name")}
                                    description={t("about-me.isep.description")}
                                    dates={t("about-me.isep.dates")}
                                    readOnly={true}
                                />
                            </Grid>
                            <Grid container item sm={4} className={classes.wrapperCard}>
                                <Card
                                    title={t("about-me.san-diego.title")}
                                    placeName={t("about-me.san-diego.place-name")}
                                    description={t("about-me.san-diego.description")}
                                    dates={t("about-me.san-diego.dates")}
                                    readOnly={true}
                                />
                            </Grid>
                            <Grid container item sm={4} className={classes.wrapperCard}>
                                <Card
                                    title={t("about-me.preparatory-classes.title")}
                                    placeName={t("about-me.preparatory-classes.place-name")}
                                    description={t("about-me.preparatory-classes.description")}
                                    dates={t("about-me.preparatory-classes.dates")}
                                    readOnly={true}
                                />
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
                <Grid container item sm={12} className={classes.wrapperArticle}>
                    <Grid container item sm={12} >
                        <Typography variant="h5" color="textPrimary">{t("about-me.skills")}</Typography>
                    </Grid>
                    <Grid container item sm={12} justify="space-evenly">
                        <Grid container item sm={4} className={classes.wrapperCard}>
                            <Card
                                title={t("about-me.languages.languages")}
                                languages={[
                                    t("about-me.languages.java"),
                                    t("about-me.languages.object-oriented"),
                                    t("about-me.languages.design-patterns"),
                                    t("about-me.languages.python")
                                ]}
                                readOnly={true}
                            />
                        </Grid>
                        <Grid container item sm={4} className={classes.wrapperCard}>
                            <Card
                                title={t("about-me.languages.databases")}
                                languages={[
                                    t("about-me.languages.react"),
                                    t("about-me.languages.javascript"),
                                    t("about-me.languages.html"),
                                    t("about-me.languages.sql")
                                ]}
                                readOnly={true}
                            />
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
        </Grid>
    );
}

export default AboutMe;