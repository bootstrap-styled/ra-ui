import assert from 'assert';
import { shallow } from 'enzyme';
import React from 'react';

import { BooleanInput } from '../BooleanInput';

describe('<BooleanInput />', () => {
  it('should render as a mui Toggle', () => {
    const wrapper = shallow(<BooleanInput source="foo" input={{}} />)
      .find('FormGroup');
    const choices = wrapper.find('Input');
    assert.equal(choices.length, 1);
    assert.equal(choices.prop('type'), 'checkbox');
  });

  it('should be checked if the value is true', () => {
    const wrapper = shallow(
      <BooleanInput source="foo" input={{ value: true }} />
    )
      .find('FormGroup');
    assert.equal(wrapper.find('Input').prop('checked'), true);
  });

  it('should not be checked if the value is false', () => {
    const wrapper = shallow(
      <BooleanInput source="foo" input={{ value: false }} />
    )
      .find('FormGroup');
    assert.equal(wrapper.find('Input').prop('checked'), false);
  });

  it('should not be checked if the value is undefined', () => {
    const wrapper = shallow(<BooleanInput source="foo" input={{}} />)
      .find('FormGroup');
    assert.equal(wrapper.find('Input').prop('checked'), false);
  });
});
