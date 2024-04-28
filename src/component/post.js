import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../slice/postSlice";
import usePost from "../reactquery/hooks/post";

const Post = () => {
    const dispatch = useDispatch()
    // const { enities, loading } = useSelector((state) => state.posts)
    // const [userId, setUserId] = useState("");
    const pageLimit = 5;
    const { data: enities, error, isLoading, fetchNextPage, isFetchingNextPage } = usePost({ pageLimit });

    useEffect(() => {
        dispatch(getPosts())
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (error) return console.log(error);
    console.log(enities)
    return (
        <div>
            <h2>Blog Posts</h2>
            {/* <select onChange={((event) => setUserId(event.target.value))}>
                <option value={""}></option>
                <option value={"1"}>User 1</option>
                <option value={"2"}>User 2</option>
                <option value={"3"}>User 3</option>
            </select> */}
            {enities.pages.map((post) => (
                post.map((item) => {
                  return  <p key={item.id}>{item.title}</p>
                })
            ))}
            <button disabled={isFetchingNextPage} onClick={() => fetchNextPage()}>
                {isFetchingNextPage ? 'Loading ...' : 'Load More'}
            </button>
        </div >
    )
}

export default Post;



//Pagination

// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getPosts } from "../slice/postSlice";
// import usePost from "../reactquery/hooks/post";

// const Post = () => {
//     const dispatch = useDispatch()
//     // const { enities, loading } = useSelector((state) => state.posts)
//     // const [userId, setUserId] = useState("");
//     const pageLimit = 5;
//     const [page, setPage] = useState(1);
//     const { data: enities, error, isLoading } = usePost({ page, pageLimit });

//     useEffect(() => {
//         dispatch(getPosts())
//     }, [])

//     if (isLoading) return <p>Loading...</p>
//     if (error) return console.log(error);

//     return (
//         <div>
//             <h2>Blog Posts</h2>
//             {/* <select onChange={((event) => setUserId(event.target.value))}>
//                 <option value={""}></option>
//                 <option value={"1"}>User 1</option>
//                 <option value={"2"}>User 2</option>
//                 <option value={"3"}>User 3</option>
//             </select> */}
//             {enities.map((post) => (
//                 <p key={post.id}>{post.title}</p>
//             ))}
//             <button disabled={page === 1} onClick={() => setPage(page - 1)}>Previous</button>
//             <button onClick={() => setPage(page + 1)}>Next</button>
//         </div >
//     )
// }

// export default Post;