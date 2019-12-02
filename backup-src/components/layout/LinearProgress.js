import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Progress from '@bootstrap-styled/v4/lib/Progress';
import ProgressBar from '@bootstrap-styled/v4/lib/Progress/ProgressBar';

/**
 * Progress bar formatted to replace an input or a field in a form layout
 *
 * Avoids visual jumps when replaced by value or form input
 *
 * @see ReferenceField
 * @see ReferenceInput
 *
 * @param {object} classes CSS class names injected by withStyles
 */
export const LinearProgress = ({ className, ...rest }) => (
  <Progress className={classnames(className, 'my-2')} style={{ width: '60px' }} {...rest}>
    <ProgressBar valueNow={100} striped animated />
  </Progress>
);
LinearProgress.propTypes = {
  className: PropTypes.string,
};
// wat? TypeScript looses the displayName if we don't set it explicitly
LinearProgress.displayName = 'LinearProgress';

export default LinearProgress;
