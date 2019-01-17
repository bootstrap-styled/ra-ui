import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Fa from '@bootstrap-styled/v4/lib/Fa';
import compose from 'recompose/compose';

import RefreshIconButton from '../button/RefreshIconButton';

export const LoadingIndicator = ({
  classes, className, isLoading, ...rest
}) => isLoading ? (
  <Fa
    className="m-3"
    size="2x"
    spin
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

const mapStateToProps = (state) => ({
  isLoading: state.admin.loading > 0,
});

export default compose(
  connect(
    mapStateToProps,
    {} // Avoid connect passing dispatch in props
  ),
)(LoadingIndicator);
