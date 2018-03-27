import React from 'react';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import { connect } from 'react-redux';
import { Field } from 'redux-form';
import Text from 'material-ui/Typography';

import { Form, Time } from '../../utils';
import { Timer } from '../../store';

const { operations: { startValue, endValue }} = Timer;

const { format } = Time;

const { ClearForm } = Form;

const TimeBase = ({ handleSubmit, ...props }) => {
  console.log('props', props);
  return (
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
                {' '}
                <Field
                  name="start"
                  component="input"
                  type="time"
                  pattern="[0-9]{2}:[0-9]{2}:[0-9]{2} [W]{2}"
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
                  pattern="[0-9]{2}:[0-9]{2}:[0-9]{2} [W]{2}"
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
};

const ReduxTime = ClearForm(TimeBase);

const TimeForm = ({ setTimes, timer, formID }) => (
  <Grid container justify="center" alignContent="center" alignItems="center">
    <Grid item xs={11}>
      <ReduxTime form={formID} initialValues={timer} onSubmit={setTimes} />
    </Grid>
  </Grid>
);

const mapState = ({ timer }) => {
  console.log('startValue(timer),', startValue(timer), endValue(timer));
  console.log('timer', timer);
  return {
    timer: {
      start: startValue(timer),
      end: endValue(timer),
    },
  };
};

export default connect(mapState, Timer.actions)(TimeForm);
