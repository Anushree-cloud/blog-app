import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { useHistory } from 'react-router';
import { useFormik } from 'formik';
import * as yup from 'yup';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '80ch',
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

const validationSchema = yup.object({
    name: yup
        .string('Enter Blog-name')
        .required('Blog-name is required'),
    description: yup
        .string('Enter Blog Description')
        .min(10, 'Blog should be of minimum 15 characters length')
        .required('Description is required'),
    image_url: yup
        .string('Enter Image URL')
        .required('Image URL is required'),
});

export default function Add() {
    const classes = useStyles();
    const history = useHistory();
    const [loading, setLoading] = useState(false)
    const [postBlog, setPostBlog] = useState(
        {
            name: "",
            description: "",
            image_url: ""
        }
    );

    const { name, description, image_url } = postBlog

    const formik = useFormik({
        initialValues: {
            name: '',
            description: '',
            image_url: ''
        },
        validationSchema: validationSchema,
        onSubmit: (e) => {
            e.preventDefault()
            console.log(postBlog);
            createBlog()
            setLoading(true)
            history.push('/')
        }
    })
    console.log(formik);
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
    
    // const submitBlogHandler = (e) => {
    //     e.preventDefault()
    //     console.log(postBlog);
    //     createBlog()
    //     setLoading(true)
    //     history.push('/')
    // }

    

    return (
        <>
        {!loading ? (
            <form className={classes.root} autoComplete="off" onSubmit={formik.handleSubmit}>
                <div>
                    <TextField 
                        label="Name"
                        name="name"
                        value={name}
                        id="standard-full-width"
                        style={{ margin: 8 }}
                        placeholder="Name"
                        margin="normal"
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
                        onChange={inputHandler}
                    />
                    <TextField 
                        id="standard-textarea"
                        label="Description"
                        name="description"
                        value={description}
                        placeholder="Description"
                        multiline
                        onChange={inputHandler}
                        error={formik.touched.description && Boolean(formik.errors.description)}
                        helperText={formik.touched.description && formik.errors.description}
                        
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
                        margin="normal"
                        onChange={inputHandler}
                        error={formik.touched.image_url && Boolean(formik.errors.image_url)}
                        helperText={formik.touched.image_url && formik.errors.image_url}
                    />
                </div>
                <div>
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
