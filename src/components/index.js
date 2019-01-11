import React from 'react';
import PropTypes from 'prop-types';
import Button from '@bootstrap-styled/v4/lib/Button';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectDemo } from './selectors';
import { onToggleDemo as onToggleDemoAction } from './actions';

/**
 * Demo component contain a RW operation on the store and disable the status
 */
class Demo extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    /** A boolean value to toggle for the demo of the redux store */
    demo: PropTypes.bool.isRequired,
    /** A dispatch function to be called for toggling the demo */
    onToggleDemo: PropTypes.func.isRequired,
  };

  render() {
    const { onToggleDemo, demo } = this.props;
    return (
      <Button onClick={onToggleDemo}>
        Toggle status
        {demo.toString()}
      </Button>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  demo: makeSelectDemo(),
});

const mapDispatchToProps = (dispatch) => ({
  onToggleDemo: () => dispatch(onToggleDemoAction()),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Demo);
