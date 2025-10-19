import React from 'react'

const button = (props) => {
    return (
        <div>
            <a className=' btn btn-info' href="" to={props.url}> {props.text}</a>
        </div>
    )
}

export default button
