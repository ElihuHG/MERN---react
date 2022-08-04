import { Route, Routes } from 'react-router-dom'
import Index from './pages/Index'
import CatForm from './pages/CatForm'
import NotFound from './pages/NotFoud'
import NavBar from './components/NavBar'
import CatInfo from './pages/CatInfo'
import Login from './pages/Login'
import Logout from './pages/Logout'

function App() {
  const jwt = localStorage.getItem('jwt')
  return (
    <div className='bg-zinc-900 '>
      <>
        <NavBar />
        <div className="container mx-auto py-10 px-20">
          <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/logout' element={<Logout/>}/>
            <Route path='/index' element={<Index />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/cat' element={<CatForm />} />
            <Route path='/cat/:id' element={<CatInfo/>}/>
        </Routes>
         
        </div>
      </>
    </div>
  )
}

export default App
