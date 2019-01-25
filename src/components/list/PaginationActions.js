import React, { Component } from 'react';
import PropTypes from 'prop-types';
import pure from 'recompose/pure';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import PaginationBs from '@bootstrap-styled/v4/lib/Pagination';
import PaginationItem from '@bootstrap-styled/v4/lib/Pagination/PaginationItem';
import PaginationLink from '@bootstrap-styled/v4/lib/Pagination/PaginationLink';
import compose from 'recompose/compose';
import { translate } from 'ra-core';

export class PaginationActions extends Component {
  getNbPages = () => Math.ceil(this.props.count / this.props.rowsPerPage) || 1;

  prevPage = event => {
    if (this.props.page === 0) {
      throw new Error(
        this.props.translate('ra.navigation.page_out_from_begin')
      );
    }
    this.props.onChangePage(event, this.props.page - 1);
  };

  nextPage = event => {
    if (this.props.page > this.getNbPages() - 1) {
      throw new Error(
        this.props.translate('ra.navigation.page_out_from_end')
      );
    }
    this.props.onChangePage(event, this.props.page + 1);
  };

  gotoPage = event => {
    const page = parseInt(event.currentTarget.dataset.page, 10);
    if (page < 0 || page > this.getNbPages() - 1) {
      throw new Error(
        this.props.translate('ra.navigation.page_out_of_boundaries', {
          page: page + 1,
        })
      );
    }
    this.props.onChangePage(event, page);
  };

  /**
   * Warning: material-ui's page is 0-based
   */
  range() {
    const { page, rowsPerPage, count } = this.props;
    const nbPages = Math.ceil(count / rowsPerPage) || 1;
    if (isNaN(page) || nbPages === 1) { // eslint-disable-line no-restricted-globals
      return [];
    }
    const input = [];
    // display page links around the current page
    if (page > 1) {
      input.push(1);
    }
    if (page === 3) {
      input.push(2);
    }
    if (page > 3) {
      input.push('.');
    }
    if (page > 0) {
      input.push(page);
    }
    input.push(page + 1);
    if (page < nbPages - 1) {
      input.push(page + 2);
    }
    if (page === nbPages - 4) {
      input.push(nbPages - 1);
    }
    if (page < nbPages - 4) {
      input.push('.');
    }
    if (page < nbPages - 2) {
      input.push(nbPages);
    }

    return input;
  }

  renderPageNums() {
    return this.range().map(
      pageNum => pageNum === '.' ? (
        <PaginationItem key={`hyphen_${pageNum}`}>
          <PaginationLink
            className="page-number my-1 cursor-default"
          >
              &hellip;
          </PaginationLink>
        </PaginationItem>
      ) : (
        <PaginationItem key={pageNum}>
          <PaginationLink
            className="page-number my-1"
            data-page={pageNum}
            onClick={this.gotoPage}
            key={pageNum}
          >
            {pageNum}
          </PaginationLink>
        </PaginationItem>
      )
    );
  }

  render() {
    const { page, translate } = this.props;

    const nbPages = this.getNbPages();
    if (nbPages === 1) return <div />;
    return (
      <PaginationBs className="m-0 ml-3 cursor-pointer">
        {page > 0 && (
          <PaginationItem key="prev">
            <PaginationLink
              className="previous-page my-1"
              color="primary"
              onClick={this.prevPage}
              previous
            >
              <ChevronLeft />
              {translate('ra.navigation.prev')}
            </PaginationLink>
          </PaginationItem>
        )}
        {this.renderPageNums()}
        {page !== nbPages - 1 && (
          <PaginationItem key="next">
            <PaginationLink
              className="next my-1"
              color="primary"
              onClick={this.nextPage}
              next
            >
              <ChevronRight />
              {translate('ra.navigation.next')}
            </PaginationLink>
          </PaginationItem>
        )}
      </PaginationBs>
    );
  }
}

/**
 * PaginationActions propTypes are copied over from material-ui’s
 * TablePaginationActions propTypes. See
 * https://github.com/mui-org/material-ui/blob/869692ecf3812bc4577ed4dde81a9911c5949695/packages/material-ui/src/TablePaginationActions/TablePaginationActions.js#L53-L85
 * for reference.
 */
PaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const enhance = compose(
  pure,
  translate,
);

export default enhance(PaginationActions);
