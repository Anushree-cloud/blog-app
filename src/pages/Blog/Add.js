import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

// import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
        margin: theme.spacing(1),
        // width: '25ch',
        },
    },
}));

export default function Add(props) {
    const [selectedDate, setSelectedDate] = React.useState(Date.now());
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
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
            {/* <MuiPickersUtilsProvider  >
                <Grid>
                    <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Date picker dialog"
                        format="MM/dd/yyyy"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </Grid>
            </MuiPickersUtilsProvider> */}
        </div>
    </form>
    )
}
