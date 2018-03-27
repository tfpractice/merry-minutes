import React from 'react';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import { connect } from 'react-redux';
import { Field } from 'redux-form';
import Text from 'material-ui/Typography';

//
// import { AuthActs } from '../../modules';
import { Form, Time } from '../../utils';
import { Actions } from '../../store';

const { Timer } = Actions;

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
              {' '}
              <Field
                name="start"
                component="input"
                type="time"
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

const TimeForm = ({ setTimes, formID }) => (
  <Grid container justify="center" alignContent="center" alignItems="center">
    <Grid item xs={11}>
      <ReduxTime
        form={formID}
        initialValues={{
          start: Time.format(),
          end: Time.format(Time.add(15)()),
        }}
        onSubmit={setTimes}
      />
    </Grid>
  </Grid>
);

export default connect(null, Timer)(TimeForm);
