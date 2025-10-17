import { use, useState } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

const register = () => {
  const [username, setusername] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [errors, seterrors] = useState({})
  const [success, setsuccess] = useState(false)
  const [loading, setloading] = useState(false)
  const handleregistration = async (e) => {
    e.preventDefault();
    setloading(true);
    const userdata = {
      username, email, password
    }
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/", userdata)
      console.log('response data ', response.data)
      console.log("loged in successfully")
      seterrors({})
      setsuccess(true)

    } catch (error) {
      seterrors(error.response.data)
      console.error('registration error ', error.response.data)
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
            <form action="" onSubmit={handleregistration}>
              <input type="text" name="" id="" className=' form-control mb-3' placeholder='enter your name ' value={username} onChange={(e) => setusername(e.target.value)} />
              <small >{errors.username && <div className=' text-danger'>{errors.username}</div>}</small>
              <input type="email" className=' form-control mb-3' placeholder='enter you email ' value={email} onChange={(e) => setemail(e.target.value)} />
              <input type="password" className=' form-control mb-3' placeholder=' set a good password  ' value={password} onChange={(e) => setpassword(e.target.value)} />
              <small >{errors.username && <div className=' text-danger'>{errors.password}</div>}</small>
              {success && <div className=' alert alert-danger '> registeration successfully</div>}
              {loading ? (
                <button type=' submit' className=' btn btn-info d-black mx-auto '> please wait ..</button>
              ) : (
                <button type=' submit' className=' btn btn-info d-black mx-auto '> register</button>
              )}

            </form>
          </div>

        </div>

      </div>
    </>
  )
}

export default register
