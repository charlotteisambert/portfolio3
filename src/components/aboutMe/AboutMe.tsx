import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import AboutMeStyle from "./AboutMeStyle";
import Title from "../../uiKit/Title/Title";
import Card from "../card/Card";

function AboutMe() {
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
            <Title label="About me" />
          </Grid>
        </Grid>
        <Grid container item sm={12} className={classes.wrapperArticle}>
          <Grid container item sm={12}>
            <Typography variant="h5" color="textPrimary">Expériences professionnelles</Typography>
          </Grid>
          <Grid container item sm={12} justify="space-evenly">
            <Grid container item sm={4} className={classes.wrapperCard}>
              <Card
                title="Stagiaire en développement front-end"
                placeName="Amuse"
                description="Start-up de production de dessins-anîmés"
                missions={[
                  "Réalisation d’une application web React au sein d’une équipe Agile",
                  "Contribution à l’architecture système, aux revues de code et à la qualité du produit",
                  "Stack technique : React, TypeScript, Material UI, GraphQL",
                ]}
                dates="2020 (6mois)"
                isSelected={selectedCardId === "amuse"}
                handleCardClick={() => handleCardClick("amuse")}
                readOnly={false}
              />
            </Grid>
            <Grid container item sm={4} className={classes.wrapperCard}>
              <Card
                title="Stagiaire en développement Javascript"
                placeName="Thales"
                description="Grand group industriel"
                missions={[
                  "Mise en place d'un environnement de tests automatisés d'une application Angular",
                  "Méthode Agile appliquée à un grand projet logiciel",
                  "Stack technique : JavaScript",
                ]}
                dates="2018 (6mois)"
                isSelected={selectedCardId === "thales"}
                handleCardClick={() => handleCardClick("thales")}
                readOnly={false}
              />
            </Grid>
          </Grid>

        </Grid>

        <Grid container item sm={12} className={classes.wrapperArticle}>
          <Grid container item sm={12}>
            <Typography variant="h5" color="textPrimary">Formations et diplômes</Typography>
            <Grid container item sm={12} justify="space-evenly">
              <Grid container item sm={4} className={classes.wrapperCard}>
                <Card
                  title="Ecole d'ingénieur du numérique"
                  placeName="ISEP"
                  description="Spécialité Architecture des Systèmes d'Information"
                  dates="2017 - 2020"
                  readOnly
                />
              </Grid>
              <Grid container item sm={4} className={classes.wrapperCard}>
                <Card
                  title="Semestre académique aux Etats-Unis"
                  placeName="San Diego State University"
                  description="Conception objet avancée et Design Patterns"
                  dates="2019"
                  readOnly
                />
              </Grid>
              <Grid container item sm={4} className={classes.wrapperCard}>
                <Card
                  title="Classes préparatoires scientifiques"
                  placeName="ISEP"
                  description=" MPSI-PSI"
                  dates="2015 - 2017"
                  readOnly
                />
              </Grid>
            </Grid>

          </Grid>
        </Grid>
        <Grid container item sm={12} className={classes.wrapperArticle}>
          <Grid container item sm={12}>
            <Typography variant="h5" color="textPrimary">Compétences</Typography>
          </Grid>
          <Grid container item sm={12} justify="space-evenly">
            <Grid container item sm={4} className={classes.wrapperCard}>
              <Card
                title="Langages"
                languages={[
                  "Java",
                  "Conception Object",
                  "Design Patterns",
                  "Python",
                ]}
                readOnly
              />
            </Grid>
            <Grid container item sm={4} className={classes.wrapperCard}>
              <Card
                title="Web et bases de données"
                languages={[
                  "React",
                  "JavaScript & Typescript",
                  "HTML CSS (Material UI) PHP ",
                  "SQL NoSql GraphQL",
                ]}
                readOnly
              />
            </Grid>
          </Grid>

        </Grid>
      </Grid>
    </Grid>
  );
}

export default AboutMe;
