import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { useHistory } from 'react-router';
import { useForm } from 'react-hook-form';
import { required } from 'yargs';


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
        margin: theme.spacing(1),
        // width: '25ch',
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

export default function Add() {
    const classes = useStyles();
    const history = useHistory();
    const { register, handleSubmit, errors } = useForm()
    const [loading, setLoading] = useState(false)
    const [postBlog, setPostBlog] = useState(
        {
            name: "",
            description: "",
            image_url: ""
        }
    );


    const { name, description, image_url } = postBlog

    const inputHandler = (e) => {
        setPostBlog((previousBlogData) => {
            return {
                ...previousBlogData,
                [e.target.name]: e.target.value
            }
        })
    }

    function createBlog() {
        setLoading(true)
        axios.post(`http://localhost:5000/v1/api/blogs`, postBlog).then((res) => {
            console.log(res);
            setLoading(false)
        }).catch((error) => {
            console.log(error);
        })
    }
    
    const submitBlogHandler = (e) => {
        e.preventDefault()
        console.log(postBlog);
        createBlog()
        setLoading(true)
        history.push('/')
    }

    

    return (
        <>
        {!loading ? (
            <form className={classes.root} autoComplete="off" onSubmit={handleSubmit(submitBlogHandler)}>
            <div>
                <TextField 
                    label="Name"
                    name="name"
                    value={name}
                    id="standard-full-width"
                    style={{ margin: 8 }}
                    placeholder="Name"
                    fullWidth
                    margin="normal"
                    inputRef={register({
                        required: true
                    })}
                    error={Boolean(errors.name)}
                    helperText={errors.name ? "Blog-Name is required!" : ""}
                    onChange={inputHandler}
                />
                <TextField 
                    id="standard-textarea"
                    label="Description"
                    name="description"
                    value={description}
                    placeholder="Description"
                    multiline
                    fullWidth
                    onChange={inputHandler}
                    inputRef={register}
                    
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
                    label="Image URL" 
                    name="image_url"
                    value={image_url}
                    id="standard-full-width"
                    style={{ margin: 8 }}
                    placeholder="Image URL"
                    fullWidth
                    margin="normal"
                    inputRef={register}
                    onChange={inputHandler}
                />
                <Button variant="contained" color="secondary" type="submit">Add Blog</Button>
            </div>
        </form>
        ) : (
            <h1>Loading....</h1>
        )
    }
        
        </>
    )
}
