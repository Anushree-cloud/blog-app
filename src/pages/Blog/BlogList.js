/* first create a new folder blog-app

The app will have 4 pages for now

/blogs
/blogs/add
/blogs/edit/:id
/blogs/details/:id

/blogs
====

Blogs listing - use meterial ui cards to show blog items, 

id, name, image, date, description

/blogs/details/:id
============

Single blog details


/blogs/add    |  /blogs/edit/:id
====================

Blog creation form - name, image, date, description */

// import React from 'react'
// import { Link } from 'react-router-dom'

// export default function BlogList({ blogList }) {
//     return (
//         blogList.map((blogItem) => {
//             return (
//                 <div key={blogItem.id}>
//                     <h1>{blogItem.id}. {blogItem.name}</h1>
//                     <div>
//                         <Link to={`/blog/edit/${blogItem.id}`}>Edit</Link>
//                         <Link to={`/blog/details/${blogItem.id}`}>Details</Link>
//                     </div>
                    
//                 </div>
//             )
//         })
//     )
// }

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    // rootContainer: {
    //     display: 'flex',
    //     flexDirection: 'row',
    //     flexWrap: 'wrap',
    // },
    root: {
        maxWidth: 345,
        margin: 10,
    },
    media: {
        height: 140,
    },
}));

export default function BlogList({ blogList }) {
    const classes = useStyles();

    return (
        blogList.map( blogItem => {
            return (
                <div className={classes.rootContainer}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            {/* <CardMedia
                                className={classes.media}
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="Contemplative Reptile"
                            /> */}
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {blogItem.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {blogItem.details}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                <Link to={`/blog/edit/${blogItem.id}`}>Edit</Link>
                            </Button>
                            <Button size="small" color="primary">
                                <Link to={`/blog/details/${blogItem.id}`}>Details</Link>
                            </Button>
                        </CardActions>
                    </Card>
                </div>
            )
        })
    )
}

