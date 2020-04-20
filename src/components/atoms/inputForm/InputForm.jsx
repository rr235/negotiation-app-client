import React, { useState } from 'react';
import { string, func } from 'prop-types';
import styles from './inputForm.styles.scss';

const InputForm = ({ label, id, onClick }) => {
  const [input, setInput] = useState('');

  const onChangeHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <form>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        type="number"
        id={id}
        className={styles.input}
        value={input}
        onChange={onChangeHandler}
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
};

InputForm.defaultProps = {
  onClick: () => {},
};

export default InputForm;
