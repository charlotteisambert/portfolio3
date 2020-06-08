import { makeStyles, createStyles, Theme } from "@material-ui/core";

const HomeStyle = makeStyles((theme: Theme) => createStyles({
  wrapperComponent: {
    background: theme.palette.primary.main,
  },
  wrapperHome: {
    padding: "2rem 1rem",
    height: "100%",
  },
  wrapperTitle: {
    maxHeight: "10%",
  },
  title: {
    height: "fit-content",
  },
  wrapperOverview: {
    height: "40%",
  },
  wrapperDescription: {
    height: "40%",
  },
  description: {
    maxHeight: "10rem",
  },
  wrapperInfos: {
    borderLeft: `2px solid ${theme.palette.secondary.dark}`,
    padding: "0 5rem",
  },
  wrapperPicture: {
    paddingRight: "5rem",
  },
  picture: {
    height: "10rem",
    borderRadius: "50%",
  },
  link: {
    textDecoration: "none",
  },
  linkName: {
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },
}));

export default HomeStyle;
