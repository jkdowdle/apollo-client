import React from 'react'

import User from './User'

export const UsersList = ({ data: { users, searchUsers } }) => searchUsers.map((user) => <User key={user.id} {...user} />)

export default UsersList