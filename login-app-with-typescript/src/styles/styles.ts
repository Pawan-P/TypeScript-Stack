import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "25ch"
      },
      "& > *": {
        margin: theme.spacing(1)
      }
    },
    rootNav: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "25ch"
      },
      "& > *": {
        margin: theme.spacing(1)
      },
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
    },
    grow: {
      flexGrow: 1
    },
    title: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block"
      },
      paddingTop: "10px"
    },
    sectionDesktop: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex"
      }
    },
    sectionMobile: {
      display: "flex",
      [theme.breakpoints.up("md")]: {
        display: "none"
      }
    },
    navLinks: {
      color:"white",
      fontWeight: "bold",
      textDecoration:"none"
    },
    paper_style:{
        minWidth: "660px",
        minHeight: "240px"
    },
    div_h1: {
        textAlign: "center",
        padding: "20px",
        color: '#666'
    },
    button_style: {
        background: '#2E3B55'
    },
    link_style: {
        textDecoration: 'none',
        color: 'white',
        fontWeight: 'bold'
    }
  })
);

export default useStyles;
