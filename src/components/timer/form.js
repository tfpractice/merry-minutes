import React from 'react';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import { connect } from 'react-redux';
import { Field } from 'redux-form';
import Text from 'material-ui/Typography';

import { Form } from '../../utils';
import { Timer } from '../../store';

const { operations: { startString, endString }} = Timer;

const { ClearForm } = Form;

const TimeBase = ({ handleSubmit }) => (
  <Grid container justify="center" alignContent="center" alignItems="center">
    <Grid item xs={11}>
      <form onSubmit={handleSubmit}>
        <Grid
          container
          justify="center"
          alignContent="center"
          alignItems="center">
          <Grid item xs={6}>
            <Text align="center">
              <Field
                name="start"
                component="input"
                type="time"
                pattern="[\d]{2}:[\d]{2}:[\d]{2} [\w]{2}"
                step={5}
                placeholder="start time"
              />
            </Text>
          </Grid>

          <Grid item xs={6}>
            <Text align="center">
              <Field
                name="end"
                component="input"
                type="time"
                pattern="[\d]{2}:[\d]{2}:[\d]{2} [\w]{2}"
                step={5}
                placeholder="end time"
              />
            </Text>
          </Grid>
          <Grid item xs={11}>
            <Text align="center">
              <Button type="submit">SetTime</Button>
            </Text>
          </Grid>
        </Grid>
      </form>
    </Grid>
  </Grid>
);

const ReduxTime = ClearForm(TimeBase);

const TimeForm = ({ createTimer, timer, formID }) => (
  <Grid container justify="center" alignContent="center" alignItems="center">
    <Grid item xs={11}>
      <ReduxTime form={formID} initialValues={timer} onSubmit={createTimer} />
    </Grid>
  </Grid>
);

const mapState = ({ timer }) => ({
  timer: {
    start: startString(timer),
    end: endString(timer),
  },
});

export default connect(mapState, Timer.actions)(TimeForm);
