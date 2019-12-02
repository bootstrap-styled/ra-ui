import PropTypes from 'prop-types';

export const fieldPropTypes = {
  addLabel: PropTypes.bool,
  sortBy: PropTypes.string,
  source: PropTypes.string,
  label: PropTypes.string,
  sortable: PropTypes.bool,
  className: PropTypes.string,
  cellClassName: PropTypes.string,
  headerClassName: PropTypes.string,
  textAlign: PropTypes.oneOf(['right', 'left']),
};
