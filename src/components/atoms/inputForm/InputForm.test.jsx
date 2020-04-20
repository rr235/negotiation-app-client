import React from 'react';
import { shallow } from 'enzyme';
import InputForm from './InputForm';

describe('InputForm', () => {
  let component;
  beforeAll(() => {
    component = shallow(<InputForm label="foo" id="bar" />);
  });

  it('should contain label', () => {
    expect(component.find('label')).toHaveLength(1);
  });

  it('should contain input field', () => {
    expect(component.find('input[type="number"]')).toHaveLength(1);
  });

  it('should contain submit button', () => {
    expect(component.find('button[type="submit"]')).toHaveLength(1);
  });

  it('should show correct label', () => {
    expect(component.find('label').text()).toBe('foo');
  });
});
