import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import { connect } from 'react-redux';

import { Time } from '../../utils';
import { Timer } from '../../store';
import { withInterval } from '../wrappers';

const { operations: ops } = Timer;

const Counter = ({ duration }) => (
  <Grid container justify="center" alignContent="center" alignItems="center">
    <Grid item xs={11}>
      <Text align="center" variant="display4">
        {duration}
      </Text>
      <Text align="center" variant="display3" gutterBottom>
        seconds remaining
      </Text>
    </Grid>
  </Grid>
);

const mapState = ({ timer }) => ({ duration: ops.duration(timer) });

const connected = connect(mapState);

export default connected(withInterval(Counter));
