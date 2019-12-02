import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import RefreshIconButton from '../button/RefreshIconButton';

const CircleNotchIcon = styled(FontAwesomeIcon)`
  margin: 14px;
`;

export const LoadingIndicator = ({
  classes: classesOverride,
  className,
  ...rest
}) => {
  const loading = useSelector(state => state.admin.loading > 0);
  return loading ? (
    <CircleNotchIcon
      icon="circle-notch"
      className={classNames('app-loader fa-spin', className)}
      color="inherit"
      {...rest}
    />
  ) : (
    <RefreshIconButton />
  );
};

LoadingIndicator.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  width: PropTypes.string,
};

export default LoadingIndicator;
