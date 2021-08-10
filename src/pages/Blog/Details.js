import React from 'react'
import { useParams } from 'react-router';

export default function Details({ blog }) {
    const { id } = useParams()
    console.log(id);
    let currentBlog = blog.find((blogItem) => {
        return blogItem.id === id ? true : false
    })
    console.log(currentBlog);
    return (
        <>
            <h1>{currentBlog.name}</h1>
            <h3>{currentBlog.details}</h3>
        </>
    )
}
