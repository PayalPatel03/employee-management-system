import React from 'react';
import { Card, Row, Col, Table, Badge } from 'react-bootstrap';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend } from 'chart.js';
import TopPerformers from './TopPerformers';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

const Dashboard = () => {
  const barData = {
    labels: ['HR', 'IT', 'Finance', 'Marketing', 'Support'],
    datasets: [
      {
        label: 'Employees',
        data: [12, 19, 7, 14, 10],
        backgroundColor: '#007bff',
      },
    ],
  };

  const pieData = {
    labels: ['Present', 'Absent', 'Leave'],
    datasets: [
      {
        data: [80, 10, 10],
        backgroundColor: ['#28a745', '#dc3545', '#ffc107'],
      },
    ],
  };

  const recentJoiners = [
    { name: 'Anita Sharma', date: '2025-06-15', image: 'https://i.pravatar.cc/40?img=1' },
    { name: 'Karan Mehta', date: '2025-06-14', image: 'https://i.pravatar.cc/40?img=2' },
    { name: 'Sonal Desai', date: '2025-06-12', image: 'https://i.pravatar.cc/40?img=3' },
  ];

  const topPerformers = [
    { name: 'Raj Patel', points: 95 },
    { name: 'Mira Joshi', points: 91 },
    { name: 'Vivek Kumar', points: 89 },
  ];

  const birthdays = [
    { name: 'Nikita Verma', date: 'June 19' },
    { name: 'Aakash Shah', date: 'June 21' },
  ];

  return (
    <div>
      <h2 className="mb-4">Employee Dashboard</h2>

      {/* Main stats */}
      <Row>
        <Col md={4}>
          <Card className="dashboard-card shadow mb-4">
            <Card.Body>
              <h5>Total Employees</h5>
              <h2>120</h2>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="dashboard-card shadow mb-4">
            <Card.Body>
              <h5>Active Projects</h5>
              <h2>8</h2>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="dashboard-card shadow mb-4">
            <Card.Body>
              <h5>Pending Leaves</h5>
              <h2>5</h2>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Charts */}
      <Row>
        <Col md={6}>
          <Card className="shadow p-3 mb-4">
            <h5 className="mb-3">Employees by Department</h5>
            <Bar data={barData} />
          </Card>
        </Col>
        <Col md={6}>
          <Card className="shadow p-3 mb-4">
            <h5 className="mb-3">Attendance Summary</h5>
            <Pie data={pieData} />
          </Card>
        </Col>
      </Row>

      {/* New Features */}
      <Row>
        {/* Recent Joiners */}
        <Col md={4}>
          <Card className="shadow p-3 mb-4">
            <h5 className="mb-3">Recent Joiners</h5>
            {recentJoiners.map((emp, index) => (
              <div className="d-flex align-items-center mb-2" key={index}>
                <img src={emp.image} alt={emp.name} className="rounded-circle me-2" width="40" height="40" />
                <div>
                  <strong>{emp.name}</strong>
                  <div className="text-muted" style={{ fontSize: '0.9rem' }}>{emp.date}</div>
                </div>
              </div>
            ))}
          </Card>
        </Col>

     
        {/* Upcoming Birthdays */}
        <Col md={4}>
          <Card className="shadow p-3 mb-4">
            <h5 className="mb-3">Upcoming Birthdays</h5>
            <ul className="list-group">
              {birthdays.map((bday, idx) => (
                <li className="list-group-item d-flex justify-content-between" key={idx}>
                  {bday.name} <span className="text-muted">{bday.date}</span>
                </li>
              ))}
            </ul>
          </Card>
        </Col>
        <TopPerformers/>
      </Row>
    </div>
  );
};

export default Dashboard;