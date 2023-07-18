import React from 'react';
import { useState } from 'react';

const Form = () => {

  const [userData, setUserData] = useState({
    email: "",
    password: ""
  })

  const handleChange = (event) => {
    // setUserData({
    //   ...userData,
    //   [event.target.name]
    // })
  }

  return (
    <div>
      <form action="">
        <label htmlFor="email">Email</label>
        <input name='email' type="text" />
        <label htmlFor="password">Password</label>
        <input type="password" onChange={handleChange} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Form;