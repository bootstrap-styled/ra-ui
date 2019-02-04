import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import compose from 'recompose/compose';
import Drawer from '@bootstrap-styled/v4/lib/Drawer';
import { withStyles } from '@material-ui/core/styles';
import { setSidebarVisibility } from 'ra-core';
import withWidth from '../extendMui/withWidth';

import Responsive from './Responsive';

export const DRAWER_WIDTH = '230px';
export const CLOSED_DRAWER_WIDTH = '55px';

const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    height: 'auto',
    width: DRAWER_WIDTH,
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: 'transparent',
    borderRight: 'none',
    marginTop: '4.5em',
    [theme.breakpoints.only('xs')]: {
      marginTop: 0,
      height: '100vh',
      position: 'inherit',
      backgroundColor: theme.palette.background.default,
    },
    [theme.breakpoints.up('md')]: {
      border: 'none',
      marginTop: '5.5em',
    },
  },
  drawerPaperClose: {
    width: 55,
  },
});


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
      classes,
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
            classes={{
              paper: classes.drawerPaper,
            }}
            onClose={this.toggleSidebar}
            {...rest}
          >
            {React.cloneElement(children, {
              onMenuClick: this.handleClose,
            })}
          </Drawer>
        )}
        small={(
          <Drawer
            docked
            left={DRAWER_WIDTH}
            active={open}
            classes={{
              paper: classnames(classes.drawerPaper,
                !open && classes.drawerPaperClose),
            }}
            onClose={this.toggleSidebar}
            className="mt-3"
            {...rest}
          >
            {React.cloneElement(children, {
              onMenuClick: this.handleClose,
            })}
          </Drawer>
        )}
        medium={(
          <Drawer
            docked
            left={DRAWER_WIDTH}
            active={open}
            classes={{
              paper: classnames(classes.drawerPaper,
                !open && classes.drawerPaperClose),
            }}
            className="mt-3"
            onClose={this.toggleSidebar}
            {...rest}
          >
            {React.cloneElement(children)}
          </Drawer>
        )}
      />
    );
  }
}

Sidebar.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object,
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
  withStyles(styles),
  withWidth({ resizeInterval: Infinity }) // used to initialize the visibility on first render
)(Sidebar);
