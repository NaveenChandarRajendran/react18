import React from 'react';
import Navbar from './navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <Navbar />
            <div id='main'>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;