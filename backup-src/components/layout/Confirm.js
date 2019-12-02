import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import ActionCheck from '@material-ui/icons/CheckCircle';
import AlertError from '@material-ui/icons/ErrorOutline';
import compose from 'recompose/compose';
import { translate } from 'ra-core';

// const styles = theme => ({
//   confirmPrimary: {
//     color: theme.palette.primary.main,
//   },
//   confirmWarning: {
//     color: theme.palette.error.main,
//     '&:hover': {
//       backgroundColor: fade(theme.palette.error.main, 0.12),
//       // Reset on mouse devices
//       '@media (hover: none)': {
//         backgroundColor: 'transparent',
//       },
//     },
//   },
//   iconPaddingStyle: {
//     paddingRight: '0.5em',
//   },
// });

/**
 * Confirmation dialog
 *
 * @example
 * <Confirm
 *     isOpen={true}
 *     title="Delete Item"
 *     content="Are you sure you want to delete this item?"
 *     confirm="Yes"
 *     confirmColor="primary"
 *     cancel="Cancel"
 *     onConfirm={() => { // do something }}
 *     onClose={() => { // do something }}
 * />
 */
class Confirm extends Component {
  state = { loading: false };

  handleConfirm = e => {
    e.stopPropagation();
    this.setState({ loading: true });
    this.props.onConfirm();
  };

  render() {
    const {
      isOpen,
      title,
      content,
      confirm,
      cancel,
      onClose,
      translate,
      translateOptions = {},
    } = this.props;
    const { loading } = this.state;

    return (
      <Dialog
        open={isOpen}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
      >
        <DialogTitle id="alert-dialog-title">
          {translate(title, { _: title, ...translateOptions })}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {translate(content, {
              _: content,
              ...translateOptions,
            })}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button disabled={loading} onClick={onClose}>
            <AlertError />
            {translate(cancel, { _: cancel })}
          </Button>
          <Button
            disabled={loading}
            onClick={this.handleConfirm}
            autoFocus
          >
            <ActionCheck />
            {translate(confirm, { _: confirm })}
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

Confirm.propTypes = {
  cancel: PropTypes.string.isRequired,
  confirm: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  translate: PropTypes.func.isRequired,
};


Confirm.defaultProps = {
  cancel: 'ra.action.cancel',
  confirm: 'ra.action.confirm',
  isOpen: false,
};

export default compose(
  translate
)(Confirm);
