import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classnames from 'classnames';
import { Link as RRLink } from 'react-router-dom';

const LinkBs = styled(RRLink)`
  ${props => `
    &.router-link {
      color: ${props.theme['$brand-primary']}; !important
    }
  `}
`;

/**
 * @deprecated Use react-router-dom's Link instead
 */
const Link = ({
  to, children, className, classes, ...rest
}) => (
  <LinkBs to={to} className={classnames(className, 'router-link')} {...rest}>
    {children}
  </LinkBs>
);
Link.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object,
  children: PropTypes.node,
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

/** @component */
export default Link;
