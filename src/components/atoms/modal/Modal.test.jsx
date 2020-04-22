import React from 'react';
import { shallow } from 'enzyme';
import Modal from './Modal';

describe('Modal', () => {
  let component;
  const clickHandlerMock = jest.fn();
  const ModalContent = () => <div>Foobar</div>;

  beforeAll(() => {
    component = shallow(
      <Modal onClose={clickHandlerMock}>
        <ModalContent />
      </Modal>
    );
  });

  it('should contain close button', () => {
    expect(component.find('button.closeButton')).toHaveLength(1);
  });

  it('should how correct contents', () => {
    expect(component.contains(<ModalContent />)).toBe(true);
  });

  it('should call onClose callback on close', () => {
    const closeButton = component.find('button.closeButton');
    closeButton.simulate('click');
    expect(clickHandlerMock).toHaveBeenCalled();
  });
});
