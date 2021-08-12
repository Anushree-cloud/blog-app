import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ArrowBackIos } from '@material-ui/icons';
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
    },
    image: {
        width: '100%',
        height: '70vh',
    },
    container: {
        backgroundColor: 'black',
        margin: '1ch 5ch 5ch 5ch',
        color: '#888',
        padding: '20px',
        borderRadius: '30px',
    },
    blogName: {
        borderTop: '3px solid #f50057',
        borderBottom: '3px solid #f50057',
        padding: '10px',
        marginTop: '0',
        color: 'white',
        textShadow: '0 0 15px #f50057'
    },
    btnContainer: {
        display: 'flex',
        justifyContent: 'space-between'
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
    }, [])

    function deleteBlog() {
        axios.delete(`http://localhost:5000/v1/api/blogs/${id}`).then( res => {
            console.log(res);
            history.push('/blog')
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
                        <div className={classes.container}>
                            <h1 className={classes.blogName}>{blog.name}</h1>
                            <img src={blog.image_url} className={classes.image} />
                            <p style={{whiteSpace: 'pre-line', textAlign: 'justify'}}>{blog.description}</p>
                            <div className={classes.btnContainer}>
                                <div className={classes.btnGroup}>
                                    <Button size="large" variant="contained" color="secondary" className={classes.btn}>
                                        <Link to={`/blog/edit/${blog.id}`} className={classes.editButton}>
                                            Edit
                                        </Link>
                                    </Button>
                                    <Button size="large" variant="contained" color="secondary" className={classes.btn} onClick={deleteBlog}>
                                        Delete
                                    </Button>
                                </div>
                                <Button size="large" variant="contained" color="secondary" className={classes.btn} onClick={() => {history.push('/blog')}}>
                                    <ArrowBackIos /> Go Back
                                </Button>
                            </div>
                            
                            
                        </div>
                    </>
                )
            }
            
        </>
    )
}
