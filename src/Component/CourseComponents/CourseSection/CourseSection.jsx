
import CourseCard from '../CourseCard/Course'
import './CourseSection.css'

export default function CourseSection({ title, courses }) {
  return (
    <section className="course-section">
      <div className="section-head">
        <h2>{title}</h2>
        <a href="#">See more &gt;</a>
      </div>

      <div className="course-grid">
        {courses.map((c) => (
          <CourseCard key={c.id} course={c} />
        ))}
      </div>
    </section>
  )
}