import { makeStyles, createStyles, Theme } from "@material-ui/core";

const FooterStyle = makeStyles((theme: Theme) => createStyles({
  wrapperFooter: {
    background: theme.palette.primary.main,
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

export default FooterStyle;