import { Button, TextField } from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import toast, { Toaster } from 'react-hot-toast';
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/styles'
import { useFormik } from 'formik';
import * as yup from 'yup'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        width: '35ch',
    },
    },
    headerIcon : {
        width: '5ch',
        height: '5ch',
        marginLeft: '35%',
        marginBottom: '30px',
        color: '#f50057',
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20vh',
    },
    startingPageHeadContainer: {
        borderRight: '3px solid #000',
        paddingRight: '150px',
        width: '20vw',
        height: '50vh',
    },
    formContainer: {
        
        border: '2px solid black',
        borderRadius: '50px',
        padding: '20px 40px 40px 40px',
        textAlign: 'center',
        width: 'min-content',
        backgroundColor: '#b2fcfc',
        // marginLeft: '10vw',
    },
    input: {
        margin: '5px',
        width: '22vw',
    },
    link: {
        margin: '2px',
        fontSize: 'smaller',
        color: '#333'
    },
    linkContainer: {
        margin: '5px',
        display: 'flex',
        justifyContent: 'space-between',
    },
    btn: {
        width: '22vw',
    },  alignItems: 'center',
    
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

export default function Login({ auth, login }) {
    const classes = useStyles()
    const history = useHistory()
    const formik = useFormik({
        initialValues: {
            email: 'abc@gmail.com',
            password: '12345678',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            // alert(JSON.stringify(values, null, 2));
            toastAlert()
            login()
            history.push('/')
        },
    });
    const toastAlert = () => {
        toast.success('Logged in successfully 🎉', {
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
    return (
        <div className={classes.container}>
            <div className={classes.startingPageHeadContainer}>
                <h1>📚 Blog App</h1><br/>
                <p style={{fontStyle:'italic', color:'#333'}}>'Gaining knowledge is the first step to wishdom. <b>Sharing it</b> is the first step to humanity'</p>
                <h3>✍ Add Your Blogs Here.</h3>
            </div>
            <div className={classes.formContainer}>
                <form className={classes.root} noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
                        <div className={classes.headerIcon}>
                            <AccountCircleIcon className={classes.headerIcon}/>
                        </div>
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

            <Toaster
                position="top-center"
                reverseOrder={false} 
            />
            
        </div>
    )
}

