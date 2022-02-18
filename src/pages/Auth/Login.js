import axios from 'axios'
import { Link } from 'react-router-dom'
import { useAuth } from '../../states/auth'


const Login = () => {

    const { user, setUser } = useAuth()

    const url = `${process.env.REACT_APP_API_URL}/auth/login`
    const login = async (e) => {//login function
        e.preventDefault()
        let response = await axios.post(url, {
            email: user.email,
            password: user.password
        })

        console.log(response.data)
    }

    const setEmail = (e) => {//set email
        e.preventDefault()
        setUser({
            ...user, 
            email: e.target.value
        })
    }

    const setPassword = (e) => {//set password
        e.preventDefault()
        setUser({
            ...user, 
            password: e.target.value
        })
    }

    return (
        <div>
            <div className='flex items-center justify-center min-h-screen bg-gray-100'>
                <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">

                    <h3 className="text-2xl font-bold text-center">Login to your account</h3>

                    <form action=''>

                        <div className='mt-4' >{/* EMAIL */}
                            <label className="block" htmlFor="email">Email</label>
                            <input onChange={setEmail} type="text" placeholder="Email" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                        </div>

                        <div className='mt-4'>{/* PASSWORD */}
                            <label className="block" htmlFor="password">Password</label>
                            <input onChange={setPassword} type="text" placeholder="Password" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                        </div>

                        <div className="flex items-baseline justify-between"> {/*SUBMIT BUTTON */}
                            <button onClick={login} className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Login</button>
                            <Link to='/register' className="text-sm text-blue-600 hover:underline">Not registered yet?</Link>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login