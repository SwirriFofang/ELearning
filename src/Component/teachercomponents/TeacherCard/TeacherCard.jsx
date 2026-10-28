import { Star } from 'lucide-react'
import './TeacherCard.css'
import { Link } from 'react-router-dom'

export default function TeacherCard({ teacher }) {
  return (
    <Link  to={`/teachers/${teacher.id}`} className="teacher-card">
      <img src={teacher.image} alt={teacher.name} />

      <h3>{teacher.name}</h3>

      <span className="teacher-stars">
        {[...Array(5)].map((_, i) => (
          
          <Star key={i} size={11} fill="#FBBC04" stroke="#FBBC04" />
        ))}
      </span>

      <p>
        {teacher.years} years of experience teaching {teacher.subject}.
        Currently working at {teacher.school} school.
      </p>
    </Link>
  )
}