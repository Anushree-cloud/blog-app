import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { useHistory } from 'react-router';
import { useFormik } from 'formik';
import * as yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';

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
    const toastAlert = () => {
        toast.success('Blog has been added successfully 😎', {
            style: {
                border: '1px solid #713200',
                padding: '16px',
                color: '#713200',
            },
            iconTheme: {
                primary: '#713200',
                secondary: '#FFFAEE',
            },
        });
    }
    const formik = useFormik({
        initialValues: {
            name: '',
            description: '',
            image_url: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            createBlog(values)
            setLoading(true)
            toastAlert()
            formik.resetForm()
        }
    })

    function createBlog(values) {
        setLoading(true)
        axios.post(`http://localhost:5000/v1/api/blogs`, values).then((res) => {
            console.log(res);
            setLoading(false)
        }).catch((error) => {
            console.log(error);
        })
    }
    

    return (
        <>
        {!loading ? (
            <>
                <form className={classes.root} autoComplete="off" onSubmit={formik.handleSubmit}>
                    <div>
                        <TextField 
                            label="Name"
                            name="name"
                            value={formik.values.name}
                            id="standard-full-width"
                            style={{ margin: 8 }}
                            placeholder="Name"
                            margin="normal"
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={formik.touched.name && formik.errors.name}
                            onChange={formik.handleChange}
                        />
                        <TextField 
                            id="standard-textarea"
                            label="Description"
                            
                            name="description"
                            value={formik.values.description}
                            placeholder="Description"
                            multiline
                            onChange={formik.handleChange}
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
                            value={formik.values.image_url}
                            id="standard-full-width"
                            style={{ margin: 8 }}
                            placeholder="Image URL"
                            margin="normal"
                            onChange={formik.handleChange}
                            error={formik.touched.image_url && Boolean(formik.errors.image_url)}
                            helperText={formik.touched.image_url && formik.errors.image_url}
                        />
                    </div>
                    <div>
                        <Button variant="contained" color="secondary" type="submit">Add Blog</Button>
                    </div>
                </form>
                <Toaster
                    position="top-center"
                    reverseOrder={false} 
                />
            </>
        ) : (
            <h1>Loading....</h1>
        )
    }
        
        </>
    )
}
