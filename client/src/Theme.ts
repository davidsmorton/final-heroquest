import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';
import CssBaseline from "@material-ui/core/CssBaseline";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#E7B42E",
      
    },
    secondary: {
      main: "hsla(5, 51%, 46%, 1)",
    },
    type: "dark", 
    background:{
      default: "#222"
    },
  },
  // overrides: {
  //   MuiCssBaseline: {
  //     "@global": {
  //       body: {
  //         backgroundImage:
  //           "url(https://i.pinimg.com/originals/83/f7/21/83f72186ce6ac2004ae4d57c3d4bcb19.jpg)"
  //       }
  //     }
  //   }
  // }  
});