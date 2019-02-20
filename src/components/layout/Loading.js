import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { translate } from 'ra-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons/faCircleNotch';

// const styles = theme => ({
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     [theme.breakpoints.up('md')]: {
//       height: '100%',
//     },
//     [theme.breakpoints.down('sm')]: {
//       height: '100vh',
//       marginTop: '-3em',
//     },
//   },
//   icon: {
//     width: '9em',
//     height: '9em',
//   },
//   message: {
//     textAlign: 'center',
//     fontFamily: 'Roboto, sans-serif',
//     opacity: 0.5,
//     margin: '0 1em',
//   },
// });

const Loading = ({
  className,
  translate,
  loadingPrimary = 'ra.page.loading',
  loadingSecondary = 'ra.message.loading',
}) => (
  <div className={className}>
    <div>
      <FontAwesomeIcon
        className="m-3"
        size="2x"
        icon={faCircleNotch}
        spin
      />
      <h1>{translate(loadingPrimary)}</h1>
      <div>
        {translate(loadingSecondary)}
.
      </div>
    </div>
  </div>
);

Loading.propTypes = {
  className: PropTypes.string,
  translate: PropTypes.func.isRequired,
  loadingPrimary: PropTypes.string,
  loadingSecondary: PropTypes.string,
};

Loading.defaultProps = {
  loadingPrimary: 'ra.page.loading',
  loadingSecondary: 'ra.message.loading',
};

const enhance = compose(
  translate
);

export default enhance(Loading);
