import { createMuiTheme } from '@material-ui/core/styles';
import { blueGrey, pink } from '@material-ui/core/colors';

export const theme = createMuiTheme({
    palette: {
        primary: {
            light: "#01425e",
            main: "#05314b",
            dark: "#032030",
        },
        secondary: {
            light: pink[600],
            main: pink[700],
            dark: pink[900],
        },
        text: {
            primary: "#EFEFEF",
            secondary: "#032030",
        },
        common: {
            white: "#EFEFEF",
            black: "#05314b",
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