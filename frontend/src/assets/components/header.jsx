import React from 'react'
import Button from './button'
import { Link } from 'react-router-dom'
const header = () => {
    return (
        <nav className=' navbar container pt-3 pb3 align-items-start'>
            <Link className=' navbar-brand text-light' to='/'> prediction portal </Link>
            <div>
                <Button text='login'></Button>
                <Link className=' btn btn-primary' to='/register'>register</Link>
            </div>

        </nav>
    )
}

export default header
