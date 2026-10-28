//use rafce
import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Footer from './Component/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Course from './Pages/Course/Course'
import Teacher from './Pages/Teacher/Teacher'
import TeacherDetail from './Pages/Teacher/TeacherDetail'
import CourseDetail from './Pages/Course/CourseDetail'

const App = () => {


  return (
    <>
    <Navbar />
    
    <div className='app'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Course />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/teachers" element={<Teacher />} />
        <Route path="/teachers/:id" element={<TeacherDetail />} />
      </Routes>
        
       
       
       
        
      
    </div>
    <Footer />
    </>
  )
}

export default App
