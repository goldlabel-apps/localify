
/*
  see /public/png/palette.png

  tealy #bbc9dd
  bluey #c3dde6
  whitey #e4e8f0
  purpley #421c5d
  orangey #e05717
  greeny #ccd31f

*/
let widgetSettings = {
  primaryColor: `#421c5d`,
  secondaryColor: `#ccd31f`,
}
if ( window.widgetSettings ) widgetSettings = window.widgetSettings
const {
  primaryColor,
  secondaryColor,
} = widgetSettings

// window.location.host
// const defaultHost = `localhost:3000`

export const theme = { 
  palette: {
    type: 'light',
    background: {
      default: `#fff`,
      paper: `#fff`,

    },
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
  }
}
