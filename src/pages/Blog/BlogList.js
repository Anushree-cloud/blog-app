import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { CardMedia, Grid } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        margin: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    media: {
        height: 140,
    },
    editButton: {
        textDecoration: 'none', 
        color: 'white',
        width: '18vw',
    },
    rootContainer: {
        display: "flex",
        flexDirection: 'row',
        marginTop: '10px',
        justifyContent:'center',
    }
}));

export default function BlogList() {
    const [blogList, setBlogList] = useState([])
    const [loading, setLoading] = useState(true)
    const classes = useStyles();
    const history = useHistory();
    function goToPage(pageUrl) {
        history.push(pageUrl)
    }
    

    useEffect(() => {
        setLoading(true)

        axios.get(`http://localhost:5000/v1/api/blogs`).then( res => {
        console.log(res);
        setBlogList(res.data.data);
        setLoading(false)
        console.log(blogList);
        }).catch( error => {
            console.log(error);
        })

        
    }, [])
    
    
    return (
        <>
        {
            loading ? (
                <h1>Loading.....</h1>
            ) : (
                
                    blogList.length ? (
                        <Grid container spacing={2} className={classes.rootContainer}>
                        {
                        blogList.map( blogItem => {
                            return (
                                <Grid item lg={3} md={3} sm={6} xs={6}>
                                    
                                    <Card className={classes.root} key={blogItem.id}>
        
                                        <CardActionArea>
                                            <CardMedia
                                                className={classes.media}
                                                image={blogItem.image_url}
                                                title="Contemplative Reptile"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2" onClick={() => goToPage(`/blog/details/${blogItem.id}`) }>
                                                    {blogItem.name}
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    {blogItem.description}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
        
                                        <CardActions>
                                            <Button size="large" variant="contained" color="secondary">
                                                <Link to={`/blog/edit/${blogItem.id}`} className={classes.editButton}>
                                                    Edit
                                                </Link>
                                            </Button>
                                        </CardActions>
        
                                    </Card>
                                    
                                </Grid>
                            )
                        })
                    }
                </Grid>
                    ) : (
                        <h1>Nothing To Show!!</h1>
                    )
                
            )
        }
        
        
        </>
    )
}

