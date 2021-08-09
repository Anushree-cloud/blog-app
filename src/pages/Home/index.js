import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'

export default function Home() {
    return (
        <div>
            <h1>Welcome To Blog App 🎉</h1>
            <Button variant="contained" color="secondary"><Link to='/blog' style={{textDecoration: 'none', color: 'white'}}>See Blogs</Link></Button>
        </div>
    )
}
