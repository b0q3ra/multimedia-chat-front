import axios from 'axios'
import { Link } from 'react-router-dom'

const Register = () => {

    return(
        <div>
            <div className='flex items-center justify-center min-h-screen bg-gray-100'>
                <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">

                    <h3 className="text-2xl font-bold text-center">Login to your account</h3>

                    <form action=''>

                        <div className='mt-4'>{/* EMAIL */}
                            <label className="block" for="email">Email</label>
                            <input type="text" placeholder="Email" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                        </div>

                        <div className='mt-4'>{/* PASSWORD */}
                            <label className="block" for="password">Password</label>
                            <input type="text" placeholder="Password" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                        </div>

                        <div className='mt-4'>{/* CONFIRM PASSWORD */}
                            <label className="block" for="password">Confirm Password</label>
                            <input type="text" placeholder="Password" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                        </div>

                        <div class="flex items-baseline justify-between"> {/*SUBMIT BUTTON */}
                            <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Register</button>
                            <a href="#" className="text-sm text-blue-600 hover:underline"><Link to='/login'>Already registered?</Link></a>
                         </div>
                         
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register