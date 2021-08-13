import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'

export default function Home(props) {
    return (
        <div style={{position: 'absolute', top: '30vh', left: '35%'}}>
            <h1>Welcome To Blog App 🎉</h1>
            {
                props.auth.isLoggedin ? (
                    <Button variant="contained" color="secondary"><Link to='/blog' style={{textDecoration: 'none', color: 'white'}}>See Blogs</Link></Button>
                ) : (
                    <p style={{fontStyle:'italic'}}>Login to Show blogs...</p>
                )
            }
            
        </div>
    )
}
