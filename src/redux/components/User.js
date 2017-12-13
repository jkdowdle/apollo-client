import React from 'react'

export const User = ({ firstName, age, handleClick = () => {} }) => {
  return (
    <p onClick={handleClick}>{firstName} - {age}</p>
  )
}

export default User