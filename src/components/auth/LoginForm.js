import React from 'react';
import PropTypes from 'prop-types';
import { Field, propTypes, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import compose from 'recompose/compose';

import Button from '@bootstrap-styled/v4/lib/Button';
import Label from '@bootstrap-styled/v4/lib/Label';
import Input from '@bootstrap-styled/v4/lib/Input';
import Form from '@bootstrap-styled/v4/lib/Form';
import FormGroup from '@bootstrap-styled/v4/lib/Form/FormGroup';
import FormFeedback from '@bootstrap-styled/v4/lib/Form/FormFeedback';
import Fa from '@bootstrap-styled/v4/lib/Fa';

import { translate, userLogin } from 'ra-core';

// see http://redux-form.com/6.4.3/examples/material-ui/
const renderInput = ({
  meta: { touched, error } = {}, // eslint-disable-line react/prop-types
  input: { ...inputProps }, // eslint-disable-line react/prop-types
  ...props
}) => (
  <FormGroup color={touched && error ? 'danger' : ''}>
    <Label>{props.label}</Label>
    <Input {...inputProps} {...props} />
    {!!(touched && error) && <FormFeedback>{touched && error}</FormFeedback>}
  </FormGroup>
);
const login = (auth, dispatch, { redirectTo }) => dispatch(userLogin(auth, redirectTo));

const LoginForm = ({
  isLoading, handleSubmit, translate,
}) => (
  <Form onSubmit={handleSubmit(login)}>
    <div className="px-3 pb-3">
      <div className="mt-3">
        <Field
          autoFocus
          id="username"
          name="username"
          component={renderInput}
          label={translate('ra.auth.username')}
          disabled={isLoading}
        />
      </div>
      <div className="mt-3">
        <Field
          id="password"
          name="password"
          component={renderInput}
          label={translate('ra.auth.password')}
          type="password"
          disabled={isLoading}
        />
      </div>
    </div>
    <div className="py-2 px-3">
      <Button
        type="submit"
        color="primary"
        disabled={isLoading}
        className="w-100"
      >
        {isLoading && (
          <Fa
            className="m-3"
            size="2x"
            spin
          />
        )
        }
        {translate('ra.auth.sign_in')}
      </Button>
    </div>
  </Form>
);
LoginForm.propTypes = {
  ...propTypes,
  redirectTo: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
};

const mapStateToProps = (state) => ({ isLoading: state.admin.loading > 0 });

const enhance = compose(
  translate,
  connect(mapStateToProps),
  reduxForm({
    form: 'signIn',
    validate: (values, props) => {
      const errors = {};
      const { translate } = props;
      if (!values.username) errors.username = translate('ra.validation.required');
      if (!values.password) errors.password = translate('ra.validation.required');
      return errors;
    },
  })
);

export default enhance(LoginForm);
