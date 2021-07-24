import React from 'react';
import { mount } from 'enzyme';
import Button from './Button';

// eslint-disable-next-line no-undef
describe('Button', () => {
  const wrap = mount(<Button text="Button" />);

  // eslint-disable-next-line no-undef
  it('should render without throwing an error', () => {
    // eslint-disable-next-line no-undef
    expect(wrap);
    // eslint-disable-next-line no-undef
    expect(wrap.find('button').text()).toBe('Button');
  });
});