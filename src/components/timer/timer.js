import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';

import TimeForm from './form';

const Timer = () => (
  <Grid container justify="center" alignContent="center" alignItems="center">
    <Grid item xs={11}>
      <Text align="center"> I am a timer</Text>
      <TimeForm formID="tForm" />
    </Grid>
  </Grid>
);

export default Timer;
