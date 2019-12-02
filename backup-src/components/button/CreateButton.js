import React from 'react';
import PropTypes from 'prop-types';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';

import ContentAdd from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';
import { useTranslate } from 'ra-core';
import withWidth from 'bootstrap-styled/lib/withWidth';

import Button from './Button';

const CreateButton = ({
  width,
  basePath = '',
  className,
  label = 'ra.action.create',
  icon = <ContentAdd />,
  ...rest
}) => {
  const translate = useTranslate();
  return width === 'xs' ? (
    <Button
      component={Link}
      color="primary"
      className={className}
      to={`${basePath}/create`}
      aria-label={label && translate(label)}
      {...rest}
    >
      {icon}
    </Button>
  ) : (
    <Button
      component={Link}
      to={`${basePath}/create`}
      className={className}
      label={label}
      {...rest}
    >
      {icon}
    </Button>
  );
};

CreateButton.propTypes = {
  basePath: PropTypes.string,
  className: PropTypes.string,
  classes: PropTypes.object,
  label: PropTypes.string,
  size: PropTypes.string,
  icon: PropTypes.element,
};

const enhance = onlyUpdateForKeys(['basePath', 'label', 'translate']);
export default withWidth()(enhance(CreateButton));
