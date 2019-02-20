import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CardContent from '@material-ui/core/CardContent';
import classnames from 'classnames';

import Responsive from './Responsive';
import AppBarMobile from './AppBarMobile';

/**
 * @deprecated
 */
const ViewTitle = ({ className, title, ...rest }) => {
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.warn('<ViewTitle> is deprecated, please use <Title> instead');
  }
  return (
    <Responsive
      xsmall={(
        <Fragment>
          <AppBarMobile
            className={classnames('title', className)}
            title={title}
            {...rest}
          />
          <span> </span>
        </Fragment>
      )}
      medium={(
        <CardContent
          className={classnames('title', className)}
          {...rest}
        >
          <h1>{title}</h1>
        </CardContent>
      )}
    />
  );
};

ViewTitle.propTypes = {
  className: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
};

export default ViewTitle;
