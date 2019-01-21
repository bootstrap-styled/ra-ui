import React, { Component } from 'react';
import PropTypes from 'prop-types';
import pure from 'recompose/pure';
import styled from 'styled-components';

import CardFooter from '@bootstrap-styled/v4/lib/Cards/CardFooter';
import compose from 'recompose/compose';
import { translate, sanitizeListRestProps } from 'ra-core';

import PaginationActions from './PaginationActions';
import PaginationLimit from './PaginationLimit';
import Responsive from '../layout/Responsive';

const PaginationText = styled.span`
  color: rgba(0, 0, 0, 0.54);
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.375em;
  flex-shrink: 0;
  margin: 0;
  display: block;
`;

export class Pagination extends Component {
  componentDidUpdate() {
    if (this.props.page < 1 || isNaN(this.props.page)) { // eslint-disable-line no-restricted-globals
      this.props.setPage(1);
    }
  }

  getNbPages = () => Math.ceil(this.props.total / this.props.perPage) || 1;

  /**
   * Warning: material-ui's page is 0-based
   */
  handlePageChange = (event, page) => {
    event && event.stopPropagation(); // eslint-disable-line no-unused-expressions
    if (page < 0 || page > this.getNbPages() - 1) {
      throw new Error(
        this.props.translate('ra.navigation.page_out_of_boundaries', {
          page: page + 1,
        })
      );
    }
    this.props.setPage(page + 1);
  };

  handlePerPageChange = (event) => {
    this.props.setPerPage(event.target.value);
  };

  render() {
    const {
      isLoading,
      page,
      perPage,
      rowsPerPageOptions,
      total,
      translate,
      ...rest
    } = this.props;

    if (!isLoading && total === 0) {
      return <PaginationLimit />;
    }
    const offsetEnd = Math.min(page * perPage, total);
    const offsetBegin = Math.min((page - 1) * perPage + 1, offsetEnd);

    return (
      <Responsive
        small={(
          <CardFooter className="d-flex align-items-center justify-content-end" {...sanitizeListRestProps(rest)}>
            <PaginationText className="displayed-records p-3">
              {translate('ra.navigation.page_range_info', {
                offsetBegin,
                offsetEnd,
                total,
              })}
            </PaginationText>
            <PaginationActions
              count={total}
              rowsPerPage={perPage}
              page={page - 1}
              onChangePage={this.handlePageChange}
            />
          </CardFooter>
        )}
        medium={(
          <CardFooter className="d-flex align-items-center justify-content-end" {...sanitizeListRestProps(rest)}>
            <PaginationText className="displayed-records">
              {translate('ra.navigation.page_range_info', {
                offsetBegin,
                offsetEnd,
                total,
              })}
            </PaginationText>
            <PaginationActions
              count={total}
              rowsPerPage={perPage}
              page={page - 1}
              onChangePage={this.handlePageChange}
            />
          </CardFooter>
        )}
      />
    );
  }
}

Pagination.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  ids: PropTypes.array,
  isLoading: PropTypes.bool,
  page: PropTypes.number,
  perPage: PropTypes.number,
  rowsPerPageOptions: PropTypes.arrayOf(PropTypes.number),
  setPage: PropTypes.func,
  setPerPage: PropTypes.func,
  translate: PropTypes.func.isRequired,
  total: PropTypes.number,
};

Pagination.defaultProps = {
  rowsPerPageOptions: [5, 10, 25],
};

const enhance = compose(
  pure,
  translate
);

export default enhance(Pagination);
