import { useContext, useState } from 'react'
import Button from './button'
import { Link } from 'react-router-dom'
import { Authcontext } from '../../authprovide'
const header = () => {
    const { islogedin, setislogedin } = useContext(Authcontext)
    const handlelogout = () => {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        setislogedin(false)
    }
    return (
        <nav className=' navbar container pt-3 pb3 align-items-start'>
            <Link className=' navbar-brand text-light' to='/'> prediction portal </Link>
            <div>
                {islogedin ? (
                    <button className=' btn btn-danger' onClick={handlelogout}> logout</button>
                ) : (
                    <>

                        <Button text='login'></Button>
                        <Link className=' btn btn-primary' to='/register'>register</Link>
                    </>
                )
                }
            </div>


        </nav>
    )
}

export default header
