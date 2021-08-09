import React from 'react'

export default function Edit({ match }) {
    console.log(match);
    const { params } = match
    return (
        <div>
            <h1>This is Edit Page of id {params.id}</h1>
        </div>
    )
}
