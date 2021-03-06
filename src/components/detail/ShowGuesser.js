import React, { Component } from 'react';
import inflection from 'inflection';
import {
  ShowController,
  InferredElement,
  getElementsFromRecords,
} from 'ra-core';
import { ShowView } from './Show';
import showFieldTypes from './showFieldTypes';

export class ShowViewGuesser extends Component {
  state = {
    inferredChild: null,
  };

  componentDidUpdate() {
    const { record, resource } = this.props;
    if (record && !this.state.inferredChild) {
      const inferredElements = getElementsFromRecords(
        [record],
        showFieldTypes
      );
      const inferredChild = new InferredElement(
        showFieldTypes.show,
        null,
        inferredElements
      );

      process.env.NODE_ENV !== 'production' // eslint-disable-line
      // eslint-disable-next-line no-console
      && console.log(
        `Guessed Show:

export const ${inflection.capitalize(
    inflection.singularize(resource)
  )}Show = props => (
    <Show {...props}>
${inferredChild.getRepresentation()}
    </Show>
);`
      );
      this.setState({ inferredChild: inferredChild.getElement() }); // eslint-disable-line
    }
  }

  render() {
    return <ShowView {...this.props}>{this.state.inferredChild}</ShowView>;
  }
}

ShowViewGuesser.propTypes = ShowView.propTypes;

const ShowGuesser = props => (
  <ShowController {...props}>
    {controllerProps => <ShowViewGuesser {...props} {...controllerProps} />}
  </ShowController>
);

export default ShowGuesser;
