import React from 'react';
import assert from 'assert';
import { mount } from 'enzyme';
import EmailField from '../EmailField';

describe('<EmailField />', () => {
  it('should render as an email link', () => {
    const record = { foo: 'foo@bar.com' };
    const wrapper = mount(<EmailField record={record} source="foo" />);
    assert.equal(
      wrapper.find('A').text(),
      'foo@bar.com'
    );
    assert.equal(
      wrapper.find('A').prop('href'),
      'mailto:foo@bar.com'
    );
  });

  it('should handle deep fields', () => {
    const record = { foo: { bar: 'foo@bar.com' } };
    const wrapper = mount(
      <EmailField record={record} source="foo.bar" />
    );
    assert.equal(
      wrapper.text(),
      'foo@bar.com'
    );
    assert.equal(
      wrapper.find('A').prop('href'),
      'mailto:foo@bar.com'
    );
  });

  it('should display an email (mailto) link', () => {
    const record = { email: 'hal@kubrickcorp.com' };
    const wrapper = mount(<EmailField record={record} source="email" />);
    assert.equal(
      wrapper.text(),
      'hal@kubrickcorp.com'
    );
    assert.equal(
      wrapper.find('A').prop('href'),
      'mailto:hal@kubrickcorp.com'
    );
  });

  it('should use custom className', () => assert.deepEqual(
    mount(
      <EmailField
        record={{ foo: true }}
        source="email"
        className="foo"
      />
    ).prop('className'),
    'foo'
  ));
});
