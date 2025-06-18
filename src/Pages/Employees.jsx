import React from 'react';
import Sidebar from '../components/Sidebar';
import EmployeeList from '../components/EmployeeList';

const Employees = () => {
  return (
    <div className="d-flex">
      <div className="w-25"><Sidebar /></div>
      <div className="w-75 bg-light"><EmployeeList /></div>
    </div>
  );
};

export default Employees;
