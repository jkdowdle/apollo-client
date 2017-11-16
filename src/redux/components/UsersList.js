import React from 'react'

import User from './User'

export const UsersList = ({ data: { users, searchUsers, ...data } }) => searchUsers.map((user) => console.log('data', data) && <User key={user.id} {...user} />)

export default UsersList