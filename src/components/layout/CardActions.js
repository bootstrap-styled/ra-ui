import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Acions = styled.div`
  z-index: 2;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-wrap: wrap;
  padding: 0;
`;

const CardActions = ({
  classes, className, children, ...rest
}) => (
  <Acions className={className} {...rest}>
    {children}
  </Acions>
);

CardActions.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object,
  className: PropTypes.string,
};

export default CardActions;
