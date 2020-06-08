import { makeStyles, createStyles, Theme } from "@material-ui/core";

const TitleStyle = makeStyles((theme: Theme) => createStyles({
  wrapperTitle: {
    position: "relative",
    overflow: "hidden",
  },
  bar: {
    position: "absolute",
    zIndex: 5,
    height: "100%",
    width: "100%",
    backgroundImage: `linear-gradient(to right, ${theme.palette.secondary.dark} 0%, ${theme.palette.secondary.main} 50%, ${theme.palette.secondary.light} 100%)`,
    transformOrigin: "0 0",
    animation: "$barGrowLeft .2s ease-in forwards",
  },
  title: {
    textTransform: "uppercase",
    zIndex: 10,
    padding: ".2rem .5rem",
  },
  "@keyframes barGrowLeft": {
    "0%": {
      transform: "scaleX(0)",
    },
    "100%": {
      transform: "scaleX(1)",
    },
  },
}));

export default TitleStyle;
