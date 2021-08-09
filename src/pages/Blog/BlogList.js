import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { CardMedia } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link, useHistory } from 'react-router-dom';
import { Grid, Paper } from '@material-ui/core';

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
        width: '35ch',
    },
    rootContainer: {
        display: "flex",
        flexDirection: 'row',
        marginTop: '10px',
    }
}));

export default function BlogList({ blogList }) {
    const classes = useStyles();
    const history = useHistory();
    function goToPage(pageUrl) {
        history.push(pageUrl)
    }
    return (
        blogList.map( blogItem => {
            return (
                <Grid container spacing={2} className={classes.rootContainer}>
                    <Grid item>
                        {/* <Paper> */}
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image={blogItem.url}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2" onClick={() => goToPage(`/blog/details/${blogItem.id}`) }>
                                            {blogItem.name}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {blogItem.details}
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
                        {/* </Paper> */}
                    </Grid>
                </Grid>
            )
        })
    )
}

