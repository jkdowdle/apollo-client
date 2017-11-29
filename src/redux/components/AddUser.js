import React from 'react'

export const AddUser = ({ handleSubmit, handleChange, firstName, age }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input type="text" value={firstName} name="firstName" onChange={handleChange} />
      </div>
      <div>
        <input type="text" value={age} name="age" onChange={handleChange} />
      </div>
      <div>
        <button type="submit">AddUSer</button>
      </div>
    </form>
  )
} 

export default AddUser