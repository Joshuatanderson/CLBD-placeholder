import React from 'react';
import { Typography, CssBaseline, Grid, Button } from '@material-ui/core'
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { theme } from './theme';

import './styles/app.css'
import logo from './images/clbd_logo.png'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* add background image with css blur */}
      <CssBaseline />
      <Grid container className="app" justify="center" alignItems="center">
        <Grid item container spacing={3} sm={6} xs={10} className="white-box" justify="center">
          <Grid item xs={12}>
            <Typography variant="h4" align="center">
              {/* add logo */}
              CLBD's new website is under construction.
            </Typography>
          </Grid>
          <Grid className="grid-item-centers" item xs={10}>
            <img className="logo" src={logo} alt="clbd-logo" />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" align="center">
              Please pardon our dust.
            </Typography>
          </Grid>
          <Grid item xs={12} className="grid-item-centers">
            <Button href="mailto:clbd@lsu.edu">
              contact us
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
