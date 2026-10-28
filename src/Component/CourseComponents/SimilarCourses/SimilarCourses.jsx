
import CourseRow from '../../teachercomponents/CourseRow/CourseRow'
import './SimilarCourses.css'

export default function SimilarCourses({ courses }) {
  return (
    <section className="similar">
      <div className="similar-head">
        <h3>Similar Courses</h3>
        <a href="#">See more &gt;</a>
      </div>

      <div className="similar-grid">
        {courses.map((c) => (
          <CourseRow key={c.id} course={c} />
        ))}
      </div>
    </section>
  )
}