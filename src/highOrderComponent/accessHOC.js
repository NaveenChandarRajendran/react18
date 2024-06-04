import React, { useEffect, useState } from "react";
import withData from "./hoc";
import NormalComponent from "./normalComponent";

const UsersList = withData(NormalComponent);


const AccessHOC = () => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').then(async(res) => {
            const data = await res.json();
            // data.then((final)=>{
            //     setData(final);
            //     setIsLoading(false);
            // })
            setData(data);
            setIsLoading(false);
        })
    }, [])

    return (
        <UsersList data={data} isLoading={isLoading} />
    )
}

export default AccessHOC;