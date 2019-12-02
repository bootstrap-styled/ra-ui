import React from 'react';
import assert from 'assert';
import { render } from 'enzyme';
import { MemoryRouter as Router } from 'react-router';
import Link from '../Link';

describe('<Link />', () => {
  it('should display link to /test', () => {
    const wrapper = render(<Router><Link to="/test" /></Router>);
    assert.equal(
      wrapper.prop('href'),
      '/test'
    );
  });

  it('should have .router-link classname', () => {
    const wrapper = render(<Router><Link to="/test" /></Router>);
    assert.equal(
      wrapper.prop('class').split(' ').find(e => e === 'router-link'),
      'router-link'
    );
  });
});
