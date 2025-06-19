import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const TopPerformers = () => {
  const topPerformers = [
    {
      name: 'Luke Short',
      username: '@Short',
      performance: '80%',
      avatar: 'https://i.pravatar.cc/80?img=1',
    },
    {
      name: 'John Hard',
      username: '@rdacre',
      performance: '70%',
      avatar: 'https://i.pravatar.cc/80?img=2',
    },
    {
      name: 'Paul Rees',
      username: '@Rees',
      performance: '77%',
      avatar: 'https://i.pravatar.cc/80?img=3',
    },
    {
      name: 'Rachel Parr',
      username: '@Parr',
      performance: '65%',
      avatar: 'https://i.pravatar.cc/80?img=4',
    },
    {
      name: 'Eric Reid',
      username: '@Eric',
      performance: '72%',
      avatar: 'https://i.pravatar.cc/80?img=5',
    },
    {
      name: 'Jan Ince',
      username: '@Ince',
      performance: '68%',
      avatar: 'https://i.pravatar.cc/80?img=6',
    },
  ];

  return (
    <Card className="p-4 mb-4" style={{ backgroundColor: 'beige' }}>
      <h5 className="mb-3 fw-bold">Top Performers</h5>
      <p>You have <strong>140 influencers</strong> in your company.</p>

      <div className="d-flex justify-content-around mb-4">
        <div className="text-center">
          <h3 className="mb-0">350</h3>
          <small>New Task</small>
        </div>
        <div className="text-center">
          <h3 className="mb-0">130</h3>
          <small>Task Completed</small>
        </div>
      </div>

      <Row>
        {topPerformers.map((emp, idx) => (
          <Col md={4} sm={6} className="mb-3" key={idx}>
            <Card className="text-center p-3 h-100 shadow-sm">
              <img
                src={emp.avatar}
                alt={emp.name}
                className="rounded-circle mx-auto mb-2"
                width={60}
                height={60}
              />
              <h6 className="mb-0">{emp.name}</h6>
              <small className="text-muted">{emp.username}</small>
              <h5 className="text-success mt-2 fw-bold">{emp.performance}</h5>
            </Card>
          </Col>
        ))}
      </Row>
    </Card>
  );
};

export default TopPerformers;