import React from 'react'

import User from './User'

export const UserList = ({ data: { users, searchUsers, ...data } }) => searchUsers.map((user) => <User key={user.id} {...user} />)

export default UserList