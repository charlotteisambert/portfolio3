import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import ProjectsStyle from './ProjectsStyle';
import Title from './../../uiKit/Title/Title';
import Card from './../card/Card'
import { useTranslation } from 'react-i18next';

function Projects() {
    const classes = ProjectsStyle();
    const { t } = useTranslation();
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
            <Grid container item className={classes.wrapperProjects}>
                <Grid container item sm={12} className={classes.wrapperTitle}>
                    <Grid container item sm={2} className={classes.title}>
                        <Title label={t("projects.subtitle")} />
                    </Grid>
                </Grid>
                <Grid container item sm={12} justify="space-evenly" className={classes.wrapperCards}>
                    <Grid container item sm={4} className={classes.wrapperCard}>
                        <Card
                            title={t("projects.to-do.title")}
                            language={t("projects.to-do.languages")}
                            missions={[
                                t("projects.to-do.mission1"),
                                t("projects.to-do.mission2")]}
                            dates={t("projects.to-do.dates")}
                            githubLink="https://github.com/charlotteisambert/to-do"
                            projectLink="https://charlotteisambert.github.io/to-do/"
                            isSelected={selectedCardId === "toDo"}
                            handleCardClick={() => handleCardClick("toDo")}
                        />
                    </Grid>
                    <Grid container item sm={4} className={classes.wrapperCard}>
                        <Card
                            title={t("projects.binary-search-tree.title")}
                            language={t("projects.binary-search-tree.languages")}
                            missions={[
                                t("projects.binary-search-tree.mission1"),
                                t("projects.binary-search-tree.mission2")]}
                            dates={t("projects.binary-search-tree.dates")}
                            githubLink="https://github.com/charlotteisambert/binary-search-tree"
                            isSelected={selectedCardId === "binarySearchTree"}
                            handleCardClick={() => handleCardClick("binarySearchTree")}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Projects;