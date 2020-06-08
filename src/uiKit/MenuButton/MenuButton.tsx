import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import MenuButtonStyle from "./MenuButtonStyle";

interface MenuButtonProps {
    label: string;
    link: string;
    selected: boolean;
    onItemClick: () => void;
}

function MenuButton({
  label,
  link,
  selected,
  onItemClick,
}: MenuButtonProps) {
  const classes = MenuButtonStyle();

  return (
    <Grid className={classes.wrapperButton} onClick={onItemClick}>
      <Link to={link} className={classes.linkStyle}>
        <Grid container item sm={12} justify="center" className={classes.wrapperLabel}>
          <Typography variant="h5" color="textSecondary" className={selected ? classes.selectedLabel : undefined}>
            {label}
          </Typography>
        </Grid>
        <Grid container item sm={12} justify="center">
          <div className={selected ? classes.selectedBar : classes.bar} />
        </Grid>
      </Link>

    </Grid>
  );
}

export default MenuButton;
