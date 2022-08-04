import { Form, Formik } from 'formik'
import { logIn } from '../api/cat.api'
import { useNavigate } from 'react-router-dom'
function Login() {
    const navigate = useNavigate()
    return (
        
        <div className='block p-5 rounded-lg shadow-lg bg-white '>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                }}
                onSubmit={async (values, actions)=>{
                    const errordiv = document.getElementById('error')
                    try {
                        console.log(values)
                        const response = await logIn(values)
                        
                        if(response.status >= 300){
                            console.log('mal')
                            actions.resetForm()
                            // return false
                        }else{
                            console.log(response.data)
                            localStorage.setItem('jwt', `Bearer ${response.data}`)
                            navigate('/index')
                        }
                       
                       
                    } catch (error) {
                        console.error(error)
                    }
                }}>
                {({ handleChange, handleSubmit, values, isSubmitting }) => (
                    <Form onSubmit={handleSubmit} className="bg-zinc-100 px-10 w-full">
                        <div className='form-group mb-6'>
                            <input className='bg-slate-50 form-control
                                                block
                                                w-full
                                                px-3
                                                py-1.5
                                                text-base
                                                font-normal
                                                text-gray-700 bg-clip-padding
                                                border border-solid border-gray-300
                                                rounded ' name='email' type='email' placeholder='Email' value={values.email} onChange={handleChange} />
                        </div>

                        <div className='form-group mb-6'>
                            <input className='bg-slate-50 form-control
                                                block
                                                w-full
                                                px-3
                                                py-1.5
                                                text-base
                                                font-normal
                                                text-gray-700 bg-clip-padding
                                                border border-solid border-gray-300
                                                rounded ' type='password' name='password' placeholder='Password' values={values.password} onChange={handleChange} />

                            <div className='pb-7'>

                                <button className=' w-full
                                                    px-6
                                                    py-2.5
                                                    bg-blue-600
                                                    text-white
                                                    font-medium
                                                    text-xs
                                                    leading-tight
                                                    uppercase
                                                    rounded
                                                    shadow-md
                                                    hover:bg-blue-700 hover:shadow-lg
                                                    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                                                    active:bg-blue-800 active:shadow-lg
                                                    transition
                                                    duration-150
                                                    ease-in-out' type='submit' disabled={isSubmitting}>
                                    {isSubmitting ? "Saving..." : "Save"}
                                </button>
                            </div>
                            <div id="error"></div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Login