import React from 'react';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Text from 'material-ui/Typography';
import Card, {
  CardHeader,
  CardContent,
  CardActions,
  CardMedia,
} from 'material-ui/Card';

import Counter from '../counter';
import TimeForm from './form';

const Timer = () => (
  <Grid container justify="center" alignContent="center" alignItems="center">
    <Grid item xs={11}>
      <Card>
        <CardHeader title={<Text align="center"> I am a timer</Text>} />
        <CardContent>
          <Grid
            container
            justify="center"
            alignContent="center"
            alignItems="center">
            <Grid item xs={11}>
              <TimeForm formID="tForm" />
            </Grid>
            <Grid item xs={11}>
              <Counter />
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Grid
            container
            justify="center"
            alignContent="center"
            alignItems="center">
            <Grid item xs={4}>
              <Button>Toggle Countdown</Button>
            </Grid>
            <Grid item xs={4}>
              <Button>Clear Timer</Button>
            </Grid>
          </Grid>{' '}
        </CardActions>
      </Card>
    </Grid>
  </Grid>
);

export default Timer;
