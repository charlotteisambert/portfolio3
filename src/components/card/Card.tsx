import React from 'react';
import Grid from '@material-ui/core/Grid';
import CardStyle from './CardStyle';
import { Typography } from '@material-ui/core';
import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined';
import DateRangeOutlinedIcon from '@material-ui/icons/DateRangeOutlined';
import ArrowRightOutlinedIcon from '@material-ui/icons/ArrowRightOutlined';
import LanguageIcon from '@material-ui/icons/Language';
import CodeIcon from '@material-ui/icons/Code';
import SubjectIcon from '@material-ui/icons/Subject';
import GitHubIcon from '@material-ui/icons/GitHub';

interface CardProps {
    title: string;
    isSelected?: boolean;
    readOnly?: boolean;
    handleCardClick?: () => void;
    placeName?: string;
    description?: string;
    dates?: string;
    missions?: string[];
    languages?: string[];
    language?: string;
    githubLink?: string;
    projectLink?: string;
}


function Card({
    title,
    isSelected,
    readOnly,
    handleCardClick,
    placeName,
    description,
    dates,
    missions,
    languages,
    language,
    githubLink,
    projectLink,
}: CardProps) {
    const classes = CardStyle();

    function getDescription(icon: React.ReactElement, text: string, align: "justify" | "left", bold: boolean = false) {
        return (
            <Grid container item >
                <Grid container item sm={2}>
                    {icon}
                </Grid>
                <Grid container item sm={10}>
                    < Typography variant={bold ? "h6" : "body2"} color="textSecondary" align={align}>{text}</Typography>
                </Grid>
            </Grid >
        )
    }

    function getLinkDescription(icon: React.ReactElement, text: string, link: string) {
        return (
            <Grid container item >
                <a href={link} target="_blank" rel="noopener noreferrer" className={classes.link} onClick={handleClickLink}>
                    <Grid container item >
                        <Grid container item sm={2}>
                            {icon}
                        </Grid>
                        <Grid container item sm={10}>
                            <Typography variant="body2" color="textSecondary"> {text} </Typography>
                        </Grid>
                    </Grid>
                </a>
            </Grid>
        )
    }

    function handleClickLink(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        event.stopPropagation();
    }

    return (
        <Grid
            container
            item
            sm={12}
            className={
                readOnly
                    ? classes.wrapperReadOnlyCard
                    : (isSelected
                        ? classes.wrapperSelectedCard
                        : classes.wrapperCard
                    )
            }
            onClick={handleCardClick}
        >
            <Grid container item sm={12} justify="center" alignItems="center" className={isSelected ? classes.wrapperSelectedHeader : classes.wrapperHeader}>
                <Typography variant="subtitle1" color={isSelected ? "textPrimary" : "textSecondary"} className={isSelected ? classes.selectedTitle : classes.title}>
                    {title}
                </Typography>
            </Grid>
            {!isSelected ?
                <Grid container item sm={12} direction="column" justify="space-between" className={classes.wrapperDescription}>
                    {placeName && getDescription(<BusinessCenterOutlinedIcon className={classes.icon} />, placeName, "left", true)}
                    {language && getDescription(<CodeIcon className={classes.icon} />, language, "left")}
                    {description && getDescription(<SubjectIcon className={classes.icon} />, description, "left")}
                    {dates && getDescription(<DateRangeOutlinedIcon className={classes.icon} />, dates, "left")}
                    {projectLink && getLinkDescription(<LanguageIcon className={classes.icon} />, "Voir le projet", projectLink)}
                    {githubLink && getLinkDescription(<GitHubIcon className={classes.icon} />, "Voir le code", githubLink)}
                    {languages && languages.map((language, index) =>
                        <Grid container item key={index}>
                            {getDescription(<ArrowRightOutlinedIcon color="primary" />, language, "left")}
                        </Grid>)}
                </Grid>
                :
                <Grid container item className={classes.wrapperMissions} justify="space-around">
                    {missions && missions.map((mission, index) =>
                        <Grid container item key={index}>
                            {getDescription(<ArrowRightOutlinedIcon className={classes.icon} />, mission, "justify")}
                        </Grid>)}
                </Grid>
            }
        </Grid >
    );
}

export default Card;