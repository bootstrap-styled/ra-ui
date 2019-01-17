import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import ButtonBs from '@bootstrap-styled/v4/lib/Button';

import ContentSave from '@material-ui/icons/Save';
import classnames from 'classnames';
import { showNotification, translate } from 'ra-core';
import Fa from '@bootstrap-styled/v4/lib/Fa';

const sanitizeRestProps = ({
  basePath,
  className,
  saving,
  label,
  invalid,
  translate,
  handleSubmit,
  handleSubmitWithRedirect,
  submitOnEnter,
  redirect,
  locale,
  showNotification,
  ...rest
}) => rest;

export class SaveButton extends Component {
    static propTypes = {
      className: PropTypes.string,
      handleSubmitWithRedirect: PropTypes.func,
      invalid: PropTypes.bool,
      label: PropTypes.string,
      pristine: PropTypes.bool,
      redirect: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool,
        PropTypes.func,
      ]),
      saving: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
      showNotification: PropTypes.func,
      submitOnEnter: PropTypes.bool,
      translate: PropTypes.func.isRequired,
      icon: PropTypes.element,
    };

    static defaultProps = {
      handleSubmitWithRedirect: () => () => {},
      icon: <ContentSave />,
    };

    handleClick = (e) => {
      const {
        handleSubmitWithRedirect,
        invalid,
        redirect,
        saving,
        showNotification,
        onClick,
      } = this.props;

      if (saving) {
        // prevent double submission
        e.preventDefault();
      } else {
        if (invalid) {
          showNotification('ra.message.invalid_form', 'warning');
        }
        // always submit form explicitly regardless of button type
        if (e) {
          e.preventDefault();
        }
        handleSubmitWithRedirect(redirect)();
      }

      if (typeof onClick === 'function') {
        onClick();
      }
    };

    render() {
      const {
        className,
        invalid,
        label = 'ra.action.save',
        pristine,
        redirect,
        saving,
        submitOnEnter,
        translate,
        icon,
        onClick,
        ...rest
      } = this.props;

      const type = submitOnEnter ? 'submit' : 'button';
      return (
        <ButtonBs
          className={classnames(className, 'cursor-pointer')}
          type={type}
          onClick={this.handleClick}
          color={saving ? 'success' : 'primary'}
          {...sanitizeRestProps(rest)}
        >
          {saving && saving.redirect === redirect ? (
            <Fa
              className="m-3"
              size="2x"
              spin
            />
          ) : (
            React.cloneElement(icon, {
              className: 'pr-2',
            })
          )}
          {label && translate(label, { _: label })}
        </ButtonBs>
      );
    }
}

const enhance = compose(
  translate,
  connect(
    undefined,
    { showNotification }
  ),
);

export default enhance(SaveButton);
