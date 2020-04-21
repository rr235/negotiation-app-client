import React, { useState } from 'react';
import { string, func, bool } from 'prop-types';
import styles from './inputForm.styles.scss';

const InputForm = ({ label, id, onClick, onSubmit, isDisabled }) => {
  const [input, setInput] = useState('');

  const onChangeHandler = (e) => {
    setInput(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSubmit(input);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        type="number"
        id={id}
        className={styles.input}
        value={input}
        onChange={onChangeHandler}
        disabled={isDisabled}
      />
      <button type="submit" onClick={onClick} className={styles.button}>
        Submit
      </button>
    </form>
  );
};

InputForm.propTypes = {
  label: string.isRequired,
  id: string.isRequired,
  onClick: func,
  onSubmit: func,
  isDisabled: bool,
};

InputForm.defaultProps = {
  onClick: () => {},
  onSubmit: () => {},
  isDisabled: false,
};

export default InputForm;
