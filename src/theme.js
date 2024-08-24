import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: '#392C7D'
    },
    secondary: {
      main: '#F66962'
    },
    text: {
      main: '#22100D'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          textTransform: 'none',
          ":hover": {
            boxShadow: 'none'
          }
        }
      }
    }
  },

  typography: {
    // fontFamily: [
    //   'Plus Jakarta Sans',
    //   'Roboto',
    // ].join(','),
    // h6: {
    //   fontSize: '16px',
    //   fontWeight: 600
    // }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1368,
      xl: 1536,
    },
  }
})