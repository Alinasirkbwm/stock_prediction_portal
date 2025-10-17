import { useState, useContext, createContext } from 'react'
const Authcontext = createContext();
const authprovide = ({ children }) => {
    const [islogedin, setislogedin] = useState(
        !!localStorage.getItem('accessToken',)
    )
    return (
        <Authcontext.Provider value={{ islogedin, setislogedin }}>
            {children}
        </Authcontext.Provider>
    )
}

export default authprovide

export { Authcontext };