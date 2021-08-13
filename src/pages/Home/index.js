import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'

export default function Home() {
    return (
        <div style={{position: 'absolute', top: '30vh', left: '35%'}}>
            <h1>Welcome To Blog App 🎉</h1>
            <Button variant="contained" color="secondary"><Link to='/blog' style={{textDecoration: 'none', color: 'white'}}>See Blogs</Link></Button>
        </div>
    )
}
