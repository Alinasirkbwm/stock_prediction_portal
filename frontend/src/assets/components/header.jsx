import React from 'react'
import Button from './button'
const header = () => {
    return (
        <nav className=' navbar container pt-3 pb3 align-items-start'>
            <a className=' navbar-brand text-light' href=""> prediction portal </a>
            <div>
                <Button text='login'></Button>
                <a className=' btn btn-primary' href="">register</a>
            </div>

        </nav>
    )
}

export default header
