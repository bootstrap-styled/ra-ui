import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CardBlock from '@bootstrap-styled/v4/lib/Cards/CardBlock';

/**
 * Overrides material-ui CardContent to allow inner content
 *
 * When using several CardContent inside the same Card, the top and bottom
 * padding double the spacing between each CardContent, leading to too much
 * wasted space. Use this component as a CardContent alternative.
 */
const CardContentInner = ({ className, children }) => (
  <CardBlock className={classnames('flex-column d-flex justify-content-between mb-0 rounded-bottom-0', className)}>
    {children}
  </CardBlock>
);

CardContentInner.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default CardContentInner;
