import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';

import { withInterval } from '../wrappers';

const Counter = ({ timer }) => (
  <Grid container justify="center" alignContent="center" alignItems="center">
    <Grid item xs={11}>
      <Text align="center" variant="display4" gutterBottom>
        Counting
      </Text>
    </Grid>
  </Grid>
);

export default withInterval(Counter);
