import React from 'react'
import { useLocation, useParams, useSearchParams } from 'react-router-dom';

const UserDetail = () => {
    const params = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    // console.log(searchParams.get('name'));
    const location = useLocation();
    // console.log("location", location);
    return (
        <div>UserDetails</div>
    )
}

export default UserDetail;