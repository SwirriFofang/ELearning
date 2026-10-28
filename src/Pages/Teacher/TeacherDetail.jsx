
import { useParams } from "react-router-dom"
import Breadcrumb from "../../Component/CourseComponents/Breadcrumb/Breadcrumb"
import TeacherProfile from "../../Component/teachercomponents/TeacherProfile/TeacherProfile"
import TeacherAbout from "../../Component/teachercomponents/TeacherAbout/TeacherAbout"
import { teachers } from "../../Component/data/teachers"
import { courses } from "../../Component/data/courses"

export default function TeacherDetail() {
  const { id } = useParams()                       // "3" from /teachers/3
  const teacher = teachers.find((t) => t.id === Number(id))

  if (!teacher) {
    return <main className="container teacher-page">Teacher not found.</main>
  }

  // the full course objects this teacher teaches
  const teacherCourses = courses.filter((c) => teacher.courseIds.includes(c.id))

  return (
    <main className="container teacher-page">
      <Breadcrumb
        items={[
          { label: 'Home', to: '/' },
          { label: 'Teacher', to: '/teachers' },
          { label: 'Detail Teacher' },
        ]}
      />

      <div className="teacher-detail-layout">
        <TeacherProfile teacher={teacher} />
        <TeacherAbout teacher={teacher} courses={teacherCourses} />
      </div>
    </main>
  )
}