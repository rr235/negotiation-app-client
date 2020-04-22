import React, { useState } from 'react';
import InputForm from '../../atoms/inputForm';
import Tabs from '../../atoms/tabs';
import Modal from '../../atoms/modal';
import styles from './main.styles.scss';
import { post, get } from '../../../helpers/http';

const ENUM_SUCCESS = 'SUCCESS';
const ENUM_FAILURE = 'FAILURE';
const ENUM_PENDING = 'PENDING';

const Main = () => {
  const [disableEmployeeInput, setDisableEmployeeInput] = useState(false);
  const [disableEmployerInput, setDisableEmployerInput] = useState(false);
  const [result, setResult] = useState();
  const [weatherMessage, setWeatherMessage] = useState();

  const getWeather = () => {
    get('weather', { location: 'Berlin' }).then((res) => {
      setWeatherMessage(
        `Temperature in ${res.data.location} is ${res.data.temp} deg Celsius.`
      );
    });
  };

  const resultHandler = (message) => {
    if (message === ENUM_PENDING) {
      return;
    }

    if (message === ENUM_SUCCESS) {
      setResult('Success!');
    }

    if (message === ENUM_FAILURE) {
      setResult('Failure!');
    }

    getWeather();
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

  const closeHandler = () => {
    setResult(null);
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
          className={styles.employeeSalary}
        />
        <InputForm
          label="Offered Salary"
          id="offeredSalary"
          tabname="Employer"
          onSubmit={employerSubmitHandler}
          isDisabled={disableEmployerInput}
          className={styles.employerSalary}
        />
      </Tabs>
      {result && (
        <Modal onClose={closeHandler}>
          <div className={styles.result}>{result}</div>
          <div className={styles.info}>{weatherMessage}</div>
        </Modal>
      )}
    </div>
  );
};

export default Main;
