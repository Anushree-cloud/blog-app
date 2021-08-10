import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from 'axios';


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

export default function Add(props) {
    const classes = useStyles();
    const [postBlog, setPostBlog] = useState([
        {
            name: "",
            description: "",
            image_url: ""
        }
    ]);

    const inputHandler = (e) => {
        setPostBlog({[e.target.name]: e.target.value})
    }
    
    const submitBlogHandler = (e) => {
        e.preventDefault()
        console.log(postBlog);
    }

    axios.post(`http://localhost:5000/v1/api/blogs`, {postBlog}).then( res => {
        console.log(res);
    }).catch( error => {
        console.log(error);
    })

    return (
        <form className={classes.root} noValidate autoComplete="off" onSubmit={submitBlogHandler}>
            <div>
                <TextField 
                    required 
                    label="Name"
                    name="name"
                    id="standard-full-width"
                    style={{ margin: 8 }}
                    placeholder="Name"
                    fullWidth
                    margin="normal"
                    onChange={inputHandler}
                />
                <TextField 
                    id="standard-textarea"
                    label="Description"
                    name="description"
                    placeholder="Description"
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
                    id="standard-full-width"
                    style={{ margin: 8 }}
                    placeholder="Image URL"
                    fullWidth
                    margin="normal"
                    onChange={inputHandler}
                />
                <Button variant="contained" color="secondary" type="submit">Add Blog</Button>
            </div>
        </form>
    )
}
