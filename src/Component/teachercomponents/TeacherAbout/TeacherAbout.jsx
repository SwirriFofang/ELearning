
import CourseRow from '../CourseRow/CourseRow'
import './TeacherAbout.css'

export default function TeacherAbout({ teacher, courses }) {
  // "Henry, Arthur" -> "Arthur", "Kritsin Watson" -> "Kritsin"
  const firstName = teacher.name.includes(',')
    ? teacher.name.split(',')[1].trim()
    : teacher.name.split(' ')[0]

  return (
    <section className="about-card">
      <h3>About {firstName}</h3>
      <p>{teacher.about}</p>
      <p>{teacher.about}</p>

      <h3>Certification</h3>
      <p>{teacher.certification}</p>

      <h3>Courses ({courses.length})</h3>
      <div className="about-courses">
        {courses.map((c) => (
          <CourseRow key={c.id} course={c} />
        ))}
      </div>
    </section>
  )
}