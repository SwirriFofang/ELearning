
import { useState } from 'react'
import './CourseOverview.css'
import { ChevronDown, Play, Star } from 'lucide-react'
import { assets } from '../../../assets/assets'
import { Link } from 'react-router-dom'

export default function CourseOverview({ course, teacher }) {
  const [added, setAdded] = useState(false)

  return (
    <section className="overview">
      <div className="overview-video">
        <img src={assets.courseVideo} alt="" />
        <button className="play-btn" aria-label="Play video">
          <Play size={16} fill="#fff" stroke="#fff" />
        </button>
      </div>

      <div className="overview-info">
        <h1>{course.detailTitle}</h1>

        <p>
          Number of lessons: <b>{course.lessons} Lesson</b>
          <a href="#" className="view-detail">
            View detail <ChevronDown size={13} />
          </a>
        </p>
        <p>Completion time: <b>{course.completion}</b></p>
        <p>
          Teacher:{' '}
          {teacher && (
            <Link to={`/teachers/${teacher.id}`} className="teacher-link">
              {teacher.name}
            </Link>
          )}
        </p>
        <p>Students have learned: <b>{course.learners}</b></p>
        <p className="review-line">
          Review:
          <span className="review-stars">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} fill="#FBBC04" stroke="#FBBC04" />
            ))}
          </span>
        </p>
        <p className="price-line">Price: <b>{course.detailPrice}$</b></p>

        <div className="overview-buttons">
          <button
            className="btn btn-brand"
            onClick={() => setAdded(true)}
          >
            {added ? 'Added ✓' : 'Add to cart'}
          </button>
          <button className="btn btn-soft">Free trial lesson</button>
        </div>
      </div>
    </section>
  )
}