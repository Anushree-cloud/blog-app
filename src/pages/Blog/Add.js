import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
// import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
// import { Grid } from '@material-ui/core';

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
    // const [selectedDate, setSelectedDate] = React.useState(Date.now());
    // const handleDateChange = (date) => {
    //     setSelectedDate(date);
    // };
    console.log(props);
    
    const classes = useStyles();
    return (
        <form className={classes.root} noValidate autoComplete="off">
        <div>
            <TextField 
                required 
                label="Name" 
                id="standard-full-width"
                style={{ margin: 8 }}
                placeholder="Name"
                fullWidth
                margin="normal"
                
            />
            <TextField 
                id="standard-textarea"
                label="Multiline Placeholder"
                placeholder="Placeholder"
                multiline
                fullWidth

            />
            <TextField 
                required 
                label="Date" 
                id="standard-full-width"
                style={{ margin: 8 }}
                placeholder="Date"
                fullWidth
                margin="normal"
                
            />
            <TextField 
                required 
                label="Image URL" 
                id="standard-full-width"
                style={{ margin: 8 }}
                placeholder="Image URL"
                fullWidth
                margin="normal"
                
            />
            <Button variant="contained" color="secondary">Add Blog</Button>
        </div>
    </form>
    )
}
