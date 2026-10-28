import { ShoppingCart } from 'lucide-react'
import './CourseCard.css'
import { Link } from 'react-router-dom'

const dotColors = ['#3b5bdb', '#7048e8', '#f59f00', '#12b886', '#e8590c']

export default function CourseCard({ course }) {
  return (
    <article className="course-card">
      <Link to={`/courses/${course.id}`} className="course-card-img">
        <img src={course.image} alt="" />
        <span className="students-pill">
          <span className="dots">
            {dotColors.map((c) => (
              <i key={c} style={{ background: c }} />
            ))}
          </span>
          + {course.students} students
        </span>
      </Link>

      <div className="course-card-body">
        <Link to={`/courses/${course.id}`}>
          <h3>{course.title}</h3>
        </Link>
        <p>{course.description}</p>

        <div className="price-row">
          <span>
            <b className="price">$ {course.price}</b>{' '}
            <s className="old-price">$ {course.oldPrice}</s>
          </span>
          <button className="cart-btn" aria-label="Add to cart">
            <ShoppingCart size={16} />
          </button>
        </div>
      </div>
    </article>
  )
}