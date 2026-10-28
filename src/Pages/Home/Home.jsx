import React from 'react'
import './Home.css'
import Header from '../../Component/HomePageComponents/Header/Header'
import Lesson from '../../Component/HomePageComponents/Lessons/Lesson'
import Benefits from '../../Component/HomePageComponents/Programs/Benefits'
import WhyChoose from '../../Component/HomePageComponents/Reasons/WhyChoose'
import ClassPreview from '../../Component/HomePageComponents/Freetrails/ClassPreview'
import Testimonials from '../../Component/HomePageComponents/Reviews/Testimonials'
import CtaBanner from '../../Component/HomePageComponents/FAQuestion/CtaBanner'

const Home = () => {
  return (
    <div>
        <Header />
        <Lesson />
        <Benefits />
        <WhyChoose />
        <ClassPreview />
        <Testimonials />
        <CtaBanner />
      
    </div>
  )
}

export default Home
