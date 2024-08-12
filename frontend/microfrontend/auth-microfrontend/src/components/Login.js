import React from 'react';
import { useHistory } from 'react-router-dom';

function Login({ onLogin, setIsLoggedIn, setEmail }) {
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
    onLogin(formData)
      .then((res) => {
        setIsLoggedIn(true);
        setEmail(formData.email);
        history.push('/');
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
      <button type="submit">Войти</button>
    </form>
  );
}

export default Login;
