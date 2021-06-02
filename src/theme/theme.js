
/*
  see /public/png/palette.png

  tealy #bbc9dd
  bluey #c3dde6
  whitey #e4e8f0
  purpley #421c5d
  orangey #e05717
  greeny #ccd31f

  // window.location.host
  // const defaultHost = `localhost:3000`

*/
let widgetSettings = {
  primaryColor: `#424242`,
  secondaryColor: `#ccd31f`,
}
if ( window.widgetSettings ) widgetSettings = window.widgetSettings
const {
  primaryColor,
  secondaryColor,
} = widgetSettings

export const theme = { 
  palette: {
    type: 'dark',
    background: {
      default: `#ccd31f`,
      // paper: `#fff`,
    },
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
  }
}
