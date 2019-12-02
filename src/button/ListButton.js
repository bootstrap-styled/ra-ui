import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import Button from './Button';

const ListButton = ({
  basePath = '',
  label = 'ra.action.list',
  icon = <FontAwesomeIcon icon="th-list" />,
  ...rest
}) => (
  <Button component={Link} to={basePath} label={label} {...rest}>
    {icon}
  </Button>
);

ListButton.propTypes = {
  basePath: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.element,
};

export default ListButton;
