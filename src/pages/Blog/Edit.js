import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { useFormik } from 'formik';
import * as yup from 'yup'

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

const validations = yup.object({
    name: yup.string('Type the Blog Name').required('Blog Name is Required'),
    description: yup.string('Type Blog Description').required('Blog Description is required'),
    image_url: yup.string('Type the Image URL').required('Image URL is required')
})

export default function Edit() {
    const classes = useStyles();
    const { id } = useParams();
    const history = useHistory();
    const [loading, setLoading] = useState(false)
    const formik = useFormik({
        initialValues: {
            name: '',
            description: '',
            image_url: '',
        },
        validationSchema: validations,
        onSubmit: (values) => {
            editBlog(values)
            setLoading(true)
            history.push(`/blog/details/${id}`)
        }
    })
    
    useEffect(() => {
        axios.get(`http://localhost:5000/v1/api/blogs/${id}`).then( res => {
            console.log("res.data.data: ", res.data.data);
            const { name, description, image_url } = res.data.data
            formik.setFieldValue('name', name)
            formik.setFieldValue('description', description)
            formik.setFieldValue('image_url', image_url)
        }).catch( error => {
            console.log(error);
        })
    }, [])

    function editBlog(values) { 
        setLoading(true)
        
        axios.put(`http://localhost:5000/v1/api/blogs/${id}`, values).then( res => {
            console.log(res);
            setLoading(false)
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
                <form className={classes.root} autoComplete="off" onSubmit={formik.handleSubmit}>
                    <div>
                        <TextField 
                            required 
                            label="Name"
                            name="name"
                            value={formik.values.name}
                            id="standard-full-width"
                            style={{ margin: 8 }}
                            fullWidth
                            margin="normal"
                            onChange={formik.handleChange}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={ formik.touched.name && formik.errors.name}
                        />
                        <TextField 
                            id="standard-textarea"
                            label="Description"
                            name="description"
                            value={formik.values.description}
                            multiline
                            fullWidth
                            onChange={formik.handleChange}
                            error={formik.touched.description && Boolean(formik.errors.description)}
                            helperText={ formik.touched.description && formik.errors.description}
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
                            value={formik.values.image_url}
                            id="standard-full-width"
                            style={{ margin: 8 }}
                            fullWidth
                            margin="normal"
                            onChange={formik.handleChange}
                            error={formik.touched.image_url && Boolean(formik.errors.image_url)}
                            helperText={ formik.touched.image_url && formik.errors.image_url}
                        />
                        <Button variant="contained" color="secondary" type="submit">Edit</Button>
                    </div>
                </form>
            )
        }
        
        </>
    )
}

