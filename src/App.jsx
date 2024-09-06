import Home from './pages/home/Home'
import { Outlet, Route, Routes, useLocation } from 'react-router-dom'
import NotFound from './pages/notFound/Index'
import Resourse from './pages/resourse/Resourse'
import Course from './pages/course/Course'
import Navbar from './components/home/Navbar'
import Footer from './components/home/Footer'
import CourseDetails from './pages/course/CourseDetails'
import Blog from './pages/blog/Blog'
import BlogDetails from './pages/blog/BlogDetails'
import { useEffect } from 'react'
import Contact from './pages/contact/Contact'
import Dashboard from './pages/dashboard/dashboard/Dashboard'
import Layout from './pages/dashboard/Layout'
import ContactTop from './components/ContactTop'
import EnrolledCourse from './pages/dashboard/enrolledCourse/EnrolledCourse'
import LearnCourse from './pages/dashboard/enrolledCourse/LearnCourse'
import SignIn from './pages/signin/SignIn'
import SignUp from './pages/signin/Signup'
import Setting from './pages/dashboard/settings/Setting'
import Profile from './pages/dashboard/profile/Profile'
import UserProvider, { useUserContext } from './context/UserProvider'
import MyCourse from './pages/dashboard/myCourse/MyCourse'
import AddCourse from './pages/dashboard/myCourse/AddCourse'
import AllCourse from './pages/dashboard/allCourse/AllCourse'

function App() {

  const { user } = useUserContext()

  const instructor = user.me.role === 'instructor'
  const student = user.me.role === 'student'

  const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [pathname]);
    return null;
  }

  const HomeLayout = () => {
    return (
      <>
        <Navbar />
        <ContactTop />
        <Outlet />
        <Footer />
      </>
    )
  }

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/' element={<HomeLayout />} >
          <Route index path='/' element={<Home />} />
          <Route path='course' element={<Course />} />
          <Route path='course/:id' element={<CourseDetails />} />
          <Route path='resource' element={<Resourse />} />
          <Route path='blog' element={<Blog />} />
          <Route path='blog/:id' element={<BlogDetails />} />
          <Route path='contact' element={<Contact />} />
        </Route>
        <Route path='/dashboard' element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='all-course' element={<AllCourse />} />
          {
            instructor &&
            <>
              <Route path='my-course' element={<MyCourse />} />
              <Route path='my-course/add' element={<AddCourse />} />
            </>
          }
          <Route path='profile' element={<Profile />} />
          {
            student &&
            <>
              <Route path='enrolled' element={<EnrolledCourse />} />
              <Route path='enrolled/:id' element={<LearnCourse />} />
            </>
          }
          <Route path='settings' element={<Setting />} />
          <Route path='*' element={<NotFound />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
