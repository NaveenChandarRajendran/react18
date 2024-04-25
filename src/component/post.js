import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../slice/postSlice";

const Post = () => {
    const dispatch = useDispatch()
    const { enities, loading } = useSelector((state) => state.posts)

    useEffect(() => {
        dispatch(getPosts())
    }, [])

    if (loading) return <p>Loading...</p>

    return (
        <div>
            <h2>Blog Posts</h2>
            {enities.map((post) => (
                <p key={post.id}>{post.title}</p>
            ))}
        </div>
    )
}

export default Post;