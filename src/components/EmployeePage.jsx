import React, { useEffect, useState } from 'react';
import AddEmployeeModal from './AddEmployeeModal';

const EmployeePage = () => {
  const [employees, setEmployees] = useState(() => {
    const saved = localStorage.getItem("employees");
    return saved ? JSON.parse(saved) : [];
  });

  const [showModal, setShowModal] = useState(false);
  const [viewEmployee, setViewEmployee] = useState(null);

const handleAdd = (empData) => {
  let updated;

  if (empData.hasOwnProperty('index')) {
    // It's an edit
    updated = [...employees];
    updated[empData.index] = { ...empData };
    delete updated[empData.index].index; // remove index from stored data
  } else {
    // It's a new employee
    updated = [...employees, empData];
  }

  setEmployees(updated);
  localStorage.setItem("employees", JSON.stringify(updated));
};
  const handleDelete = (index) => {
    const updated = employees.filter((_, i) => i !== index);
    setEmployees(updated);
    localStorage.setItem("employees", JSON.stringify(updated));
  };

const handleEdit = (index) => {
  const emp = { ...employees[index], index };
  setShowModal(true);
  setViewEmployee(emp);
};

  const handleProfileView = (employee) => {
    setViewEmployee(employee);
  };

  const closeModal = () => {
    setShowModal(false);
    setViewEmployee(null);
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between mb-3">
        <h3>Employee</h3>
        <button className="btn btn-primary" onClick={() => setShowModal(true)}>Add Employee</button>
      </div>

      {employees.map((emp, i) => (
        <div className="card mb-3 p-3" key={i}>
          <div className="d-flex align-items-center">
            <img
              src={emp.image || 'https://via.placeholder.com/50'}
              alt="profile"
              className="rounded-circle me-3"
              width="50"
              height="50"
            />
            <div className="flex-grow-1">
              <h5>{emp.name || "New Employee"}</h5>
              <span className="badge bg-secondary">{emp.role || "Developer"}</span>
              <p>{emp.bio || "Vestibulum ante ipsum primis in faucibus."}</p>
            </div>
            <div>
              <button className="btn btn-sm btn-warning me-2" onClick={() => handleEdit(i)}>Edit</button>
              <button className="btn btn-sm btn-danger me-2" onClick={() => handleDelete(i)}>Delete</button>
              <button className="btn btn-sm btn-outline-primary" onClick={() => handleProfileView(emp)}>Profile</button>
            </div>
          </div>
        </div>
      ))}

      {showModal && (
        <AddEmployeeModal
          show={showModal}
          onClose={closeModal}
          onCreate={handleAdd}
          initialData={viewEmployee}
        />
      )}

      {viewEmployee && !showModal && (
        <div className="modal-overlay">
          <div className="modal-content p-4">
            <h4>{viewEmployee.name}</h4>
            <img src={viewEmployee.image || "https://via.placeholder.com/100"} width="100" height="100" />
            <p><strong>Email:</strong> {viewEmployee.email}</p>
            <p><strong>Phone:</strong> {viewEmployee.phone}</p>
            <p><strong>Department:</strong> {viewEmployee.department}</p>
            <p><strong>Role:</strong> {viewEmployee.role}</p>
            <button className="btn btn-secondary" onClick={() => setViewEmployee(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeePage;