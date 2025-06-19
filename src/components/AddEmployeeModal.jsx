import React, { useState, useEffect } from 'react';

const AddEmployeeModal = ({ show, onClose, onCreate, initialData }) => {
  const [form, setForm] = useState({
    name: '',
    company: '',
    id: '',
    joinDate: '',
    username: '',
    email: '',
    phone: '',
    password: '',
    department: 'Web Development',
    role: 'UI/UX Design',
    image: '',
  });

  useEffect(() => {
    if (initialData) setForm(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm(prev => ({ ...prev, image: reader.result }));
      };
      if (files[0]) reader.readAsDataURL(files[0]);
    } else {
      setForm(prev => ({ ...prev, [name]: value }));
    }
  };

const handleSubmit = () => {
  onCreate(form);  // `form` may include `index`
  onClose();
};

  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content p-4">
        <h5>Add Employee</h5>
        <div className="row">
          <div className="col-md-6">
            <input name="name" value={form.name} onChange={handleChange} placeholder="Employee Name" className="form-control mb-2" />
            <input name="company" value={form.company} onChange={handleChange} placeholder="Company" className="form-control mb-2" />
            <input name="image" type="file" onChange={handleChange} className="form-control mb-2" />
            <input name="id" value={form.id} onChange={handleChange} placeholder="Employee ID" className="form-control mb-2" />
            <input name="joinDate" value={form.joinDate} onChange={handleChange} type="date" className="form-control mb-2" />
          </div>
          <div className="col-md-6">
            <input name="username" value={form.username} onChange={handleChange} placeholder="Username" className="form-control mb-2" />
            <input name="email" value={form.email} onChange={handleChange} placeholder="Email ID" className="form-control mb-2" />
            <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="form-control mb-2" />
            <input name="password" value={form.password} onChange={handleChange} type="password" placeholder="Password" className="form-control mb-2" />
            <select name="department" value={form.department} onChange={handleChange} className="form-control mb-2">
              <option>Web Development</option>
              <option>QA</option>
            </select>
            <select name="role" value={form.role} onChange={handleChange} className="form-control mb-2">
              <option>UI/UX Design</option>
              <option>Developer</option>
            </select>
          </div>
        </div>
        <div className="text-end">
          <button className="btn btn-secondary me-2" onClick={onClose}>Cancel</button>
          <button className="btn btn-primary" onClick={handleSubmit}>Create</button>
        </div>
      </div>
    </div>
  );
};

export default AddEmployeeModal;