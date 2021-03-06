import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import HotTub from '@material-ui/icons/HotTub';
import History from '@material-ui/icons/History';
import compose from 'recompose/compose';

import { translate } from 'ra-core';
import Title from './Title';

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
//   toolbar: {
//     textAlign: 'center',
//     marginTop: '2em',
//   },
// });

function goBack() {
  history.go(-1); // eslint-disable-line no-restricted-globals
}

const NotFound = ({
  className,
  translate,
  title,
  ...rest
}) => (
  <div className={className} {...rest}>
    <Title defaultTitle={title} />
    <div>
      <HotTub />
      <h1>{translate('ra.page.not_found')}</h1>
      <div>
        {translate('ra.message.not_found')}
        .
      </div>
    </div>
    <div>
      <Button variant="raised" icon={<History />} onClick={goBack}>
        {translate('ra.action.back')}
      </Button>
    </div>
  </div>
);

NotFound.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  translate: PropTypes.func.isRequired,
};

const enhance = compose(
  translate
);

export default enhance(NotFound);
