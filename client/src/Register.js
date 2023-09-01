// client/src/components/Register.js
import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    gender: '',
  });

  const { name, email, password, gender } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    // Send a POST request to your backend API for user registration.
    try {
      const res = await axios.post('/api/register', formData);
      console.log(res.data);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        {/* Form inputs for name, email, password, and gender */}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
