import React, { useEffect, useState } from "react";
import "./PayrollPage.css";

const PayrollPage = () => {
  const [employees, setEmployees] = useState([]);
  const [month, setMonth] = useState(new Date().toISOString().slice(0, 7));

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("employees")) || [];
    setEmployees(data);
  }, []);

  const calculatePayroll = (emp) => {
    const baseSalary = parseFloat(emp.baseSalary) || 30000;
    const bonus = parseFloat(emp.bonus) || 2000;
    const overtime = parseFloat(emp.overtime) || 1500;
    const tax = 0.1 * baseSalary;
    const total = baseSalary + bonus + overtime - tax;

    return {
      baseSalary,
      bonus,
      overtime,
      tax,
      total,
    };
  };

  return (
    <div className="payroll-container">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Payroll Management</h2>
        <input
          type="month"
          className="form-control w-auto"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
        />
      </div>

      {employees.length === 0 ? (
        <p>No employees found.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered shadow-sm">
            <thead className="table-dark">
              <tr>
                <th>Name</th>
               
                <th>Base Salary</th>
                <th>Bonus</th>
                <th>Overtime</th>
                <th>Tax</th>
                <th>Total Pay</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp, i) => {
                const payroll = calculatePayroll(emp);
                return (
                  <tr key={i}>
                    <td>{emp.name}</td>
              
                    <td>₹{payroll.baseSalary.toFixed(2)}</td>
                    <td>₹{payroll.bonus.toFixed(2)}</td>
                    <td>₹{payroll.overtime.toFixed(2)}</td>
                    <td className="text-danger">-₹{payroll.tax.toFixed(2)}</td>
                    <td className="text-success fw-bold">₹{payroll.total.toFixed(2)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default PayrollPage;
