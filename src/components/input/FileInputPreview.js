import React, { Component } from 'react';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import RemoveCircle from '@material-ui/icons/RemoveCircle';
import { translate } from 'ra-core';

// const styles = theme => ({
//   removeButton: {},
//   removeIcon: {
//     color: theme.palette.accent1Color,
//   },
// });

export class FileInputPreview extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    className: PropTypes.string,
    file: PropTypes.object,
    onRemove: PropTypes.func.isRequired,
    revokeObjectURL: PropTypes.func,
  };

  static defaultProps = {
    file: undefined,
    translate: id => id,
  };

  componentWillUnmount() {
    const { file, revokeObjectURL } = this.props;

    if (file.preview) {
      revokeObjectURL // eslint-disable-line no-unused-expressions
        ? revokeObjectURL(file.preview)
        : window.URL.revokeObjectURL(file.preview);
    }
  }

  render() {
    const {
      children,
      className,
      onRemove,
      revokeObjectURL,
      file,
      translate,
      ...rest
    } = this.props;

    return (
      <div className={className} {...rest}>
        <IconButton
          onClick={onRemove}
          title={translate('ra.action.delete')}
        >
          <RemoveCircle />
        </IconButton>
        {children}
      </div>
    );
  }
}

export default compose(
  translate
)(FileInputPreview);
