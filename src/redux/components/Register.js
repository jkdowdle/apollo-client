import React from 'react'

export const Register = ({ email, password, handleChange, signup, ...rest }) => {
  return (
    <form onSubmit={signup}>
      <div>
        <input type="text" value={email} name="email" onChange={handleChange} />
      </div>
      <div>
        <input type="text" value={password} name="password" onChange={handleChange} />
      </div>
      <div>
        <button type="submit">Signup</button>
      </div>
    </form>
  )
}

export default Register