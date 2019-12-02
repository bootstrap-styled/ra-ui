import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { useTranslate } from 'ra-core';
import Color from '@bootstrap-styled/color';
import Responsive from '../layout/Responsive';

import Button from './Button';

const FloatingButton = styled(Button)`
  ${props => `
    &&.btn-float {
      width: 56px;
      height: 56px;
      background: ${props.theme['$brand-primary']};
      border-radius: 100%;
      margin: 0;
      top: auto;
      right: 20px;
      bottom: 60px;
      left: auto;
      position: fixed;
      z-index: 1000;
      padding: 20px;
      ${props.theme.raUi['$fab-enable-shadows'] ? 'box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12);' : ''}
      &:hover {
        background: ${Color(props.theme['$brand-primary']).darken(0.35).toString()}
      }
      svg {
        color: white;
      }
    }
  `}
`;

const CreateButton = ({
  basePath = '',
  className,
  label = 'ra.action.create',
  icon = <FontAwesomeIcon icon="plus" className="ml-2" />,
  ...rest
}) => {
  const translate = useTranslate();
  return (
    <Responsive
      medium={(
        <FloatingButton
          component={Link}
          size="lg"
          color="primary"
          className={classnames('btn-float', className)}
          to={`${basePath}/create`}
          aria-label={label && translate(label)}
          {...rest}
        >
          {icon}
        </FloatingButton>
      )}
      large={(
        <Button
          component={Link}
          to={`${basePath}/create`}
          className={className}
          label={label}
          {...rest}
        >
          {icon}
        </Button>
      )}
    />
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
export default enhance(CreateButton);
