import React, { Children, Fragment, isValidElement } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { mediaBreakpointDown } from '@bootstrap-styled/css-mixins/lib/breakpoints';
import { CardBlock } from '@bootstrap-styled/v4';

import classnames from 'classnames';
import withWidth from 'bootstrap-styled/lib/withWidth';

import { SaveButton, DeleteButton } from '../button';

const ToolbarBs = styled(CardBlock)`
  ${props => `
    position: relative;
    display: flex;
    align-items: center;
    &.mobile-toolbar {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 16px;
      width: 100%;
      flex-shrink: 0;
      z-index: 2;
    }
    .toolbar-button-wrapper {
      flex: 1;
      display: flex;
      justify-content: space-between;
    }
    .toolbar-spacer {
      ${mediaBreakpointDown('xs', props.theme['$grid-breakpoints'], 'height: 5rem;')}
    }
  `}
`;

const valueOrDefault = (value, defaultValue) => typeof value === 'undefined' ? defaultValue : value;

const Toolbar = ({
  basePath,
  children,
  className,
  handleSubmit,
  handleSubmitWithRedirect,
  invalid,
  pristine,
  record,
  redirect,
  resource,
  saving,
  submitOnEnter,
  undoable,
  width,
  ...rest
}) => (
  <Fragment>
    <ToolbarBs
      className={classnames(className, {
        mobile: width === 'xs',
      })}
      {...rest}
    >
      {Children.count(children) === 0 ? (
        <div className="toolbar-button-wrapper">
          <SaveButton
            handleSubmitWithRedirect={handleSubmitWithRedirect}
            invalid={invalid}
            redirect={redirect}
            saving={saving}
            submitOnEnter={submitOnEnter}
          />
          {record && typeof record.id !== 'undefined' && (
            <DeleteButton
              basePath={basePath}
              record={record}
              resource={resource}
              undoable={undoable}
            />
          )}
        </div>
      ) : (
        Children.map(
          children,
          button => button && isValidElement(button)
            ? React.cloneElement(button, {
              basePath,
              handleSubmit: valueOrDefault(
                button.props.handleSubmit,
                handleSubmit
              ),
              handleSubmitWithRedirect: valueOrDefault(
                button.props.handleSubmitWithRedirect,
                handleSubmitWithRedirect
              ),
              invalid,
              pristine,
              record,
              resource,
              saving,
              submitOnEnter: valueOrDefault(
                button.props.submitOnEnter,
                submitOnEnter
              ),
              undoable: valueOrDefault(
                button.props.undoable,
                undoable
              ),
            })
            : null
        )
      )}
    </ToolbarBs>
    <div className="toolbar-spacer" />
  </Fragment>
);

Toolbar.propTypes = {
  basePath: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  handleSubmit: PropTypes.func,
  handleSubmitWithRedirect: PropTypes.func,
  invalid: PropTypes.bool,
  pristine: PropTypes.bool,
  record: PropTypes.object,
  redirect: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.func,
  ]),
  resource: PropTypes.string,
  saving: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  submitOnEnter: PropTypes.bool,
  width: PropTypes.string,
  undoable: PropTypes.bool,
};

Toolbar.defaultProps = {
  submitOnEnter: true,
};

export default withWidth({ initialWidth: 'xs' })(Toolbar);
