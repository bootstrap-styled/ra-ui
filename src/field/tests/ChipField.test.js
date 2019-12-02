import React from 'react';
import expect from 'expect';
import { render, cleanup } from '@testing-library/react';
import { ChipField } from '../ChipField';

describe('<ChipField />', () => {
  afterEach(cleanup);

  it('should display the record value added as source', () => {
    const { getByText } = render(
      <ChipField
        className="className"
        classes={{}}
        source="name"
        record={{ name: 'foo' }}
      />
    );
    expect(getByText('foo')).not.toBeNull();
  });

  it('should not display any label added as props', () => {
    const { getByText } = render(
      <ChipField
        className="className"
        classes={{}}
        source="name"
        record={{ name: 'foo' }}
        label="bar"
      />
    );
    expect(getByText('foo')).not.toBeNull();
  });
});
