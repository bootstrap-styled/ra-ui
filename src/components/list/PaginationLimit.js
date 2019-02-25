import React from 'react';
import PropTypes from 'prop-types';
import pure from 'recompose/pure';
import { P } from '@bootstrap-styled/v4';
import compose from 'recompose/compose';
import { translate } from 'ra-core';
import CardContent from '../layout/CardContent';

const PaginationLimit = ({ translate }) => (
  <CardContent>
    <P>
      {translate('ra.navigation.no_results')}
    </P>
  </CardContent>
);

PaginationLimit.propTypes = {
  translate: PropTypes.func.isRequired,
};

const enhance = compose(
  pure,
  translate
);

export default enhance(PaginationLimit);
