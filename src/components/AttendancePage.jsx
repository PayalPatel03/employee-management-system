import React, { useState, useEffect } from "react";
import "./AttendancePage.css";

const AttendancePage = () => {
  const [attendance, setAttendance] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  // Load data from localStorage
  useEffect(() => {
    const savedAttendance = JSON.parse(localStorage.getItem("attendance")) || [];
    const savedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
    setAttendance(savedAttendance);
    setEmployees(savedEmployees);
  }, []);

  // Save attendance when it changes
  useEffect(() => {
    localStorage.setItem("attendance", JSON.stringify(attendance));
  }, [attendance]);

  // ✅ FIXED: Only update for specific empId + selected date
  const handleMarkAttendance = (empId, status) => {
    const today = selectedDate;

    const updated = attendance.filter(
      (entry) => !(entry.empId === empId && entry.date === today)
    );

    updated.push({ empId, date: today, status });
    setAttendance(updated);
  };

  // Get status for a specific employee
  const getStatus = (empId) => {
    const entry = attendance.find(
      (a) => a.empId === empId && a.date === selectedDate
    );
    return entry ? entry.status : "Not Marked";
  };

  return (
    <div className="attendance-container">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Employee Attendance</h2>
        <input
          type="date"
          className="form-control w-auto"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>

      {employees.length === 0 ? (
        <p className="text-muted">No employees available.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-hover shadow-sm">
            <thead className="table-dark">
              <tr>
                <th>Name</th>
               
                <th>Status</th>
                <th>Mark Attendance</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp, idx) => (
                <tr key={idx}>
                  <td>{emp.name}</td>
              
                  <td>
                    <span
                      className={`badge px-3 py-2 ${
                        getStatus(emp.empId) === "Present"
                          ? "bg-success"
                          : getStatus(emp.empId) === "Absent"
                          ? "bg-danger"
                          : "bg-secondary"
                      }`}
                    >
                      {getStatus(emp.empId)}
                    </span>
                  </td>
                  <td>
                    <button
                      className="btn btn-sm btn-outline-success me-2"
                      onClick={() => handleMarkAttendance(emp.empId, "Present")}
                    >
                      Present
                    </button>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => handleMarkAttendance(emp.empId, "Absent")}
                    >
                      Absent
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AttendancePage;