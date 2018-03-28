import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import { connect } from 'react-redux';

import { Time } from '../../utils';
import { Timer, Clock } from '../../store';
import { withInterval } from '../wrappers';

const { operations: ops } = Timer;

const Counter = ({ duration, remaining, ...props }) => {
  console.log('props', props);
  return (
    <Grid container justify="center" alignContent="center" alignItems="center">
      <Grid item xs={11}>
        <Text align="center" variant="display4">
          {remaining}
        </Text>
        <Text align="center" variant="display3" gutterBottom>
          seconds remaining
        </Text>
      </Grid>
    </Grid>
  );
};

const mapState = ({ timer, clock: { remaining }}) => ({
  duration: ops.duration(timer),
  remaining,
});

const connected = connect(mapState, Clock.actions);

export default connected(withInterval(Counter));
