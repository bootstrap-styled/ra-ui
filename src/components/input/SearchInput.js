import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import compose from 'recompose/compose';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import { withStyles } from '@material-ui/core/styles';
import { translate } from 'ra-core';

import TextInput from './TextInput';

const SearchTextInput = styled(TextInput)`
  border-bottom: 1px solid grey;
  display: flex;
  margin-top: 32px;
  flex-direction: row !important;
  &:hover {
    border-bottom: 2px solid black;
  }
  .form-control {
    border: none !important;
    &:focus {
      outline: none !important;
    }
  }
`;

const SearchInput = ({ classes, translate, ...props }) => (
    <SearchTextInput
        label={false}
        placeholder={translate('ra.action.search')}
        InputProps={{
            endAdornment: (
                <SearchIcon color="disabled" />
            ),
        }}
        {...props}
    />
);

SearchInput.propTypes = {
    classes: PropTypes.object,
    translate: PropTypes.func,
};

const enhance = compose(
    translate,
);

export default enhance(SearchInput);
