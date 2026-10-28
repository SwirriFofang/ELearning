import { Link } from 'react-router-dom'
import './CourseRow.css'

export default function CourseRow({ course }) {
  return (
    <Link to={`/courses/${course.id}`} className="course-row">
      <img src={course.image} alt="" />
      <div>
        <h4>
          Product Management<br />Basic - Course
        </h4>
        <p>
          Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.
        </p>
        <span>
          <b className="price">$ {course.price}</b>{' '}
          <s className="old-price">$ {course.oldPrice}</s>
        </span>
      </div>
    </Link>
  )
}