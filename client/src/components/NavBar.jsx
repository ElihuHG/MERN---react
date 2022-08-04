import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
function NavBar() {
    const jwt = localStorage.getItem('jwt')
    const [state, setState] = useState('')

    useEffect(() => {
        
        if (jwt) {
            setState('logout')
            
        } else {
            setState('login')
        }

    }, [])

    return (
        <div className='bg-zinc-500 flex justify-between px-10 py-5'>
            <h1 className='text-2xl text-white font-bold'>Gato Página</h1>
            <ul className='flex text-white text-1xl'>
                <li><Link className='p-3' to={!jwt ? '/login' : '/logout'}>{state}</Link></li>
                <li><Link className='p-3' to="/index">Home </Link></li>
                <li><Link className='p-3' to="/cat">Create cat</Link></li>
            </ul>
        </div>
    )
}

export default NavBar