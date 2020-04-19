import React from 'react';
import InputForm from '../../atoms/inputForm';
import Tabs from '../../atoms/tabs';

const Main = () => (
  <Tabs id="negotiationTab">
    <InputForm label="Salary expected" id="expectedSalary" tabName="Employee" />
    <InputForm label="Offered Salary" id="offeredSalary" tabName="Employer" />
  </Tabs>
);

export default Main;
