import React from 'react';
import { useHistory } from 'react-router-dom';

function Register({ onRegister }) {
  const [formData, setFormData] = React.useState({
    email: '',
    password: ''
  });
  const history = useHistory();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onRegister(formData)
      .then(() => {
        history.push('/signin');
      })
      .catch(console.error);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <button type="submit">Зарегистрироваться</button>
    </form>
  );
}

export default Register;
