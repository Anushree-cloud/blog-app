import React from 'react'

export default function Details(props) {
    console.log(props);
    return (
        <div>
            This is Details page of id {props.match.params.id}
        </div>
    )
}
