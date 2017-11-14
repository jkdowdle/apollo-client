import React from 'react'

export const UserInfo = ({ id, firstName, age, toggleEdit }) => {
  return (
    <div>
      <h2>{firstName}</h2>
      <b>{age}</b>
      <div>
        <button onClick={toggleEdit}>Edit</button>
      </div>
    </div>
  )
}

export default UserInfo