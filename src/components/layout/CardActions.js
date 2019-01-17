import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ActionsWrapper = styled.div`
  z-index: 2;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-wrap: wrap;
  padding: 0;
`;

const CardActions = ({
  className, children, ...rest
}) => (
  <ActionsWrapper className={className} {...rest}>
    {children}
  </ActionsWrapper>
);

CardActions.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default CardActions;
