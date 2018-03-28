import React from 'react';
import TextField from 'material-ui/TextField';
import { reduxForm } from 'redux-form';

export const resetSuccess = (res, dispatch, { reset }) => reset();
const onSubmitSuccess = resetSuccess;

const enableReinitialize = true;

export const ClearForm = form =>
  reduxForm({
    onSubmitSuccess,
    enableReinitialize,
  })(form);

export const renderText = ({ input, meta: { error: e }, ...rest }) => (
  <TextField inputProps={input} error={e} {...rest} />
);
