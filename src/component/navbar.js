import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <span>
                <Link to={'/post'}>Post</Link>
            </span>
            <span>
                <Link to={'/contact'}>Contact</Link>
            </span>
            <span>
                <Link to={'/users'}>Users</Link>
            </span>
        </div>
    )
}

export default Navbar;