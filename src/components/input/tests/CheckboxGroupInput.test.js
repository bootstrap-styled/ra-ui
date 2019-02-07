import React from 'react';
import assert from 'assert';
import { shallow } from 'enzyme';
import { CheckboxGroupInput } from '../CheckboxGroupInput';

describe('<CheckboxGroupInput />', () => {
  const defaultProps = {
    source: 'foo',
    meta: {},
    choices: [{ id: 1, name: 'John doe' }],
    input: {
      onChange: () => {
      },
      value: [],
    },
    translate: x => x,
    muiTheme: {
      baseTheme: {},
      textField: {},
      prepareStyles: () => {
      },
    },
  };

  it('should use a mui Checkbox', () => {
    const wrapper = shallow(<CheckboxGroupInput {...defaultProps} />);
    const CheckboxElement = wrapper
      .find('FormGroup')
      .find('Label');
    assert.equal(CheckboxElement.length, 1);
  });

  it('should use the input parameter value as the initial input value', () => {
    const wrapper = shallow(
      <CheckboxGroupInput
        {...defaultProps}
        input={{
          value: [1],
          onChange: () => {},
        }}
      />
    );
    const CheckboxElement = wrapper
      .find('FormGroup')
      .find('Label');
    assert.equal(CheckboxElement.prop('check'), true);
  });

  it('should render choices as mui Checkbox components', () => {
    const wrapper = shallow(
      <CheckboxGroupInput
        {...defaultProps}
        choices={[
          { id: 'ang', name: 'Angular' },
          { id: 'rct', name: 'React' },
        ]}
      />
    );
    const CheckboxElements = wrapper.find('Input');
    const CheckboxLabels = wrapper.find('Label');
    assert.equal(CheckboxElements.length, 2);
    const CheckboxElement1 = CheckboxElements.first();
    assert.equal(CheckboxElement1.prop('value'), 'ang');
    assert.equal(CheckboxLabels.at(0).text(), 'Angular');
    const CheckboxElement2 = CheckboxElements.at(1);
    assert.equal(CheckboxElement2.prop('value'), 'rct');
    assert.equal(CheckboxLabels.at(1).text(), 'React');
  });

  it('should use optionValue as value identifier', () => {
    const wrapper = shallow(
      <CheckboxGroupInput
        {...defaultProps}
        optionValue="foobar"
        choices={[{ foobar: 'foo', name: 'Bar' }]}
      />
    );
    const CheckboxElements = wrapper.find('Input');
    const CheckboxLabel = wrapper.find('Label');
    const CheckboxElement1 = CheckboxElements.first();
    assert.equal(CheckboxElement1.prop('value'), 'foo');
    assert.equal(CheckboxLabel.text(), 'Bar');
  });

  it('should use optionValue including "." as value identifier', () => {
    const wrapper = shallow(
      <CheckboxGroupInput
        {...defaultProps}
        optionValue="foobar.id"
        choices={[{ foobar: { id: 'foo' }, name: 'Bar' }]}
      />
    );
    const CheckboxElements = wrapper.find('Input');
    const CheckboxLabel = wrapper.find('Label');
    const CheckboxElement1 = CheckboxElements.first();
    assert.equal(CheckboxElement1.prop('value'), 'foo');
    assert.equal(CheckboxLabel.text(), 'Bar');
  });

  it('should use optionText with a string value as text identifier', () => {
    const wrapper = shallow(
      <CheckboxGroupInput
        {...defaultProps}
        optionText="foobar"
        choices={[{ id: 'foo', foobar: 'Bar' }]}
      />
    );
    const CheckboxElements = wrapper.find('Input');
    const CheckboxLabel = wrapper.find('Label');
    const CheckboxElement1 = CheckboxElements.first();
    assert.equal(CheckboxElement1.prop('value'), 'foo');
    assert.equal(CheckboxLabel.text(), 'Bar');
  });

  it('should use optionText with a string value including "." as text identifier', () => {
    const wrapper = shallow(
      <CheckboxGroupInput
        {...defaultProps}
        optionText="foobar.name"
        choices={[{ id: 'foo', foobar: { name: 'Bar' } }]}
      />
    );
    const CheckboxElements = wrapper.find('Input');
    const CheckboxLabel = wrapper.find('Label');
    const CheckboxElement1 = CheckboxElements.first();
    assert.equal(CheckboxElement1.prop('value'), 'foo');
    assert.equal(CheckboxLabel.text(), 'Bar');
  });

  it('should use optionText with a function value as text identifier', () => {
    const wrapper = shallow(
      <CheckboxGroupInput
        {...defaultProps}
        optionText={choice => choice.foobar}
        choices={[{ id: 'foo', foobar: 'Bar' }]}
      />
    );
    const CheckboxElements = wrapper.find('Input');
    const CheckboxLabel = wrapper.find('Label');
    const CheckboxElement1 = CheckboxElements.first();
    assert.equal(CheckboxElement1.prop('value'), 'foo');
    assert.equal(CheckboxLabel.text(), 'Bar');
  });

  it('should use optionText with an element value as text identifier', () => {
    const Foobar = ({ record }) => <span>{record.foobar}</span>;
    const wrapper = shallow(
      <CheckboxGroupInput
        {...defaultProps}
        optionText={<Foobar />}
        choices={[{ id: 'foo', foobar: 'Bar' }]}
      />
    );
    const CheckboxElements = wrapper.find('Input');
    assert.equal(CheckboxElements.prop('value'), 'foo');
    // assert.equal(CheckboxLabel,
    //   <Foobar record={{ id: 'foo', foobar: 'Bar' }} />
    // );
  });

  it('should translate the choices by default', () => {
    const wrapper = shallow(
      <CheckboxGroupInput
        {...defaultProps}
        choices={[
          { id: 'M', name: 'Male' },
          { id: 'F', name: 'Female' },
        ]}
        translate={x => `**${x}**`}
      />
    );
    const CheckboxLabel = wrapper.find('Label');
    assert.equal(CheckboxLabel.at(0).text(), '**Male**');
  });

  it('should not translate the choices if translateChoice is false', () => {
    const wrapper = shallow(
      <CheckboxGroupInput
        {...defaultProps}
        choices={[
          { id: 'M', name: 'Male' },
          { id: 'F', name: 'Female' },
        ]}
        translate={x => `**${x}**`}
        translateChoice={false}
      />
    );
    const CheckboxLabel = wrapper.find('Label');
    assert.equal(CheckboxLabel.at(0).text(), 'Male');
  });

  it('should displayed helperText if prop is present in meta', () => {
    const wrapper = shallow(
      <CheckboxGroupInput
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
        <CheckboxGroupInput
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
        <CheckboxGroupInput
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
        <CheckboxGroupInput
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
        <CheckboxGroupInput
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
