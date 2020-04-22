import React from 'react';
import { mount } from 'enzyme';
import Main from './Main';
import Modal from '../../atoms/modal';
import { get, post } from '../../../helpers/http';

jest.mock('../../../helpers/http');
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

describe('Main', () => {
  describe('Employee Input', () => {
    let component;
    beforeAll(async () => {
      component = mount(<Main />);

      // mock response from post to /employee endpoint
      const data = { data: 'PENDING' };
      post.mockResolvedValue(data);

      const input = component.find('.employeeSalary input');
      const form = component.find('.employeeSalary form');

      // simulates user input
      input.props().onChange({ target: { value: 100 } });
      form.simulate('submit');

      // wait for event loop to complete
      await wait(1);

      // get input with latest states
      component.update();
    });

    it("should disable employee's input on successful submit", () => {
      const input = component.find('.employeeSalary input');
      expect(input.prop('disabled')).toBe(true);
    });

    it("should show correct employee's input ", () => {
      const input = component.find('.employeeSalary input');
      expect(input.instance().value).toEqual('100');
    });

    it('should not show modal', () => {
      expect(component.find(Modal)).toHaveLength(0);
    });
  });

  describe('Employer Input', () => {
    let component;
    beforeAll(async () => {
      component = mount(<Main />);

      // mock response from post to /employee endpoint
      const data = { data: 'PENDING' };
      post.mockResolvedValue(data);

      const input = component.find('.employerSalary input');
      const form = component.find('.employerSalary form');

      // simulates user input
      input.props().onChange({ target: { value: 100 } });
      form.simulate('submit');

      // wait for event loop to complete
      await wait(1);

      // get input with latest states
      component.update();
    });

    it("should disable employee's input on successful submit", () => {
      const input = component.find('.employerSalary input');
      expect(input.prop('disabled')).toBe(true);
    });

    it("should show correct employee's input ", () => {
      const input = component.find('.employerSalary input');
      expect(input.instance().value).toEqual('100');
    });

    it('should not show modal', () => {
      expect(component.find(Modal)).toHaveLength(0);
    });
  });

  describe("Both Employee's and Employer's input are submitted", () => {
    let component;
    beforeAll(async () => {
      component = mount(<Main />);

      // mock responses
      post
        .mockImplementationOnce(() => Promise.resolve({ data: 'PENDING' }))
        .mockImplementationOnce(() => Promise.resolve({ data: 'SUCCESS' }));
      get.mockResolvedValue({ data: { location: 'foo', temp: '20' } });

      let input = component.find('.employeeSalary input');
      let form = component.find('.employeeSalary form');

      // simulates user input
      input.props().onChange({ target: { value: 100 } });
      form.simulate('submit');

      // wait for event loop to complete
      await wait(1);

      input = component.find('.employerSalary input');
      form = component.find('.employerSalary form');

      // simulates user input
      input.props().onChange({ target: { value: 200 } });
      form.simulate('submit');

      // wait for event loop to complete
      await wait(100);

      // get input with latest states
      component.update();
    });

    it('should show modal', () => {
      expect(component.find(Modal)).toHaveLength(1);
    });
  });
});
