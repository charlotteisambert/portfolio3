import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import ProjectsStyle from './ProjectsStyle';
import Title from './../../uiKit/Title/Title';
import Card from './../card/Card'

function Projects() {
    const classes = ProjectsStyle();

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
                        <Title label="Mes projets" />
                    </Grid>
                </Grid>
                <Grid container item sm={12} justify="space-evenly" className={classes.wrapperCards}>
                    <Grid container item sm={4} className={classes.wrapperCard}>
                        <Card
                            title="To-do list"
                            language="React & TypeScript"
                            missions={[
                                "To-do list réalisée lorsque j'ai commencé à coder en React et Typescript au début de mon stage de fin d'études",
                                "React version 16, avec hooks"]}
                            dates="Janvier 2020"
                            githubLink="https://github.com/charlotteisambert/to-do"
                            projectLink="https://charlotteisambert.github.io/to-do/"
                            isSelected={selectedCardId === "toDo"}
                            handleCardClick={() => handleCardClick("toDo")}
                        />
                    </Grid>
                    <Grid container item sm={4} className={classes.wrapperCard}>
                        <Card
                            title="Binary search tree"
                            language="Java"
                            missions={[
                                "Arbre binaire de recherche implémenté en Java grâce à des design patterns",
                                "Design patterns : Null Object, Visitor et Strategy"]}
                            dates="Novembre 2019"
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