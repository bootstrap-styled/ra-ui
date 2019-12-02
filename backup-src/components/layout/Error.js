import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import Button from '@bootstrap-styled/v4/lib/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ErrorIcon from '@material-ui/icons/Report';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { translate } from 'ra-core';
import Title from './Title';

// const styles = theme => ({
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     [theme.breakpoints.down('sm')]: {
//       padding: '1em',
//     },
//     fontFamily: 'Roboto, sans-serif',
//     opacity: 0.5,
//   },
//   title: {
//     display: 'flex',
//     alignItems: 'center',
//   },
//   icon: {
//     width: '2em',
//     height: '2em',
//     marginRight: '0.5em',
//   },
//   panel: {
//     marginTop: '1em',
//   },
//   panelDetails: {
//     whiteSpace: 'pre-wrap',
//   },
//   toolbar: {
//     marginTop: '2em',
//   },
// });

function goBack() {
  history.go(-1); // eslint-disable-line no-restricted-globals
}

const Error = ({
  error,
  errorInfo,
  className,
  title,
  translate,
  ...rest
}) => (
  <Fragment>
    <Title defaultTitle={title} />
    <div className={className} {...rest}>
      <h1 role="alert">
        <ErrorIcon />
        {translate('ra.page.error')}
      </h1>
      <div>{translate('ra.message.error')}</div>
      {process.env.NODE_ENV !== 'production' && (
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            {translate('ra.message.details')}
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div>
              <h2>{translate(error.toString())}</h2>
              {errorInfo.componentStack}
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      )}
      <div>
        <Button onClick={goBack}>
          {translate('ra.action.back')}
        </Button>
      </div>
    </div>
  </Fragment>
);

Error.propTypes = {
  className: PropTypes.string,
  error: PropTypes.object.isRequired,
  errorInfo: PropTypes.object,
  translate: PropTypes.func.isRequired,
  title: PropTypes.string,
};

const enhance = compose(
  translate
);

export default enhance(Error);
