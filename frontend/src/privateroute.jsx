import { use, useContext } from "react";
import { Authcontext } from './authprovide'
import { Navigate } from 'react-router-dom'
import React from 'react'

const privateroute = ({ Children }) => {
    const { islogedin } = useContext(Authcontext)
    return islogedin ? (
        Children
    ) : (
        <Navigate to='/login' />
    )
}

export default privateroute

