import React, { Fragment, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import classnames from 'classnames';
import { Tooltip, Button } from '@bootstrap-styled/v4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { refreshView, useTranslate } from 'ra-core';

const defaultIcon = <FontAwesomeIcon icon="redo" />;

const RefreshIconButton = ({
  label = 'ra.action.refresh',
  icon = defaultIcon,
  onClick,
  className,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState();
  const dispatch = useDispatch();
  const translate = useTranslate();
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

  return ( // eslint-disable-next-line react/jsx-fragments
    <Fragment>
      <Button
        id="tooltip-refresh-icon-button"
        alt={label && translate(label, { _: label })}
        className={classnames('bg-transparent border-0 shadow-none', className)}
        onClick={handleClick}
        {...rest}
      >
        {icon}
      </Button>
      <Tooltip
        placement="bottom"
        isOpen={isOpen}
        target="tooltip-refresh-icon-button"
        toggle={() => setIsOpen(!isOpen)}
      >
        {label && translate(label, { _: label })}
      </Tooltip>
    </Fragment>
  );
};

RefreshIconButton.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.element,
};

export default RefreshIconButton;
