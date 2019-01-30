import assert from 'assert';
import { shallow } from 'enzyme';
import React from 'react';

import { DateInput } from '../DateInput';

describe('<DateInput />', () => {
  it('should render a localized <DatePicker />', () => {
    const input = { value: null };
    const wrapper = shallow(
      <DateInput source="foo" meta={{}} input={input} />
    );
    const datePicker = wrapper.find('Input');
    assert.equal(datePicker.length, 1);
    assert.equal(datePicker.first().prop('type'), 'date');
  });

  it('should call props `input.onChange` method when changed', () => {
    const input = {
      value: null,
      onChange: jest.fn(),
      onBlur: () => {},
    };
    const wrapper = shallow(
      <DateInput source="foo" input={input} meta={{}} />
    )
      .shallow()
      .find('Input');
    wrapper.simulate('change', {
      target: { value: '2010-01-04' },
    });
    assert.equal(input.onChange.mock.calls[0][0].target.value, '2010-01-04');
  });

  describe('error message', () => {
    it('should not be displayed if field is pristine', () => {
      const wrapper = shallow(
        <DateInput
          source="foo"
          input={{ value: null }}
          meta={{ touched: false }}
        />
      );
      const DatePicker = wrapper.find('Input');
      assert.equal(DatePicker.prop('error'), '');
    });

    it('should not be displayed if field has been touched but is valid', () => {
      const wrapper = shallow(
        <DateInput
          source="foo"
          input={{ value: null }}
          meta={{ touched: true, error: false }}
        />
      );
      const DatePicker = wrapper.find('Input');
      assert.equal(DatePicker.prop('error'), '');
    });

    it('should be displayed if field has been touched and is invalid', () => {
      const wrapper = shallow(
        <DateInput
          source="foo"
          input={{ value: null }}
          meta={{ touched: true, error: 'Required field.' }}
        />
      );
      const DatePicker = wrapper.find('Input');
      assert.equal(DatePicker.prop('error'), 'Required field.');
    });
  });
});
