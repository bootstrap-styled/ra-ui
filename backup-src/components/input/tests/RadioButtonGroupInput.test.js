import React from 'react';
import assert from 'assert';
import { shallow, mount } from 'enzyme';

import { RadioButtonGroupInput } from '../RadioButtonGroupInput';

describe('<RadioButtonGroupInput />', () => {
  const defaultProps = {
    source: 'foo',
    meta: {},
    choices: [1, 2],
    input: { value: '2' },
    translate: x => x,
  };

  it('should use a mui RadioGroup', () => {
    const wrapper = shallow(
      <RadioButtonGroupInput {...defaultProps} label="hello" />
    );
    const RadioGroupElement = wrapper.find('FormGroup');
    assert.equal(RadioGroupElement.length, 1);
  });

  it('should use the input parameter value as the initial input value', () => {
    const wrapper = mount(
      <RadioButtonGroupInput {...defaultProps} input={{ value: '2' }} />
    );
    const RadioGroupElement = wrapper.find('Label').at(1);
    assert.equal(RadioGroupElement.prop('checked'), true);
  });

  it('should render choices as mui FormControlLabel components with a Radio control', () => {
    const wrapper = shallow(
      <RadioButtonGroupInput
        {...defaultProps}
        choices={[
          { id: 'M', name: 'Male' },
          { id: 'F', name: 'Female' },
        ]}
      />
    );
    const RadioButtonElements = wrapper.find('Input');
    const RadioButtonLabels = wrapper.find('Label');
    assert.equal(RadioButtonElements.length, 2);
    const RadioButtonElement1 = RadioButtonElements.first();
    assert.equal(RadioButtonElement1.prop('value'), 'M');
    assert.equal(RadioButtonLabels.at(0).text(), 'Male');
    const RadioButtonElement2 = RadioButtonElements.at(1);
    assert.equal(RadioButtonElement2.prop('value'), 'F');
    assert.equal(RadioButtonLabels.at(1).text(), 'Female');
  });

  it('should use optionValue as value identifier', () => {
    const wrapper = shallow(
      <RadioButtonGroupInput
        {...defaultProps}
        optionValue="foobar"
        choices={[{ foobar: 'M', name: 'Male' }]}
      />
    );
    const RadioButtonElements = wrapper.find('Input');
    const RadioButtonLabels = wrapper.find('Label');
    const RadioButtonElement1 = RadioButtonElements.first();
    assert.equal(RadioButtonElement1.prop('value'), 'M');
    assert.equal(RadioButtonLabels.text(), 'Male');
  });

  it('should use optionValue including "." as value identifier', () => {
    const wrapper = shallow(
      <RadioButtonGroupInput
        {...defaultProps}
        optionValue="foobar.id"
        choices={[{ foobar: { id: 'M' }, name: 'Male' }]}
      />
    );
    const RadioButtonElements = wrapper.find('Input');
    const RadioButtonLabels = wrapper.find('Label');
    const RadioButtonElement1 = RadioButtonElements.first();
    assert.equal(RadioButtonElement1.prop('value'), 'M');
    assert.equal(RadioButtonLabels.text(), 'Male');
  });

  it('should use optionText with a string value as text identifier', () => {
    const wrapper = shallow(
      <RadioButtonGroupInput
        {...defaultProps}
        optionText="foobar"
        choices={[{ id: 'M', foobar: 'Male' }]}
      />
    );
    const RadioButtonElements = wrapper.find('Input');
    const RadioButtonLabels = wrapper.find('Label');
    const RadioButtonElement1 = RadioButtonElements.first();
    assert.equal(RadioButtonElement1.prop('value'), 'M');
    assert.equal(RadioButtonLabels.text(), 'Male');
  });

  it('should use optionText with a string value including "." as text identifier', () => {
    const wrapper = shallow(
      <RadioButtonGroupInput
        {...defaultProps}
        optionText="foobar.name"
        choices={[{ id: 'M', foobar: { name: 'Male' } }]}
      />
    );
    const RadioButtonElements = wrapper.find('Input');
    const RadioButtonLabels = wrapper.find('Label');
    const RadioButtonElement1 = RadioButtonElements.first();
    assert.equal(RadioButtonElement1.prop('value'), 'M');
    assert.equal(RadioButtonLabels.text(), 'Male');
  });

  it('should use optionText with a function value as text identifier', () => {
    const wrapper = shallow(
      <RadioButtonGroupInput
        {...defaultProps}
        optionText={choice => choice.foobar}
        choices={[{ id: 'M', foobar: 'Male' }]}
      />
    );
    const RadioButtonElements = wrapper.find('Input');
    const RadioButtonLabels = wrapper.find('Label');
    const RadioButtonElement1 = RadioButtonElements.first();
    assert.equal(RadioButtonElement1.prop('value'), 'M');
    assert.equal(RadioButtonLabels.text(), 'Male');
  });

  it('should use optionText with an element value as text identifier', () => {
    const Foobar = ({ record }) => <span>{record.foobar}</span>;
    const wrapper = shallow(
      <RadioButtonGroupInput
        {...defaultProps}
        optionText={<Foobar />}
        choices={[{ id: 'M', foobar: 'Male' }]}
      />
    );
    const RadioButtonElements = wrapper.find('Input');
    const RadioButtonElement1 = RadioButtonElements.first();
    assert.equal(RadioButtonElement1.prop('value'), 'M');
    assert.equal(wrapper.find('Foobar').length, 1);
    assert.equal(wrapper.find('Foobar').prop('record').id, 'M');
    assert.equal(wrapper.find('Foobar').prop('record').foobar, 'Male');
  });

  it('should translate the choices by default', () => {
    const wrapper = shallow(
      <RadioButtonGroupInput
        {...defaultProps}
        choices={[
          { id: 'M', name: 'Male' },
          { id: 'F', name: 'Female' },
        ]}
        translate={x => `**${x}**`}
      />
    );
    const RadioButtonLabels = wrapper.find('Label');
    assert.equal(RadioButtonLabels.at(0).text(), '**Male**');
  });

  it('should not translate the choices if translateChoice is false', () => {
    const wrapper = shallow(
      <RadioButtonGroupInput
        {...defaultProps}
        choices={[
          { id: 'M', name: 'Male' },
          { id: 'F', name: 'Female' },
        ]}
        translate={x => `**${x}**`}
        translateChoice={false}
      />
    );
    const RadioButtonLabels = wrapper.find('Label');
    assert.equal(RadioButtonLabels.at(0).text(), 'Male');
  });

  it('should displayed helperText if prop is present in meta', () => {
    const wrapper = shallow(
      <RadioButtonGroupInput
        {...defaultProps}
        choices={[
          { id: 'M', name: 'Male' },
          { id: 'F', name: 'Female' },
        ]}
        translate={x => `**${x}**`}
        translateChoice={false}
        meta={{ helperText: 'Can i help you?' }}
      />
    );
    const helperText = wrapper.find('FormFeedback');
    assert.equal(helperText.length, 1);
    assert.equal(
      helperText.children().text(),
      'Can i help you?'
    );
  });

  describe('error message', () => {
    it('should not be displayed if field is pristine', () => {
      const wrapper = shallow(
        <RadioButtonGroupInput
          {...defaultProps}
          choices={[
            { id: 'M', name: 'Male' },
            { id: 'F', name: 'Female' },
          ]}
          translate={x => `**${x}**`}
          translateChoice={false}
          meta={{ touched: false }}
        />
      );
      const helperText = wrapper.find('FormFeedback');
      assert.equal(helperText.length, 0);
    });

    it('should not be displayed if field has been touched but is valid', () => {
      const wrapper = shallow(
        <RadioButtonGroupInput
          {...defaultProps}
          choices={[
            { id: 'M', name: 'Male' },
            { id: 'F', name: 'Female' },
          ]}
          translate={x => `**${x}**`}
          translateChoice={false}
          meta={{ touched: true, error: false }}
        />
      );
      const helperText = wrapper.find('FormFeedback');
      assert.equal(helperText.length, 0);
    });

    it('should be displayed if field has been touched and is invalid', () => {
      const wrapper = shallow(
        <RadioButtonGroupInput
          {...defaultProps}
          choices={[
            { id: 'M', name: 'Male' },
            { id: 'F', name: 'Female' },
          ]}
          translate={x => `**${x}**`}
          translateChoice={false}
          meta={{ touched: true, error: 'Required field.' }}
        />
      );
      const helperText = wrapper.find('FormFeedback');
      assert.equal(helperText.length, 1);
      assert.equal(
        helperText.children().text(),
        'Required field.'
      );
    });

    it('should display the error and help text if helperText is present', () => {
      const wrapper = shallow(
        <RadioButtonGroupInput
          {...defaultProps}
          choices={[
            { id: 'M', name: 'Male' },
            { id: 'F', name: 'Female' },
          ]}
          translate={x => `**${x}**`}
          translateChoice={false}
          meta={{
            touched: true,
            error: 'Required field.',
            helperText: 'Can i help you?',
          }}
        />
      );
      const helperText = wrapper.find('FormFeedback');
      assert.equal(helperText.length, 2);
      assert.equal(
        helperText.at(0)
          .children(0)
          .text(),
        'Required field.'
      );
      assert.equal(
        helperText.at(1)
          .children(0)
          .text(),
        'Can i help you?'
      );
    });
  });
});
