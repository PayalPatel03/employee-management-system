# React + Vite

# 👩‍💼 Employee Management System (EMS)

A modern Employee Management System built using **React**, **Redux Toolkit**, **Bootstrap**, and **LocalStorage**, featuring role-based views for Admin and Employee.

## 🚀 Features

### 🔐 Authentication
- Role-based login for **Admin** and **Employee**
- LocalStorage-based session management

### 🧑‍💼 Admin Dashboard
- ✅ Add, Edit, Delete Employees
- 📤 Upload Employee CSV
- 📝 Assign and Manage Tasks
- 💸 Generate Monthly Payroll and Salary Slips (PDF/Modal)
- 📊 Dashboard Stats & Charts
- 🕒 Mark Attendance (per employee per day)
- 💬 Chat/Communication System *(coming soon)*

### 👨‍💻 Employee Dashboard
- 👁️ View Personal Profile
- 📋 View Assigned Tasks
- ✍️ Update Task Status *(optional)*
- 🗓️ View Attendance
- 💵 View Monthly Payroll and Download Salary Slip

## 🛠️ Tech Stack

- **Frontend**: React, Bootstrap, CSS, jsPDF, Redux Toolkit
- **State Management**: Redux Toolkit
- **Data Storage**: LocalStorage *(can be extended to JSON Server/Firebase)*
- **PDF Generation**: jsPDF & jspdf-autotable
- **Charts**: Chart.js or Recharts (if used)




## 💡 Getting Started

### Prerequisites

- Node.js v16+
- npm

### Installation

```bash
git clone https://github.com/PayalPatel03/employee-management-system.git
cd employee-management-system
npm install
npm start


Login Credentials (Example)
Admin

Username: admin@ems.com

Role: admin

Employee

Username: employee1@ems.com

Role: employee