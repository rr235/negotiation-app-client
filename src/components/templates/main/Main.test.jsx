import React from 'react';
import { shallow } from 'enzyme';
import Main from './Main';
import InputForm from '../../atoms/inputForm';

describe('Main', () => {
  it('should render correctly', () => {
    const component = shallow(<Main />);
    expect(component.find(InputForm)).toHaveLength(1);
  });
});
