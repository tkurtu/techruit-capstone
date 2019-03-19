import { createMuiTheme } from "@material-ui/core/styles";
import 'typeface-lato';

const themes = createMuiTheme ({
  palette: {
    primary: {
      main: '#3d6098', //main blue
      dark: '#00376a', //dark blue
      light: '#6e8dc9', //light blue
    },
    secondary: {
      main: '#ff6644', 
      contrastText: '#f4f7f6',
      light: '#ff9871',
      dark: '#c53319',
    },
  },

  typography: {
    fontFamily: [
      'Lato',
    ].join(','),
  },
});

export default themes

