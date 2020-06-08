import { makeStyles, createStyles, Theme } from "@material-ui/core";

const HeaderStyle = makeStyles((theme: Theme) => createStyles({
  wrapperHeader: {
    background: theme.palette.common.white,
    width: "100%",
    height: "100%",
    borderBottom: `2px solid ${theme.palette.primary.main}`
  },
  linkStyle: {
    textDecoration: "none",
    border:`1px solid ${theme.palette.primary.dark}`,
    borderRadius:"50px",
    padding:".1rem .5rem",
  },
  icon:{
    color:theme.palette.primary.dark,
  },
  wrapperNameBar:{
    padding: ".5rem .5rem .5rem 1rem",
  },
  wrapperName:{
    textDecoration: "none",
    paddingLeft: ".5rem",
  },
  bar:{
    backgroundImage: `linear-gradient(to right, ${theme.palette.secondary.dark} 0%, ${theme.palette.secondary.main} 50%, ${theme.palette.secondary.light} 100%)`,
    padding: "1rem 2rem",
    transformOrigin: "0 0",
    animation: "$barGrowLeft .2s ease-in forwards",
  },
  "@keyframes barGrowLeft": {
    "0%": {
        transform:"scaleX(0)",
    },
    "100%": {
        transform:"scaleX(1)",
    },
},
}));

export default HeaderStyle;