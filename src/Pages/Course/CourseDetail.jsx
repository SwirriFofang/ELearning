

import { useEffect } from "react"
import { useParams } from "react-router-dom"
import Breadcrumb from "../../Component/CourseComponents/Breadcrumb/Breadcrumb"
import CourseOverview from "../../Component/CourseComponents/CourseOverview/CourseOverview"
import CourseContent from "../../Component/CourseComponents/CourseContent/CourseContent"
import SimilarCourses from "../../Component/CourseComponents/SimilarCourses/SimilarCourses"
import CtaBanner from "../../Component/HomePageComponents/FAQuestion/CtaBanner"
import { courses } from "../../Component/data/courses"
import { teachers } from "../../Component/data/teachers"

export default function CourseDetail() {
  const { id } = useParams()
  const course = courses.find((c) => c.id === Number(id))

  // go back to the top when the visitor opens another course
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!course) {
    return <main className="container course-detail-page">Course not found.</main>
  }

  const teacher = teachers.find((t) => t.id === course.teacherId)
  const similar = courses.filter((c) => c.id !== course.id).slice(0, 3)

  return (
    <>
      <main className="container course-detail-page">
        <Breadcrumb
          items={[
            { label: 'Home', to: '/' },
            { label: 'Course', to: '/courses' },
            { label: 'Detail Course' },
          ]}
        />
        <CourseOverview course={course} teacher={teacher} />
        <CourseContent />
        <SimilarCourses courses={similar} />
      </main>

      <CtaBanner />
    </>
  )
}