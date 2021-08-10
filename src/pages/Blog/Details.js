import axios from 'axios';
import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router';

export default function Details() {
    const [blog, setBlog] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5000/v1/api/blogs`).then( res => {
        console.log(res);
        setBlog(res.data.data);
        console.log(blog);
        }).catch( error => {
            console.log(error);
        })
    }, [])

    const { id } = useParams()
    console.log(id);
    let currentBlog = blog.find((blogItem) => {
        return blogItem.id === id ? true : false
    })
    console.log(currentBlog);
    return (
        <>
            <h1>{currentBlog.name}</h1>
            <h3>{currentBlog.description}</h3>
        </>
    )
}
