import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addEmployee, updateEmployee, deleteEmployee } from '../features/employee/employeeSlice';
import AddEmployeeModal from '../components/Admin/AddEmployeeModal ';
import Sidebar from '../components/Shared/Sidebar';
import Header from '../components/Shared/Header';

const EmployeeManagement = () => {
  const user = JSON.parse(localStorage.getItem("authUser"));
  const { employees } = useSelector(state => state.employee);
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [editData, setEditData] = useState(null);

  const handleSave = (employee) => {
    if (editData) dispatch(updateEmployee(employee));
    else dispatch(addEmployee(employee));
  };

  const handleEdit = (employee) => {
    setEditData(employee);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure?")) dispatch(deleteEmployee(id));
  };

  return (
    <div className="d-flex">
      <Sidebar role="admin" />
      <div className="flex-grow-1" style={{ marginLeft: '220px' }}>
        <Header user={user} />
        <div className="container mt-4">
          <div className="d-flex justify-content-between mb-3">
            <h4>Manage Employees</h4>
            <button className="btn btn-primary" onClick={() => { setEditData(null); setShowModal(true); }}>
              Add Employee
            </button>
          </div>
          <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Department</th>
                <th>Salary</th>
                <th>Bonus</th>
                <th>HRA</th>
                <th>DA</th>
                <th>TA</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map(emp => (
                <tr key={emp.id}>
                  <td>{emp.id}</td>
                  <td>{emp.name}</td>
                  <td>{emp.email}</td>
                  <td>{emp.role}</td>
                  <td>{emp.department}</td>
                  <td>{emp.salary}</td>
                  <td>{emp.bonous}</td>
                  <td>{emp.hra}</td>
                  <td>{emp.da}</td>
                  <td>{emp.ta}</td>
                  <td>
                    <button className="btn btn-sm btn-info me-2" onClick={() => handleEdit(emp)}>Edit</button>
                    <button className="btn btn-sm btn-danger" onClick={() => handleDelete(emp.id)}>Delete</button>
                  </td>
                </tr>
              ))}
              {employees.length === 0 && <tr><td colSpan="5">No employees found.</td></tr>}
            </tbody>
          </table>
        </div>
        <AddEmployeeModal show={showModal} onClose={() => setShowModal(false)} onSave={handleSave} editData={editData} />
      </div>
    </div>
  );
};

export default EmployeeManagement;
