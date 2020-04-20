import React from 'react';
import InputForm from '../../atoms/inputForm';
import Tabs from '../../atoms/tabs';
import styles from './main.styles.scss';

const Main = () => (
  <div className={styles.main}>
    <Tabs id="negotiationTab">
      <InputForm
        label="Salary expected"
        id="expectedSalary"
        tabname="Employee"
      />
      <InputForm label="Offered Salary" id="offeredSalary" tabname="Employer" />
    </Tabs>
  </div>
);

export default Main;
