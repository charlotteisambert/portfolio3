import React from 'react';
import Grid from '@material-ui/core/Grid';
import TitleStyle from './TitleStyle';
import { Typography } from '@material-ui/core';

interface MenuButtonProps {
    label: String;
}

function MenuButton({
    label,
}: MenuButtonProps) {
    const classes = TitleStyle();

    return (
        <Grid container item sm={12} alignItems="center" className={classes.wrapperTitle}>
            <div className={classes.bar} />
            <Typography variant="h5" color="textPrimary" className={classes.title}>{label}</Typography>
        </Grid>
    );
}

export default MenuButton;