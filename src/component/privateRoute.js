import React from 'react'
import useAuth from '../reactquery/hooks/auth';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to='/login' />
    }
    return <Outlet />
}

export default PrivateRoute;