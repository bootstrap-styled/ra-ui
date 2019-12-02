import React, {
  Children, cloneElement, Component, isValidElement,
} from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import get from 'lodash/get';
import FormHelperText from '@material-ui/core/FormHelperText';
import {
  Ul,
  Li,
  P,
  Button as ButtonBs,
} from '@bootstrap-styled/v4';
import CloseIcon from '@material-ui/icons/RemoveCircleOutline';
import AddIcon from '@material-ui/icons/AddCircleOutline';
import { translate } from 'ra-core';
import classNames from 'classnames';

import FormInput from './FormInput';

// const styles = theme => ({
//   root: {
//     padding: 0,
//     marginBottom: 0,
//     '& > li:last-child': {
//       borderBottom: 'none',
//     },
//   },
//   line: {
//     display: 'flex',
//     listStyleType: 'none',
//     borderBottom: `solid 1px ${theme.palette.divider}`,
//     [theme.breakpoints.down('xs')]: { display: 'block' },
//     '&.fade-enter': {
//       opacity: 0.01,
//       transform: 'translateX(100vw)',
//     },
//     '&.fade-enter-active': {
//       opacity: 1,
//       transform: 'translateX(0)',
//       transition: 'all 500ms ease-in',
//     },
//     '&.fade-exit': {
//       opacity: 1,
//       transform: 'translateX(0)',
//     },
//     '&.fade-exit-active': {
//       opacity: 0.01,
//       transform: 'translateX(100vw)',
//       transition: 'all 500ms ease-in',
//     },
//   },
//   index: {
//     width: '3em',
//     paddingTop: '1em',
//     [theme.breakpoints.down('sm')]: { display: 'none' },
//   },
//   form: { flex: 2 },
//   action: {
//     paddingTop: '0.5em',
//   },
//   leftIcon: {
//     marginRight: theme.spacing.unit,
//   },
// });

export class SimpleFormIterator extends Component {
  constructor(props) {
    super(props);
    // we need a unique id for each field for a proper enter/exit animation
    // but redux-form doesn't provide one (cf https://github.com/erikras/redux-form/issues/2735)
    // so we keep an internal map between the field position and an autoincrement id
    this.nextId = props.fields.length
      ? props.fields.length
      : props.defaultValue
        ? props.defaultValue.length
        : 0;

    // We check whether we have a defaultValue (which must be an array) before checking
    // the fields prop which will always be empty for a new record.
    // Without it, our ids wouldn't match the default value and we would get key warnings
    // on the CssTransition element inside our render method
    this.ids = this.nextId > 0 ? Array.from(Array(this.nextId).keys()) : [];
  }

  removeField = index => () => {
    const { fields } = this.props;
    this.ids.splice(index, 1);
    fields.remove(index);
  };

  // Returns a boolean to indicate whether to disable the remove button for certain fields.
  // If disableRemove is a function, then call the function with the current record to
  // determing if the button should be disabled. Otherwise, use a boolean property that
  // enables or disables the button for all of the fields.
  disableRemoveField = (record, disableRemove) => {
    if (typeof disableRemove === 'boolean') {
      return disableRemove;
    }
    return disableRemove && disableRemove(record);
  };

  addField = () => {
    const { fields } = this.props;
    this.ids.push(this.nextId++); // eslint-disable-line
    fields.push({});
  };

  render() {
    const {
      basePath,
      className,
      children,
      fields,
      meta: { error, submitFailed },
      record,
      resource,
      source,
      translate,
      disableAdd,
      disableRemove,
    } = this.props;
    const records = get(record, source);
    return fields ? (
      <Ul className={className}>
        {submitFailed && typeof error !== 'object' && error && (
          <FormHelperText error>{error}</FormHelperText>
        )}
        <TransitionGroup>
          {fields.map((member, index) => (
            <CSSTransition
              key={this.ids[index]}
              timeout={500}
              classNames="fade"
            >
              <Li>
                <P>
                  {index + 1}
                </P>
                <section>
                  {Children.map(children, (input, index2) => isValidElement(input) ? (
                    <FormInput
                      basePath={
                        input.props.basePath || basePath
                      }
                      input={cloneElement(input, {
                        source: input.props.source
                          ? `${member}.${
                            input.props.source
                          }`
                          : member,
                        index: input.props.source
                          ? undefined
                          : index2,
                        label:
                          typeof input.props.label === 'undefined'
                            ? input.props.source
                              ? `resources.${resource}.fields.${
                                input
                                  .props
                                  .source
                              }`
                              : undefined
                            : input.props.label,
                      })}
                      record={(records && records[index]) || {}}
                      resource={resource}
                    />
                  ) : null)}
                </section>
                {!(this.disableRemoveField((records && records[index]) || {}, disableRemove)) && (
                  <span>
                    <ButtonBs
                      className={classNames(
                        'button-remove',
                        `button-remove-${source}-${index}`
                      )}
                      size="sm"
                      onClick={this.removeField(index)}
                    >
                      <CloseIcon />
                      {translate('ra.action.remove')}
                    </ButtonBs>
                  </span>
                )}
              </Li>
            </CSSTransition>
          ))}
        </TransitionGroup>
        {!disableAdd && (
          <Li>
            <span>
              <ButtonBs
                className={classNames(
                  'button-add',
                  `button-add-${source}`
                )}
                size="small"
                onClick={this.addField}
              >
                <AddIcon />
                {translate('ra.action.add')}
              </ButtonBs>
            </span>
          </Li>
        )}
      </Ul>
    ) : null;
  }
}

SimpleFormIterator.defaultProps = {
  disableAdd: false,
  disableRemove: false,
};

SimpleFormIterator.propTypes = {
  defaultValue: PropTypes.any,
  basePath: PropTypes.string,
  children: PropTypes.node,
  classes: PropTypes.object,
  className: PropTypes.string,
  fields: PropTypes.object,
  meta: PropTypes.object,
  record: PropTypes.object,
  source: PropTypes.string,
  resource: PropTypes.string,
  translate: PropTypes.func,
  disableAdd: PropTypes.bool,
  disableRemove: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
};

export default compose(
  translate,
)(SimpleFormIterator);
