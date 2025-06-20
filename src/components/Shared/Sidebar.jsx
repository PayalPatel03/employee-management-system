import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ role }) => {
  return (
    <div className="sidebar bg-dark text-white">
      <h4 className="p-3">EMS {role === 'admin' ? 'Admin' : 'Employee'}</h4>
      <ul className="list-unstyled p-2">
        {role === 'admin' ? (
          <>
            <li><Link to="/admin/dashboard" className="text-white">Dashboard</Link></li>
            <li><Link to="/admin/employees" className="text-white">Employees</Link></li>
            <li><Link to="/admin/tasks" className="text-white">Tasks</Link></li>
            <li><Link to="/admin/payroll" className="text-white">Payroll</Link></li>
          </>
        ) : (
          <>
            <li><Link to="/employee/dashboard" className="text-white">Dashboard</Link></li>
            <li><Link to="/employee/profile" className="text-white">My Profile</Link></li>
            <li><Link to="/employee/tasks" className="text-white">My Tasks</Link></li>
            <li><Link to="/employee/payroll" className="text-white">My Payroll</Link></li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
