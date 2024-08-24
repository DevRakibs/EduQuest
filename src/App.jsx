import { Box } from '@mui/material'
import Home from './pages/home/Home'
import { Outlet, Route, Routes } from 'react-router-dom'
import NotFound from './pages/notFound/Index'
import Resourse from './pages/resourse/Resourse'
import Navbar from './pages/home/Navbar'
import Course from './pages/course/Course'

function App() {

  const HomeLayout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    )
  }

  return (
    <Routes>
      <Route element={<HomeLayout />} >
        <Route index path='/' element={<Home />} />
        <Route path='/course' element={<Course />} />
        <Route path='/resourse' element={<Resourse />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
