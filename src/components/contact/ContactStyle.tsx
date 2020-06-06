import { makeStyles, createStyles, Theme } from "@material-ui/core";

const ContactStyle = makeStyles((theme: Theme) => createStyles({
  wrapperComponent: {
    background: theme.palette.primary.dark,
  },
  wrapperContact: {
    padding: "2rem 1rem",
    height: "100%",
  },
  wrapperTitle:{
    height:"10%"
  },
  title: {
    height: "fit-content",
  },
  wrapperBody: {
    padding: "0 15rem",
    height:"90%",
  },
  wrapperInfos: {
    padding: "2rem 5rem",
    position: "relative",
  },
  wrapperInfoLine: {
    paddingTop: "1rem"
  },
  wrapperIcon: {
  },
  wrapperInfoLabel: {
    maxWidth: "15rem"
  },
  icon: {
    color: theme.palette.common.white,
  },
  barTop: {
    backgroundImage: `linear-gradient(to left, ${theme.palette.secondary.dark} 0%, ${theme.palette.secondary.main} 50%, ${theme.palette.secondary.light} 100%)`,
    position: "absolute",
    top: 0,
    paddingTop: ".2rem",
    width: "100%",
    transformOrigin: "top left",
    animation: "$verticalBar 1s  ease-in forwards",
  },
  barBottom: {
    backgroundImage: `linear-gradient(to right, ${theme.palette.secondary.dark} 0%, ${theme.palette.secondary.main} 50%, ${theme.palette.secondary.light} 100%)`,
    position: "absolute",
    bottom: 0,
    paddingTop: ".2rem",
    width: "100%",
    transformOrigin: "top right",
    animation: "$verticalBar 1s  ease-in forwards",
  },
  barRight: {
    backgroundImage: `linear-gradient(to bottom, ${theme.palette.secondary.dark} 0%, ${theme.palette.secondary.main} 50%, ${theme.palette.secondary.light} 100%)`,
    position: "absolute",
    right: 0,
    paddingRight: ".2rem",
    height: "100%",
    transformOrigin: "top right",
    animation: "$horizontalBar 1s  ease-in forwards",
  },
  barLeft: {
    backgroundImage: `linear-gradient(to top, ${theme.palette.secondary.dark} 0%, ${theme.palette.secondary.main} 50%, ${theme.palette.secondary.light} 100%)`,
    position: "absolute",
    left: 0,
    paddingRight: ".2rem",
    height: "100%",
    transformOrigin: "bottom right",
    animation: "$horizontalBar 1s  ease-in forwards",
  },
  "@keyframes verticalBar": {
    "0%": {
      transform: "scaleX(0)",
    },
    "100%": {
      transform: "scaleX(1)",
    },
  },
  "@keyframes horizontalBar": {
    "0%": {
      transform: "scaleY(0)",
    },
    "100%": {
      transform: "scaleY(1)",
    },
  },
  link: {
    textDecoration: "none",
  },
  linkName: {
    "&:hover": {
      color: theme.palette.secondary.main,
  },
  }
}));

export default ContactStyle;