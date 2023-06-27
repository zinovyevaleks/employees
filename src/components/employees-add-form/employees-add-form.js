import { useState } from 'react';

import './emploees-add-form.scss';

const EmployersAddForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [salary, setSalary] = useState('');

  const handleValueChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'salary') {
      setSalary(value);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (name.length < 3 || !salary) return;
    onAdd(name, salary);
    setName('');
    setSalary('');
  };

  return (
    <div className="add-employee">
      <h3>Добавьте нового сотрудника</h3>
      <form className="add-employee-form d-flex" onSubmit={onSubmit}>
        <input
          type="text"
          className="form-control new-post-label"
          placeholder="Как его зовут?"
          name="name"
          value={name}
          onChange={handleValueChange}
        />
        <input
          type="number"
          className="form-control new-post-label"
          placeholder="З/П в $?"
          name="salary"
          value={salary}
          onChange={handleValueChange}
        />
        <button type="submit" className="btn btn-outline-light">Добавить</button>
      </form>
    </div>
  );
};

export default EmployersAddForm;
