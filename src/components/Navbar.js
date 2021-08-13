import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
import { AccountCircle } from '@material-ui/icons';
    const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
    }
    }));

    function Navbar(props) {
        const history = useHistory()
        const classes = useStyles();
        const [anchorEl, setAnchorEl] = React.useState(null);
        const open = Boolean(anchorEl);
        console.log(props);
        const handleMenu = (event) => {
            setAnchorEl(event.currentTarget);
        };

        const handleClose = (route) => {
            history.push(route)
            setAnchorEl(null);
        };

        return (
            <div className={classes.root}>
                <AppBar position="static" color="secondary">
                    <Toolbar className={classes.toolbar}>
                        <Typography edge="start" variant="h6" className={classes.title}>
                            📚 Blog App 
                        </Typography>
                        <div>
                            {
                                props.auth.isLoggedin ? (
                                    <>
                                        <Button 
                                            color="inherit" 
                                            onClick={() => {
                                                history.push('/')
                                                props.logout()
                                            }}
                                            >
                                                Logout
                                        </Button>
                                        <IconButton
                                            aria-label="account of current user"
                                            aria-controls="menu-appbar"
                                            aria-haspopup="true"
                                            onClick={handleMenu}
                                            color="inherit"
                                        >
                                            <MenuIcon />
                                        </IconButton>
                                        <Menu
                                            id="menu-appbar"
                                            anchorEl={anchorEl}
                                            anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                            }}
                                            keepMounted
                                            transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                            }}
                                            open={open}
                                            onClose={ () => {setAnchorEl(null)}} 
                                        >
                                            <MenuItem onClick={() => {handleClose('/')}}>Home</MenuItem>
                                            <MenuItem onClick={() => {handleClose('/blog/add')}}>Add Blog</MenuItem>
                                        </Menu>
                                    </>
                                ) : (
                                    <Button color="inherit" onClick={() => history.push('/login')}>Login</Button>
                                )
                            }
                            
                            
                            
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }

export default withRouter(Navbar);

