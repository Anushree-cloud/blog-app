import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { CardMedia, Grid } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        margin: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'white',
        backgroundColor: 'black'
    },
    media: {
        height: 140,
        borderBottom: '3px solid white',
    },
    editButton: {
        textDecoration: 'none', 
        color: 'white',
        width: '18vw',
    },
    rootContainer: {
        display: "flex",
        flexDirection: 'row',
        flexWrap: 'wrap',
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
            setBlogList(res.data.data);
            setLoading(false)
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
                                <Grid item lg={3} md={3} sm={6} xs={6} key={blogItem.id}>
                                    
                                    <Card className={classes.root} onClick={() => goToPage(`/blog/details/${blogItem.id}`)}>
        
                                        <CardActionArea>
                                            <CardMedia
                                                className={classes.media}
                                                image={blogItem.image_url}
                                                title="Contemplative Reptile"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    {blogItem.name}
                                                </Typography>
                                                {/* <Typography variant="body2" color="textSecondary" component="p">
                                                    {blogItem.description}
                                                </Typography> */}
                                            </CardContent>
                                        </CardActionArea>
        
                                        {/* <CardActions>
                                            <Button size="large" variant="contained" color="secondary">
                                                <Link to={`/blog/edit/${blogItem.id}`} className={classes.editButton}>
                                                    Edit
                                                </Link>
                                            </Button>
                                        </CardActions> */}
        
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

