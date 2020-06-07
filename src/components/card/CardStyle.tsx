import { makeStyles, createStyles, Theme } from "@material-ui/core";

const CardStyle = makeStyles((theme: Theme) => createStyles({
  wrapperReadOnlyCard: {
    height: "100%",
    background: theme.palette.common.white,
    borderRadius: "1rem",
    transition: "all .2s ease-in",
  },
  wrapperCard: {
    height: "100%",
    background: theme.palette.common.white,
    position: "relative",
    borderRadius: "1rem",
    transition: "all .2s ease-in",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  wrapperSelectedCard: {
    background: theme.palette.common.white,
    position: "relative",
    borderRadius: "1rem",
    transition: "all .2s ease-in",
    cursor: "pointer",
    transform: "scale(1.05)",
  },
  wrapperJobTitle: {
    paddingTop: "1rem"
  },
  wrapperCompanyName: {
  },
  placeName: {
    fontWeight: "bold",
  },
  wrapperHeader: {
    height: "30%",
    maxHeight: "6rem",
    borderBottom: `2px solid ${theme.palette.secondary.dark}`,
    padding: "1rem",
    borderRadius: "1rem 1rem 0 0",
  },
  wrapperSelectedHeader: {
    height: "30%",
    maxHeight: "6rem",
    backgroundImage: `linear-gradient(to right, ${theme.palette.secondary.dark} 0%, ${theme.palette.secondary.main} 50%, ${theme.palette.secondary.light} 100%)`,
    padding: "1rem",
    borderRadius: "1rem 1rem 0 0",
  },
  title: {
    color: theme.palette.secondary.dark,
    textTransform: "uppercase",
  },
  selectedTitle: {
    textTransform: "uppercase"
  },
  wrapperDescription: {
    padding: "2rem 3rem",
    height: "70%",
  },
  wrapperMissions: {
    padding: "2rem 2rem",
    height: "70%",
  },
  icon: {
    color: theme.palette.primary.dark,
  },
  link: {
    textDecoration: "none",
    width: "100%",
    height: "100%",
    "&:hover :nth-child(1)": {
      color: theme.palette.secondary.main,
    },
  },
}));

export default CardStyle;