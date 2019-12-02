import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { refreshView } from 'ra-core';

import Button from './Button';

const defaultIcon = <FontAwesomeIcon icon="redo" />;

const RefreshButton = ({
  label = 'ra.action.refresh',
  icon = defaultIcon,
  onClick,
  ...rest
}) => {
  const dispatch = useDispatch();
  const handleClick = useCallback(
    event => {
      event.preventDefault();
      dispatch(refreshView());
      if (typeof onClick === 'function') {
        onClick();
      }
    },
    [dispatch, onClick]
  );

  return (
    <Button label={label} onClick={handleClick} {...rest}>
      {icon}
    </Button>
  );
};

RefreshButton.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.element,
};

export default RefreshButton;
