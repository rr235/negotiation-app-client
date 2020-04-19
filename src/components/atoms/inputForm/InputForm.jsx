import React from 'react';
import { string, func } from 'prop-types';

const InputForm = ({ label, id, onClick }) => (
  <form>
    <label htmlFor={id}>{label}</label>
    <input type="number" id={id} />
    <button type="submit" onClick={onClick}>
      Submit
    </button>
  </form>
);

InputForm.propTypes = {
  label: string.isRequired,
  id: string.isRequired,
  onClick: func,
};

InputForm.defaultProps = {
  onClick: () => {},
};

export default InputForm;
