import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
        margin: theme.spacing(1),
        },
    },
    buttons: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    input: {
        display: 'none',
    },
}));

export default function Edit() {
    const classes = useStyles();
    const { id } = useParams();
    const history = useHistory();
    const [loading, setLoading] = useState(false)
    // const [previosBlogContent, setPreviousBlogContent] = useState({
    //     name: "",
    //     description: "",
    //     image_url: ""
    // })
    const [newBlog, setNewBlog] = useState({
        name: "",
        description: "",
        image_url: "",
    })
    
    useEffect(() => {
        axios.get(`http://localhost:5000/v1/api/blogs/${id}`).then( res => {
            setNewBlog(res.data.data)
            // console.log("res.data.data: ", res.data.data);
        }).catch( error => {
            console.log(error);
        })
    }, [])


    const inputHandler = (e) => {
        setNewBlog((previousBlogData) => {
            return (
                {
                    ...previousBlogData,
                    [e.target.name]: e.target.value
                }
            )
        })
    }

    function editBlog() { 
        setLoading(true)
        
        axios.put(`http://localhost:5000/v1/api/blogs/${id}`, newBlog).then( res => {
            console.log(res);
            setLoading(false)
        }).catch( error => {
            console.log(error);
        })
    }

    const editBlogHandler = (e) => {
        e.preventDefault()
        editBlog()
        setLoading(true)
        history.push(`/blog/details/${id}`)
    }
    
    return (
        <>
        {
            loading ? (
                <h1>Loading...</h1>
            ) : (
                <form className={classes.root} autoComplete="off" onSubmit={editBlogHandler}>
                    <div>
                        <TextField 
                            required 
                            label="Name"
                            name="name"
                            value={newBlog.name}
                            id="standard-full-width"
                            style={{ margin: 8 }}
                            fullWidth
                            margin="normal"
                            onChange={inputHandler}
                        />
                        <TextField 
                            id="standard-textarea"
                            label="Description"
                            name="description"
                            value={newBlog.description}
                            multiline
                            fullWidth
                            onChange={inputHandler}
                        />
                        {/* <TextField 
                            required 
                            label="Date" 
                            id="standard-full-width"
                            style={{ margin: 8 }}
                            placeholder="Date"
                            fullWidth
                            margin="normal"
                            
                        /> */}
                        <TextField 
                            required 
                            label="Image URL" 
                            name="image_url"
                            value={newBlog.image_url}
                            id="standard-full-width"
                            style={{ margin: 8 }}
                            fullWidth
                            margin="normal"
                            onChange={inputHandler}
                        />
                        <Button variant="contained" color="secondary" type="submit">Edit</Button>
                    </div>
                </form>
            )
        }
        
        </>
    )
}

