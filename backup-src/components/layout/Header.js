import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import ViewTitle from './ViewTitle';

/**
 * @deprecated
 */
export const Header = ({
  className,
  title,
  actions,
  actionProps,
  ...rest
}) => {
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.warn(
      '<Header> is deprecated, please use <Title> directly instead'
    );
  }
  return (
    <div className={classnames(className, 'd-flex justify-content-between')} {...rest}>
      <ViewTitle title={title} />
      {actions && React.cloneElement(actions, actionProps)}
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  title: PropTypes.any,
  actions: PropTypes.element,
  actionProps: PropTypes.object,
};

export default Header;
