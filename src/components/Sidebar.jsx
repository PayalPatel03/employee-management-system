import React from 'react';
import { FaTachometerAlt, FaUser, FaClipboardList, FaMoneyCheckAlt, FaCog, FaBars } from 'react-icons/fa';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';


const Sidebar = ({ collapsed, toggleCollapse }) => {
const menuItems = [
  { icon: <FaTachometerAlt />, label: 'Dashboard', path: '/' },
  { icon: <FaUser />, label: 'Employees', path: '/employees' },
  { icon: <FaClipboardList />, label: 'Attendance', path: '/attendance' },
  { icon: <FaMoneyCheckAlt />, label: 'Payroll', path: '/payroll' },
  { icon: <FaCog />, label: 'Settings', path: '/settings' },
];


  return (
    <div className={`sidebar bg-dark text-white p-3 ${collapsed ? 'collapsed' : ''}`}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        {!collapsed && <h4 className="text-white">EMS</h4>}
        <button className="btn btn-sm btn-light ms-auto" onClick={toggleCollapse}>
          <FaBars />
        </button>
      </div>
   <ul className="nav flex-column">
  {menuItems.map((item, idx) => (
    <li className="nav-item" key={idx}>
      <NavLink
        to={item.path}
        className={({ isActive }) =>
          `nav-link d-flex align-items-center gap-2 text-white ${isActive ? 'active' : ''}`
        }
        title={collapsed ? item.label : ""}
      >
        {item.icon}
        {!collapsed && <span>{item.label}</span>}
      </NavLink>
    </li>
  ))}
</ul>

    </div>
  );
};

export default Sidebar;
