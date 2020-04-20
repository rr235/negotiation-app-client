import React from 'react';
import { shallow, mount } from 'enzyme';
import Tabs from './Tabs';

describe('Tabs', () => {
  let component;
  beforeAll(() => {
    component = shallow(
      <Tabs id="foo">
        <div tabname="panel1">Panel 1</div>
        <div tabname="panel2">Panel 2</div>
        <div tabname="panel3">Panel 3</div>
      </Tabs>
    );
  });

  it('should show tab items', () => {
    expect(component.find('button[role="tab"]')).toHaveLength(3);
  });

  it('should show tab panels', () => {
    expect(component.find('div[role="tabpanel"]')).toHaveLength(3);
  });

  it('should activate first tab by default', () => {
    const tabs = component.find('button[role="tab"]');
    expect(tabs.first().prop('aria-selected')).toBe(true);
    expect(tabs.at(1).prop('aria-selected')).toBe(false);
    expect(tabs.at(2).prop('aria-selected')).toBe(false);
  });

  it('should activate first tab by default', () => {
    const tabs = component.find('button[role="tab"]');
    expect(tabs.first().prop('aria-selected')).toBe(true);
    expect(tabs.at(1).prop('aria-selected')).toBe(false);
    expect(tabs.at(2).prop('aria-selected')).toBe(false);
  });

  it('should show first tab panel by default', () => {
    const panels = component.find('div[role="tabpanel"]');
    expect(panels.first().prop('hidden')).toBe(false);
    expect(panels.at(1).prop('hidden')).toBe(true);
    expect(panels.at(2).prop('hidden')).toBe(true);
  });
});

describe('Tabs - functionality', () => {
  it('should activate respective tab on click', () => {
    const component = mount(
      <Tabs id="bar">
        <div tabname="panel1">Panel 1</div>
        <div tabname="panel2">Panel 2</div>
      </Tabs>
    );
    let tabs = component.find('button[role="tab"]');
    expect(tabs.first().prop('aria-selected')).toBe(true); // initial state
    expect(tabs.at(1).prop('aria-selected')).toBe(false); // initial state

    // simulate click on second tab
    tabs.at(1).simulate('click');
    component.update();

    // get tabs with refreshed states
    tabs = component.find('button[role="tab"]');
    expect(tabs.first().prop('aria-selected')).toBe(false);
    expect(tabs.at(1).prop('aria-selected')).toBe(true);
  });

  it('should show correct tab panel on click', () => {
    const component = mount(
      <Tabs id="bar">
        <div tabname="panel1">Panel 1</div>
        <div tabname="panel2">Panel 2</div>
      </Tabs>
    );
    let panels = component.find('div[role="tabpanel"]');
    expect(panels.first().prop('hidden')).toBe(false); // initial state
    expect(panels.at(1).prop('hidden')).toBe(true); // initial state

    // simulate click on second tab
    component.find('button[role="tab"]').at(1).simulate('click');
    component.update();

    // get panels with refreshed states
    panels = component.find('div[role="tabpanel"]');
    expect(panels.first().prop('hidden')).toBe(true);
    expect(panels.at(1).prop('hidden')).toBe(false);
  });
});
