import { Form, Formik } from 'formik'
import { useEffect } from 'react'
import { createCat } from '../api/cat.api'
import { useNavigate } from 'react-router-dom'

function CatForm() {
    const navigate = useNavigate()
    useEffect(() => {
        const jwt = localStorage.getItem('jwt')
        if (!jwt) {
            alert('Inicia sesión para crear a tus gatos ')
            navigate('/login')

        }
    }, [])

    return (
        <div className='block p-5 rounded-lg shadow-lg bg-white '>
            <Formik
                initialValues={{
                    catname: "",
                    catprice: "",
                    catage: "",
                    catdes: "",
                    caturl: "",
                }}
                onSubmit={async (values, actions) => {
                    console.log(values)
                    try {
                        const response = await createCat(values)
                        actions.resetForm()
                    } catch (error) {
                        console.error(error)
                    }
                }}
            >

                {({ handleChange, handleSubmit, values, isSubmitting }) => (
                    <Form onSubmit={handleSubmit} className="bg-zinc-100 px-10 w-full">
                        <div className='grid grid-cols-2 gap-4 pt-7'>
                            <div className='form-group mb-6'>

                                <input className='form-control
                                                block
                                                w-full
                                                px-3
                                                py-1.5
                                                text-base
                                                font-normal
                                                text-gray-700
                                                bg-white bg-clip-padding
                                                border border-solid border-gray-300
                                                rounded' type="text" name='catname' onChange={handleChange} value={values.catname} placeholder='Nombre' />

                            </div>

                            <div className='form-group mb-6'>

                                <input className='form-control
                                                block
                                                w-full
                                                px-3
                                                py-1.5
                                                text-base
                                                font-normal
                                                text-gray-700
                                                bg-white bg-clip-padding
                                                border border-solid border-gray-300
                                                rounded' type="text" name='catage' onChange={handleChange} value={values.catage} placeholder="Edad" />
                            </div>
                        </div>
                        <div className='form-group mb-6'>
                            <input className='form-control
                                                block 
                                                w-full
                                                px-3
                                                py-1.5
                                                text-base
                                                font-normal
                                                text-gray-700
                                                bg-white bg-clip-padding
                                                border border-solid border-gray-300
                                                rounded' type="text" name='catprice' onChange={handleChange} value={values.catprice} placeholder='Gatoprecio' />
                        </div>
                        <div className='form-group mb-6'>
                            <textarea className='form-control block
                                                    w-full
                                                    px-3
                                                    py-1.5
                                                    text-base
                                                    font-normal
                                                    text-gray-700
                                                    bg-white bg-clip-padding
                                                    border border-solid border-gray-300
                                                    rounded
                                                    transition
                                                    ease-in-out
                                                    m-0
                                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                                name="catdes" placeholder='Describa a su michi' onChange={handleChange} value={values.catdes} />
                        </div>

                        <div className='form-group mb-6'>
                            <input className='block form-control
                                                w-full
                                                px-3
                                                py-1.5
                                                text-base
                                                font-normal
                                                text-gray-700
                                                bg-white bg-clip-padding
                                                border border-solid border-gray-300
                                                rounded' type="text" name='caturl' onChange={handleChange} value={values.caturl} placeholder="ingrese la imagen" />
                        </div>
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

                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default CatForm