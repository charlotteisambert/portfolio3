import { createMuiTheme } from '@material-ui/core/styles';
import { blueGrey, pink } from '@material-ui/core/colors';

export const theme = createMuiTheme({
    palette: {
        primary: {
            light: blueGrey[700],
            main: "#01425e",
            dark: "#05314b",
        },
        secondary: {
            light: pink[600],
            main: pink[700],
            dark: pink[900],
        },
        text: {
            primary: "#EFEFEF",
            secondary: blueGrey[900],
        },
        common: {
            white: "#EFEFEF",
            black: "#000000",
        }
    },
    typography: {
        fontFamily: 'Noto Sans, sans-serif',
        h6: {
            "fontWeight": 600,
            "fontSize": 16,
        },
        h5: {
            "fontWeight": 500,
            "fontSize": 18,
        },
    },
});