import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CardHeader from '@bootstrap-styled/v4/lib/Cards/CardHeader';

/**
 * Overrides material-ui CardContent to allow inner content
 *
 * When using several CardContent inside the same Card, the top and bottom
 * padding double the spacing between each CardContent, leading to too much
 * wasted space. Use this component as a CardContent alternative.
 */
const CardContentInner = ({ classes, className, children }) => (
    <CardHeader className={classnames('flex-column flex-sm-row d-flex justify-content-between mb-0 align-items-center rounded-bottom-0', className)} {...rest}>
        {children}
    </CardHeader>
);

CardContentInner.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};

export default CardContentInner;
