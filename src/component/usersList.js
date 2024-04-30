import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const UsersList = () => {
    const users = [
        {
            user_id: 1,
            name: 'Naveen'
        },
        {
            user_id: 2,
            name: 'Kamal'
        },
        {
            user_id: 3,
            name: 'Gopi'
        }
    ]
    return (
        <div>
            <h3>UsersList</h3>
            {users.map(user => (
                <React.Fragment key={user.user_id}>
                    <Link  to={`/users/${user.user_id}`}>{user.name}</Link>
                    <br />
                </React.Fragment>
            ))}
            <Outlet />
        </div>
    )
}

export default UsersList;