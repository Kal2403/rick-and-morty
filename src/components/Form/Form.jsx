import React from 'react';
import { useState } from 'react';
import validation from './validation';

const Form = (props) => {

  const { login } = props;

  const [ userData, setUserData ] = useState({
    email: "",
    password: ""
  })

  const [ errors, setErrors ] = useState({});

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name] : event.target.value
    })
    setErrors(validation({
      ...userData,
      [event.target.name] : event.target.value
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    login(userData)
  }

  return (
    <>
      <form onSubmit={handleSubmit} >
        <label>Email</label>
        <input 
          name="email"
          type="email" 
          onChange={handleChange} 
          value={userData.email} 
          placeholder="Enter email" />

        {
          errors.email ? (
            <p>{errors.email}</p>
          ) : errors.emailVacio ? (
            <p>{errors.emailVacio}</p>
          ) : (
            <p>{errors.caracteres}</p>
          )
        }

        <label>Password</label>
        <input 
          name="password" 
          type="password" 
          onChange={handleChange} 
          value={userData.value} 
          placeholder="Enter password" />

        {
          errors.password ? (
            <p>{errors.password}</p>
          ) : ""
        }

        <button type='submit' >Submit</button>
      </form>
    </>
  )
}

export default Form;