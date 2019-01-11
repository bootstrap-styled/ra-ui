/**
 * Testing example
 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import Demo from '../index';
import Wrapper from '../../../styleguide/components/Wrapper';

describe('<Demo />', () => {
  it('should render a <Demo /> tag', () => {
    const renderedComponent = shallow(
      <Wrapper>
        <Demo />
      </Wrapper>
    );
    expect(renderedComponent.length).toBe(1);
  });
  it('should toggle demo state', () => {
    const renderedComponent = mount(
      <Wrapper>
        <Demo />
      </Wrapper>
    );
    expect(renderedComponent.find('Demo').props().demo).toEqual(false);
    renderedComponent.find('Button').simulate('click');
    expect(renderedComponent.find('Demo').props().demo).toEqual(true);
  });
});
