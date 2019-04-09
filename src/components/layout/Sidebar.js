import React, { PureComponent, Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import Drawer from '@bootstrap-styled/v4/lib/Drawer';
import { setSidebarVisibility } from 'ra-core';
import styled from 'styled-components';
import { mediaBreakpointOnly } from '@bootstrap-styled/css-mixins/lib/breakpoints';
import cn from 'classnames';
import withWidth from '../extendMui/withWidth';
import Responsive from './Responsive';

export const DRAWER_WIDTH = '230px';
export const CLOSED_DRAWER_WIDTH = '55px';

const DrawerPaper = styled(Drawer)`
  width: ${DRAWER_WIDTH};
  overflow-x: hidden;
  transition: width 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms;
  ${mediaBreakpointOnly('xs', `
    margin-top: 0;
    height: 100vh;
    position: inherit;
  `)}
  ${mediaBreakpointOnly('md', `
    border: none;
    margin-top: 5.5em;
  `)}
 
  &.close {
    width: ${CLOSED_DRAWER_WIDTH} !important;
  }
`;


// We shouldn't need PureComponent here as it's connected
// but for some reason it keeps rendering even though mapStateToProps returns the same object
class Sidebar extends PureComponent {
  componentWillMount() {
    const { width, setSidebarVisibility } = this.props; // eslint-disable-line no-shadow
    if (width !== 'xs' && width !== 'sm') {
      setSidebarVisibility(true);
    }
  }

  handleClose = () => this.props.setSidebarVisibility(false);

  toggleSidebar = () => this.props.setSidebarVisibility(!this.props.open);

  render() {
    const {
      children,
      closedSize,
      open,
      setSidebarVisibility, // eslint-disable-line no-shadow
      size,
      width,
      ...rest
    } = this.props;

    return (
      <Responsive
        xsmall={(
          <Drawer
            active={open}
            left={DRAWER_WIDTH}
            style={{ top: '45px' }}
            onClose={this.toggleSidebar}
            {...rest}
          >
            {cloneElement(Children.only(children), {
              onMenuClick: this.handleClose,
            })}
          </Drawer>
        )}
        small={(
          <DrawerPaper
            docked
            left={DRAWER_WIDTH}
            active={open}
            className={cn('mt-3', { close: !open })}
            onClose={this.toggleSidebar}
            {...rest}
          >
            {cloneElement(Children.only(children), {
              onMenuClick: this.handleClose,
            })}
          </DrawerPaper>
        )}
        medium={(
          <DrawerPaper
            docked
            left={DRAWER_WIDTH}
            active={open}
            className={cn('mt-2', { close: !open })}
            onClose={this.toggleSidebar}
            {...rest}
          >
            {cloneElement(Children.only(children))}
          </DrawerPaper>
        )}
      />
    );
  }
}

Sidebar.propTypes = {
  children: PropTypes.node.isRequired,
  closedSize: PropTypes.string,
  open: PropTypes.bool.isRequired,
  setSidebarVisibility: PropTypes.func.isRequired,
  size: PropTypes.string,
  width: PropTypes.string,
};

Sidebar.defaultProps = {
  size: DRAWER_WIDTH,
  closedSize: CLOSED_DRAWER_WIDTH,
};

const mapStateToProps = state => ({
  open: state.admin.ui.sidebarOpen,
  locale: state.locale, // force redraw on locale change
});

export default compose(
  connect(
    mapStateToProps,
    { setSidebarVisibility }
  ),
  withWidth({ resizeInterval: Infinity }) // used to initialize the visibility on first render
)(Sidebar);
