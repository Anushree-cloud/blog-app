import { Button, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { useFormik } from 'formik';
import * as yup from 'yup'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        width: '32ch',
      },
    },
    formContainer: {
        position: 'absolute',
        top: '30%',
        left: '35%',
        display: 'flex',
        justifyContent: 'center',
        border: '2px solid black',
        padding: '40px',
        textAlign: 'center',
        width: 'max-content'
    },
    input: {
        width: '30ch',
        margin: '5px'
    },
    link: {
        margin: '2px',
    },
    linkContainer: {
        margin: '5px',
        display: 'flex',
        justifyContent: 'space-between',
    },
    btn: {
        width: '33ch',
    }
  }));

const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
});

export default function Login() {
    const classes = useStyles()
    const formik = useFormik({
        initialValues: {
            email: 'abc@gmail.com',
            password: '12345678',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <div className={classes.formContainer}>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
                <div>
                    <TextField 
                        id="outlined-basic" 
                        name="email"
                        label="Email" 
                        variant="outlined" 
                        className={classes.input}
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                    <TextField 
                        id="outlined-basic" 
                        name="password"
                        label="Password"  
                        variant="outlined" 
                        className={classes.input}
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />
                    <Button 
                        variant='contained' 
                        type="submit"
                        color="secondary"
                        className={classes.btn}
                        >
                            Login
                    </Button>
                </div>
                <div className={classes.linkContainer}>
                    <a href='#' className={classes.link}>Forget Password?</a>
                    <a href='#' className={classes.link}>Create new account?</a>
                </div>
            </form>
        </div>
    )
}

