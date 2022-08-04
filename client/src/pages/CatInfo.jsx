import { useEffect, useState } from 'react'
import { getOneCat } from '../api/cat.api'
import { Link, useParams } from "react-router-dom";
function CatInfo() {
    const params = useParams()
    const [cat, setCat] = useState([])
    console.log(cat)
    useEffect(() => {
        (async () => {

            const cat = await getOneCat(params.id)
            setCat(cat.data)
        })()
    }, [params.id, getOneCat])

    return (
        <div className='grid grid-cols-2 text-white' >
            <div>
                <img src={cat.caturl} alt="" />
            </div>

            <div >
                <h1 >{cat.catname}</h1>
                <h1 >{cat.catdes}</h1>
                <h1 >{cat.catage}</h1>
                <h1 >${cat.catprice}</h1>
            </div>
        </div>
    )
}

export default CatInfo