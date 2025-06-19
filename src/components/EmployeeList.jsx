import React, { useState } from 'react';
import AddEmployeeModal from './AddEmployeeModal';
import EmployeeCard from './EmployeeCard';

const EmployeeList = () => {
  const [showModal, setShowModal] = useState(false);
  const [employees, setEmployees] = useState([]);

  const handleAddEmployee = () => {
    // Handle employee data insert
    const newEmp = {
      name: "New Employee",
      role: "Developer",
      description: "Vestibulum ante ipsum primis in faucibus.",
      image: "https://via.placeholder.com/60"
    };
    setEmployees([...employees, newEmp]);
    setShowModal(false);
  };

  return (
    <div className="p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3>Employee</h3>
        <div>
          <button className="btn btn-primary me-2" onClick={() => setShowModal(true)}>Add Employee</button>
          <button className="btn btn-secondary">Status</button>
        </div>
      </div>

      {employees.map((emp, index) => (
        <EmployeeCard key={index} emp={emp} />
      ))}

      <AddEmployeeModal show={showModal} onClose={() => setShowModal(false)} onCreate={handleAddEmployee} />
    </div>
  );
};

export default EmployeeList;