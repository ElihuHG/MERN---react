import { useEffect, useState } from 'react'
import { getCatsRequest } from '../api/cat.api'
import { useNavigate } from 'react-router-dom'

function Index() {
    const jwt = localStorage.getItem('jwt')
    const [cats, setCat] = useState([])
    // location.reload();

    useEffect(() => {
        async function loadCat() {
            const response = await getCatsRequest()
            setCat(response.data)
            // console.log(response.data)
        }
        loadCat()
    }, [])

    const navigate = useNavigate()

    return (
        <div>
            <h1 className='text-3xl text-white font-bold text-center'>
                Instacat
            </h1>
            
                <div className='grid grid-cols-3 gap-4'>

                    {
                        cats.map(cat => (
                            <a  onClick={()=> jwt ? navigate(`/cat/${cat._id}`) : alert('inicia sesión')} key={cat._id} >
                                <div className='bg-white p-5 rounded-md' >
                                    <h1 className='text-2xl font-bold text-center'>{cat.catname}</h1>
                                
                                    {/* <h3>{cat.catprice}</h3>
                                    <h3>{cat.catdes}</h3> */}
                                    <img className='p-5' src={cat.caturl} alt="gato-imagen" />
                                </div>
                            </a>
                        ))
                    }
                </div>

        </div>
    )
}

export default Index