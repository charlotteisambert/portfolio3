import { makeStyles, createStyles, Theme } from "@material-ui/core";

const MenuButtonStyle = makeStyles((theme: Theme) => createStyles({
    wrapperButton: {
        color: theme.palette.primary.main,
        overflow: "hidden",
        "&:hover h5": {
            color: theme.palette.secondary.dark,
        },
    },
    wrapperLabel: {
        padding: ".3rem 1rem"
    },
    selectedLabel: {
        color: theme.palette.secondary.dark,
    },
    bar: {
        background: theme.palette.secondary.dark,
        paddingTop: ".1rem",
    },
    selectedBar: {
        width: "100%",
        background: theme.palette.secondary.dark,
        paddingTop: ".1rem",
        animation: "$selectedBar .1s cubic-bezier(0.42, 0, 0.9, 1.28) forwards"
    },
    "@keyframes selectedBar": {
        "0%": {
            transform:"scaleX(0)",
        },
        "100%": {
            transform:"scaleX(1)",
        },
    },
    linkStyle: {
        textDecoration: "none",
    },
}));

export default MenuButtonStyle;