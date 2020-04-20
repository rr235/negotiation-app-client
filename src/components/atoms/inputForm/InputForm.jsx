import React from 'react';
import { string, func } from 'prop-types';
import styles from './inputForm.styles.scss';

const InputForm = ({ label, id, onClick }) => {
  return (
    <form>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input type="number" id={id} className={styles.input} />
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
