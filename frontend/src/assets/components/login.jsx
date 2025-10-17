import axios from "axios"
import { useContext, useState } from "react"
import { useNavigate } from 'react-router-dom'
import { Authcontext } from "../../authprovide"


const login = () => {

    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const [loading, setloading] = useState(false)
    const [error, seterror] = useState('')
    const navigate = useNavigate()
    const { islogedin, setislogedin } = useContext(Authcontext)
    const loginhandle = async (e) => {
        e.preventDefault();
        setloading(true);
        const userdata = { username, password }

        try {
            const response = await axios.post('http://127.0.0.1:8000/token/', userdata)
            localStorage.setItem('accessToken', response.data.access)
            localStorage.setItem('refreshToken', response.data.refresh)
            console.log('loged in successful', userdata)
            navigate('/')
            setislogedin(true)
        } catch {
            console.error(" invalid credentials ")
            seterror('invalid credentials')

        } finally {
            setloading(false)
        }
    }
    return (
        <>
            <div className=' container'>
                <div className='row justify-content-center bg-light-dark '>
                    <div className=' col-md-6'>
                        <h3 className=' text-light text-center'> create a new account </h3>
                        <form action="" onSubmit={loginhandle}>
                            <input type="text" name="" id="" className=' form-control mb-3' placeholder='enter your name ' value={username} onChange={(e) => setusername(e.target.value)} />

                            <input type="password" className=' form-control mb-3' placeholder=' set a good password  ' value={password} onChange={(e) => setpassword(e.target.value)} />
                            {error && <div className="text-danger ">{error}</div>}
                            {loading ? (
                                <button type=' submit' className=' btn btn-info d-black mx-auto '> loging in ..</button>
                            ) : (
                                <button type=' submit' className=' btn btn-info d-black mx-auto '> login </button>
                            )}

                        </form>
                    </div>

                </div>

            </div>
        </>
    )
}

export default login
