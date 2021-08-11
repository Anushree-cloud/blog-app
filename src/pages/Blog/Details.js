import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import React, { useState, useEffect} from 'react'
import { useParams, useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const useStyle = makeStyles(() => ({
    editButton: {
        textDecoration: 'none', 
        color: 'white',
        width: '5vw',
    },
    btn: {
        margin: "5px",
    }
}))

export default function Details() {
    const classes = useStyle()
    const [blog, setBlog] = useState({})
    const [loading, setLoading] = useState(true)
    const { id } = useParams()
    const history = useHistory()

    useEffect(() => {
        setLoading(true)
        axios.get(`http://localhost:5000/v1/api/blogs/${id}`).then( res => {
        setBlog(res.data.data);
        setLoading(false)
        }).catch( error => {
            console.log(error);
        })
    }, [id])

    function deleteBlog() {
        axios.delete(`http://localhost:5000/v1/api/blogs/${id}`).then( res => {
            console.log(res);
            history.push('/')
        }).catch( error => {
            console.log(error);
        })
        
    } 
    
    return (
        <>
            {
                loading ? (
                    <h1>Loading...</h1>
                ) : (
                    <>
                        <h1>{blog.name}</h1>
                        <p>{blog.description}</p>
                        <Button size="large" variant="contained" color="secondary" className={classes.btn}>
                            <Link to={`/blog/edit/${blog.id}`} className={classes.editButton}>
                                Edit
                            </Link>
                        </Button>
                        <Button size="large" variant="contained" color="secondary" className={classes.btn} onClick={deleteBlog}>
                            Delete
                        </Button>
                    </>
                )
            }
            
        </>
    )
}
