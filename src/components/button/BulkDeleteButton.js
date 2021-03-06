import React from 'react';
import PropTypes from 'prop-types';
import BulkDeleteWithConfirmButton from './BulkDeleteWithConfirmButton';
import BulkDeleteWithUndoButton from './BulkDeleteWithUndoButton';

import Button from './Button'; // eslint-disable-line

const BulkDeleteButton = ({ undoable, ...props }) => undoable ? (
  <BulkDeleteWithUndoButton {...props} />
) : (
  <BulkDeleteWithConfirmButton {...props} />
);

BulkDeleteButton.propTypes = {
  basePath: PropTypes.string,
  label: PropTypes.string,
  resource: PropTypes.string.isRequired,
  selectedIds: PropTypes.arrayOf(PropTypes.any).isRequired,
  undoable: PropTypes.bool,
  icon: PropTypes.element,
};

BulkDeleteButton.defaultProps = {
  undoable: true,
};

/** @component */
export default BulkDeleteButton;
