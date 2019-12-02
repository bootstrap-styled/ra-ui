import React from 'react';
import assert from 'assert';
import { mount } from 'enzyme';
import UrlField from '../UrlField';

describe('<UrlField />', () => {
  it('should display a link', () => {
    const record = { website: 'https://en.wikipedia.org/wiki/HAL_9000' };
    const wrapper = mount(<UrlField record={record} source="website" />);
    assert.equal(
      wrapper.find('A').prop('href'),
      'https://en.wikipedia.org/wiki/HAL_9000'
    );
    assert.equal(
      wrapper.text(),
      'https://en.wikipedia.org/wiki/HAL_9000'
    );
  });

  it('should handle deep fields', () => {
    const record = {
      foo: { website: 'https://en.wikipedia.org/wiki/HAL_9000' },
    };
    const wrapper = mount(
      <UrlField record={record} source="foo.website" />
    );
    assert.equal(
      wrapper.find('A').prop('href'),
      'https://en.wikipedia.org/wiki/HAL_9000'
    );
    assert.equal(
      wrapper.text(),
      'https://en.wikipedia.org/wiki/HAL_9000'
    );
  });
});
