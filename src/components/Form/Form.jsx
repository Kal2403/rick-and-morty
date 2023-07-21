import React from 'react';
import { useState } from 'react';
import validation from './validation';
import styled from './form.module.css';
import loginImg from '../../img/login.jpg';

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
    <div className={styled.formContainer}>
      <form className={styled.form} onSubmit={handleSubmit} >
        <img className={styled.loginImg} src={loginImg} alt="loginRickandMorty" />
        <div className={styled.emailContainer}>
          <label className={styled.label}>Email</label>
          <input
            className={styled.input} 
            name="email"
            type="email" 
            onChange={handleChange} 
            value={userData.email} 
            placeholder="Enter email" />
        </div>
        

        {
          errors.email ? (
            <p className={styled.errors}>{errors.email}</p>
          ) : errors.emailVacio ? (
            <p className={styled.errors}>{errors.emailVacio}</p>
          ) : (
            <p className={styled.errors}>{errors.caracteres}</p>
          )
        }
        <div className={styled.passwordContainer}>
          <label className={styled.label}>Password</label>
          <input 
            className={styled.input}
            name="password" 
            type="password" 
            onChange={handleChange} 
            value={userData.value} 
            placeholder="Enter password" />
        </div>
        

        {
          errors.password ? (
            <p className={styled.errors}>{errors.password}</p>
          ) : ""
        }

        <button className={styled.btns} type='submit' >Submit</button>
      </form>
    </div>
  )
}

export default Form;