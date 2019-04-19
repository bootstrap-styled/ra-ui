import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { mediaBreakpointDown } from '@bootstrap-styled/css-mixins/lib/breakpoints';

const Toolbar = styled.div`
  ${props => `
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    min-height: 56px;
    ${mediaBreakpointDown('sm', props.theme['$grid-breakpoints'], `
      padding: 0 24px;
      min-height: 64px;
    `)}
  `}
`;

const ListToolbar = ({
  filters,
  filterValues, // dynamically set via the UI by the user
  permanentFilter, // set in the List component by the developer
  actions,
  bulkActions,
  exporter,
  ...rest
}) => (
  <Toolbar>
    {filters
    && React.cloneElement(filters, {
      ...rest,
      filterValues,
      context: 'form',
    })}
    <span />
    {actions
    && React.cloneElement(actions, {
      ...rest,
      bulkActions,
      exporter,
      filters,
      filterValues,
      permanentFilter,
      ...actions.props,
    })}
  </Toolbar>
);

ListToolbar.propTypes = {
  filters: PropTypes.element,
  actions: PropTypes.element,
  permanentFilter: PropTypes.object,
  bulkActions: PropTypes.oneOfType([PropTypes.element, PropTypes.bool]),
  exporter: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
};

export default ListToolbar;
