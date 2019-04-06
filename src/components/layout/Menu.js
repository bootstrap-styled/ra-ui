import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import inflection from 'inflection';
import compose from 'recompose/compose';
import classnames from 'classnames';
import { getResources, translate } from 'ra-core';
import ListGroup from '@bootstrap-styled/v4/lib/ListGroup';
import DefaultIcon from '@material-ui/icons/ViewList';
import DashboardMenuItem from './DashboardMenuItem';
import MenuItemLink from './MenuItemLink';
import Responsive from './Responsive';
import { DRAWER_WIDTH } from './Sidebar';

const translatedResourceName = (resource, translate) => translate(`resources.${resource.name}.name`, { // eslint-disable-line no-shadow
  smart_count: 2,
  _:
            resource.options && resource.options.label
              ? translate(resource.options.label, {
                smart_count: 2,
                _: resource.options.label,
              })
              : inflection.humanize(inflection.pluralize(resource.name)),
});

const Menu = ({
  className,
  dense,
  hasDashboard,
  onMenuClick,
  open,
  pathname,
  resources,
  translate, // eslint-disable-line no-shadow
  logout,
  ...rest
}) => (
  <ListGroup className={classnames(className, 'd-flex flex-column flex-start pl-4')} style={{ width: DRAWER_WIDTH }} {...rest}>
    {hasDashboard && <DashboardMenuItem onClick={onMenuClick} className="border-0 rounded-0 d-flex flex-start pl-2" />}
    {resources
      .filter(r => r.hasList)
      .map(resource => (
        <MenuItemLink
          className="border-0 rounded-0 d-flex flex-start pl-2"
          key={resource.name}
          to={`/${resource.name}`}
          primaryText={translatedResourceName(resource, translate)}
          leftFaIcon={resource.faIcon}
          leftIcon={
            resource.icon ? <resource.icon /> : <DefaultIcon />
          }
          onClick={onMenuClick}
          dense={dense}
        />
      ))}
    <Responsive xsmall={logout} medium={null} />
  </ListGroup>
);

Menu.propTypes = {
  className: PropTypes.string,
  dense: PropTypes.bool,
  hasDashboard: PropTypes.bool,
  logout: PropTypes.element,
  onMenuClick: PropTypes.func,
  open: PropTypes.bool,
  pathname: PropTypes.string,
  resources: PropTypes.array.isRequired,
  translate: PropTypes.func.isRequired,
};

Menu.defaultProps = {
  onMenuClick: () => null,
};

const mapStateToProps = state => ({
  open: state.admin.ui.sidebarOpen,
  resources: getResources(state),
  pathname: state.router.location.pathname, // used to force redraw on navigation
});

const enhance = compose(
  translate,
  connect(
    mapStateToProps,
    {}, // Avoid connect passing dispatch in props,
    null,
    {
      areStatePropsEqual: (prev, next) => prev.resources.every(
        (value, index) => value === next.resources[index] // shallow compare resources
      )
                && prev.pathname == next.pathname // eslint-disable-line eqeqeq
                && prev.open == next.open, // eslint-disable-line eqeqeq
    }
  ),
);

export default enhance(Menu);
