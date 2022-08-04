import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Logout(){

    const navigate = useNavigate()

    useEffect(()=>{
        localStorage.removeItem('jwt')
        setTimeout(()=>{
     
            navigate('/login')

        },1000)
    },[])
    
    return(
        <div className="">
           <h1 className="text-white"> Saliendo..</h1>
        </div>
    )
}

export default Logout