import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@bootstrap-styled/v4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';
import { useTranslate, useNotify } from 'ra-core';

const sanitizeRestProps = ({
  basePath,
  className,
  classes,
  saving,
  label,
  invalid,
  variant,
  handleSubmit,
  handleSubmitWithRedirect,
  submitOnEnter,
  record,
  redirect,
  resource,
  locale,
  undoable,
  ...rest
}) => rest;

const SaveButton = ({
  className,
  invalid,
  label = 'ra.action.save',
  pristine,
  redirect,
  saving,
  submitOnEnter,
  variant = 'contained',
  icon,
  onClick,
  handleSubmitWithRedirect,
  ...rest
}) => {
  const notify = useNotify();
  const translate = useTranslate();

  // We handle the click event through mousedown because of an issue when
  // the button is not as the same place when mouseup occurs, preventing the click
  // event to fire.
  // It can happen when some errors appear under inputs, pushing the button
  // towards the window bottom.
  const handleMouseDown = event => {
    if (saving) {
      // prevent double submission
      event.preventDefault();
    } else {
      if (invalid) {
        notify('ra.message.invalid_form', 'warning');
      }
      // always submit form explicitly regardless of button type
      if (event) {
        event.preventDefault();
      }
      handleSubmitWithRedirect(redirect);
    }

    if (typeof onClick === 'function') {
      onClick(event);
    }
  };

  // As we handle the "click" through the mousedown event, we have to make sure we cancel
  // the default click in case the issue mentionned above does not occur.
  // Otherwise, this would trigger a standard HTML submit, not the final-form one.
  const handleClick = event => {
    event.preventDefault();
    event.stopPropagation();
  };

  const type = submitOnEnter ? 'submit' : 'button';
  const displayedLabel = label && translate(label, { _: label });
  return (
    <Button
      className={classnames('position-relative', className)}
      variant={variant}
      type={type}
      onMouseDown={handleMouseDown}
      onClick={handleClick}
      color={saving ? 'link' : 'primary'}
      aria-label={displayedLabel}
      {...sanitizeRestProps(rest)}
    >
      {saving && saving.redirect === redirect ? (
        <FontAwesomeIcon
          icon="circle-notch"
          spin
          className="mr-1"
        />
      ) : icon}
      {displayedLabel}
    </Button>
  );
};

SaveButton.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object,
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
  submitOnEnter: PropTypes.bool,
  variant: PropTypes.oneOf(['text', 'outlined', 'contained']),
  icon: PropTypes.element,
};

SaveButton.defaultProps = {
  icon: <FontAwesomeIcon icon="save" className="mr-1" />,
};

export default SaveButton;
