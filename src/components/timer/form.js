import React from 'react';
import Button from 'material-ui/Button';
import { connect } from 'react-redux';
import { Field } from 'redux-form';

//
// import { AuthActs } from '../../modules';
import { Form } from '../../utils';
import { Actions } from '../../store';

const { Start } = Actions;

// import LogoutLink from './logoutLink';
const { ClearForm, renderText } = Form;

const TimeBase = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <Field
      name="time"
      component="input"
      type="time"
      placeholder="displayName"
    />
    <Button type="submit">SetTime</Button>
  </form>
);

const ReduxTime = ClearForm(TimeBase);

const TimeForm = ({ setStart, formID }) => (
  <ReduxTime form={formID} onSubmit={setStart} />
);

export default connect(null, Start)(TimeForm);
