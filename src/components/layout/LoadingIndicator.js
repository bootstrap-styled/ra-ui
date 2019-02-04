import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import CircularProgress from '@material-ui/core/CircularProgress';

import RefreshIconButton from '../button/RefreshIconButton';

export const LoadingIndicator = ({
  classes, className, isLoading, ...rest
}) => isLoading ? (
  <CircularProgress
    size={25}
    thickness={2}
    {...rest}
  />
) : (
  <RefreshIconButton />
);

LoadingIndicator.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  width: PropTypes.string,
};

const mapStateToProps = state => ({
  isLoading: state.admin.loading > 0,
});

export default compose(
  connect(
    mapStateToProps,
    {} // Avoid connect passing dispatch in props
  ),
)(LoadingIndicator);
