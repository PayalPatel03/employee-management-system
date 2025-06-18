const EmployeeCard = ({ emp }) => (
  <div className="card p-3 mb-3 shadow-sm">
    <div className="d-flex align-items-center">
      <img src={emp.image} alt="profile" className="rounded-circle" width="60" height="60" />
      <div className="ms-3">
        <h5>{emp.name}</h5>
        <span className="badge bg-light text-dark">{emp.role}</span>
        <p className="mt-2 small">{emp.description}</p>
        <button className="btn btn-sm btn-outline-primary me-2">Add Task</button>
        <button className="btn btn-sm btn-outline-dark">Profile</button>
      </div>
    </div>
  </div>
);
export default EmployeeCard;
