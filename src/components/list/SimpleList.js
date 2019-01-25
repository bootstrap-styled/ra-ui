import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import { linkToRecord, sanitizeListRestProps } from 'ra-core';
import styled from 'styled-components';

const Tertiary = styled.span`
  float: right;
  opacity: 0.5;
`;

const LinkOrNot = ({
  linkType,
  basePath,
  id,
  children,
}) => linkType === 'edit' || linkType === true ? (
  <Link to={linkToRecord(basePath, id)}>
    {children}
  </Link>
) : linkType === 'show' ? (
  <Link
    to={`${linkToRecord(basePath, id)}/show`}
  >
    {children}
  </Link>
) : (
  <span>{children}</span>
);

const SimpleList = ({
  basePath,
  className,
  data,
  hasBulkActions,
  ids,
  isLoading,
  leftAvatar,
  leftIcon,
  linkType,
  onToggleItem,
  primaryText,
  rightAvatar,
  rightIcon,
  secondaryText,
  selectedIds,
  tertiaryText,
  total,
  ...rest
}) => (isLoading || total > 0) && (
  <List className={className} {...sanitizeListRestProps(rest)}>
    {ids.map(id => (
      <LinkOrNot
        linkType={linkType}
        basePath={basePath}
        id={id}
        key={id}
      >
        <ListItem button>
          {leftIcon && (
            <ListItemIcon>
              {leftIcon(data[id], id)}
            </ListItemIcon>
          )}
          {leftAvatar && (
            <ListItemAvatar>
              <Avatar>{leftAvatar(data[id], id)}</Avatar>
            </ListItemAvatar>
          )}
          <ListItemText
            primary={(
              <div>
                {primaryText(data[id], id)}
                {tertiaryText && (
                  <Tertiary>
                    {tertiaryText(data[id], id)}
                  </Tertiary>
                )}
              </div>
            )}
            secondary={
              secondaryText && secondaryText(data[id], id)
            }
          />
          {(rightAvatar || rightIcon) && (
            <ListItemSecondaryAction>
              {rightAvatar && (
                <Avatar>{rightAvatar(data[id], id)}</Avatar>
              )}
              {rightIcon && (
                <ListItemIcon>
                  {rightIcon(data[id], id)}
                </ListItemIcon>
              )}
            </ListItemSecondaryAction>
          )}
        </ListItem>
      </LinkOrNot>
    ))}
  </List>
);

SimpleList.propTypes = {
  basePath: PropTypes.string,
  className: PropTypes.string,
  data: PropTypes.object,
  hasBulkActions: PropTypes.bool.isRequired,
  ids: PropTypes.array,
  leftAvatar: PropTypes.func,
  leftIcon: PropTypes.func,
  linkType: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
    .isRequired,
  onToggleItem: PropTypes.func,
  primaryText: PropTypes.func,
  rightAvatar: PropTypes.func,
  rightIcon: PropTypes.func,
  secondaryText: PropTypes.func,
  selectedIds: PropTypes.arrayOf(PropTypes.any).isRequired,
  tertiaryText: PropTypes.func,
};

SimpleList.defaultProps = {
  linkType: 'edit',
  hasBulkActions: false,
  selectedIds: [],
};

export default SimpleList;
