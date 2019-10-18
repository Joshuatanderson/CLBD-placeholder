import React from 'react';
import { Typography, CssBaseline, Grid } from '@material-ui/core'
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { theme } from './theme';

import './app.css'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* add background image with css blur */}
      <CssBaseline />
      <Grid container className="app" justify="center" alignItems="center">
        <Grid item container spacing={3} xs={6} className="white-box">
          <Grid item xs={12}>
            <Typography variant="h4" align="center">
              {/* add logo */}
              CLBD's new website is under construction.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <img src="./background.jpg" className="image" alt="clbd_logo" />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" align="center">
              {/* add logo */}
              Please pardon our dust.
            </Typography>
          </Grid>

        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
