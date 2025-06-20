import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/Shared/Sidebar';
import Header from '../../components/Shared/Header';
import { useSelector } from 'react-redux';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const PayrollPage = () => {
  const user = JSON.parse(localStorage.getItem("authUser"));
  const { employees } = useSelector((state) => state.employee);
  const [month, setMonth] = useState(new Date().toISOString().slice(0, 7));
  const [salaries, setSalaries] = useState({});

  useEffect(() => {
    // Initialize salaries
    const stored = JSON.parse(localStorage.getItem("salaries")) || {};
    setSalaries(stored);
  }, []);

  const handleSalaryChange = (id, value) => {
    setSalaries((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleGenerate = () => {
    localStorage.setItem("salaries", JSON.stringify(salaries));
    alert("Payroll generated and saved!");
  };

  const handleDownloadPDF = (employee) => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Salary Slip", 14, 22);
    doc.setFontSize(12);
    doc.text(`Month: ${month}`, 14, 32);
    doc.autoTable({
      head: [["Field", "Details"]],
      body: [
        ["Employee Name", employee.name],
        ["Email", employee.email],
        ["Role", employee.role],
        ["Salary", salaries[employee.id] || 'N/A'],
      ],
    });
    doc.save(`${employee.name}_Payslip_${month}.pdf`);
  };

  return (
    <div className="d-flex">
      <Sidebar role="admin" />
      <div className="flex-grow-1" style={{ marginLeft: '220px' }}>
        <Header user={user} />
        <div className="container mt-4">
          <h4>💰 Payroll Management</h4>

          <div className="d-flex justify-content-between align-items-center mb-3">
            <input
              type="month"
              className="form-control"
              style={{ width: "200px" }}
              value={month}
              onChange={(e) => setMonth(e.target.value)}
            />
            <button className="btn btn-success" onClick={handleGenerate}>
              Save Payroll
            </button>
          </div>

          <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Salary (₹)</th>
                <th>Payslip</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp) => (
                <tr key={emp.id}>
                  <td>{emp.id}</td>
                  <td>{emp.name}</td>
                  <td>{emp.email}</td>
                  <td>{emp.role}</td>
                  <td>
                    <input
                      type="number"
                      className="form-control"
                      value={salaries[emp.id] || ''}
                      onChange={(e) => handleSalaryChange(emp.id, e.target.value)}
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-sm btn-primary"
                      onClick={() => handleDownloadPDF(emp)}
                    >
                      Download PDF
                    </button>
                  </td>
                </tr>
              ))}
              {employees.length === 0 && <tr><td colSpan="6">No employees available.</td></tr>}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PayrollPage;
