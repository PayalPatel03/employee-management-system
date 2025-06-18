import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import EmployeePage from './components/EmployeePage';
import AttendancePage from './components/AttendancePage';
import PayrollPage from './components/PayrollPage';

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Router>
      <div className="d-flex">
        <Sidebar collapsed={collapsed} toggleCollapse={() => setCollapsed(!collapsed)} />
        <div className="main-content p-4 w-100">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/employees" element={<EmployeePage />} />
           
<Route path="/attendance" element={<AttendancePage />} />
<Route path="/payroll" element={<PayrollPage/>} />
          
            <Route path="/settings" element={<div>Settings Page</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
