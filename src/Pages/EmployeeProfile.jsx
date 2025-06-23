
import React from 'react';
import Sidebar from '../components/Shared/Sidebar';
import Header from '../components/Shared/Header';

const EmployeeProfile = () => {
  const user = JSON.parse(localStorage.getItem("authUser"));

  return (
    <div className="d-flex">
      <Sidebar role="employee" />
      <div className="flex-grow-1" style={{ marginLeft: '220px' }}>
        <Header user={user} />
        <div className="container mt-4">
          <h4>👤 My Profile</h4>

          <div className="card mt-3 p-4 shadow">
            <div className="row">
              <div className="col-md-4 text-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGw-sz_ynsO6fK1gee7Kz13-xZHInABzJrXw&s"
                  alt="Profile"
                  className="img-thumbnail rounded-circle"
                />
              </div>
              <div className="col-md-8">
                <table className="table table-borderless">
                  <tbody>
                    <tr>
                      <th>Name:</th>
                      <td>{user.name}</td>
                    </tr>
                    <tr>
                      <th>Email:</th>
                      <td>{user.email}</td>
                    </tr>
                    <tr>
                      <th>Role:</th>
                      <td>{user.role}</td>
                    </tr>
                    <tr>
                      <th>Joined:</th>
                      <td>{user.joinDate || 'N/A'}</td>
                    </tr>
                    {/* Add more fields if needed */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EmployeeProfile;