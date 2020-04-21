import React, { useState } from 'react';
import InputForm from '../../atoms/inputForm';
import Tabs from '../../atoms/tabs';
import styles from './main.styles.scss';
import { post } from '../../../helpers/http';

const ENUM_SUCCESS = 'SUCCESS';
const ENUM_FAILURE = 'FAILURE';

const Main = () => {
  const [disableEmployeeInput, setDisableEmployeeInput] = useState(false);
  const [disableEmployerInput, setDisableEmployerInput] = useState(false);
  const [result, setResult] = useState();

  const resultHandler = (message) => {
    if (message === ENUM_SUCCESS) {
      setResult('Success!');
    }

    if (message === ENUM_FAILURE) {
      setResult('Failure!');
    }
  };

  const employeeSubmitHandler = (value) => {
    if (!value) {
      return;
    }

    post('employee', { value })
      .then((res) => {
        resultHandler(res.data);
        setDisableEmployeeInput(true);
      })
      .catch((error) => setResult(error));
  };

  const employerSubmitHandler = (value) => {
    if (!value) {
      return;
    }

    post('employer', { value })
      .then((res) => {
        resultHandler(res.data);
        setDisableEmployerInput(true);
      })
      .catch((error) => setResult(error));
  };

  return (
    <div className={styles.main}>
      <Tabs id="negotiationTab">
        <InputForm
          label="Salary expected"
          id="expectedSalary"
          tabname="Employee"
          onSubmit={employeeSubmitHandler}
          isDisabled={disableEmployeeInput}
        />
        <InputForm
          label="Offered Salary"
          id="offeredSalary"
          tabname="Employer"
          onSubmit={employerSubmitHandler}
          isDisabled={disableEmployerInput}
        />
      </Tabs>
      {result || <div>{result}</div>}
    </div>
  );
};

export default Main;
