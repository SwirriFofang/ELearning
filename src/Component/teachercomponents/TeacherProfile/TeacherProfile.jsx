import { Star } from 'lucide-react'
import { FacebookIcon, InstagramIcon, TwitterIcon, LinkedinIcon } from './SocialIcons'
import './TeacherProfile.css'

export default function TeacherProfile({ teacher }) {
  return (
    <aside className="profile-card">
      <img className="profile-photo" src={teacher.image} alt={teacher.name} />
      <h2>{teacher.name}</h2>

      <ul className="profile-stats">
        <li>
          <span>Total Course</span>
          <b className="orange">{teacher.totalCourses}</b>
        </li>

        <li>
          <span>Ratings</span>
          <span className="rating">
            <Star size={14} fill="#FBBC04" stroke="#FBBC04" />
            {teacher.rating}(<u className="orange-link">{teacher.reviews}</u>)
          </span>
        </li>

        <li>
          <span>Experiences</span>
          <span>{teacher.years} Years</span>
        </li>

        <li>
          <span>Graduated</span>
          <span>{teacher.graduated ? 'Yes' : 'No'}</span>
        </li>

        <li>
          <span>Language</span>
          <span>{teacher.languages}</span>
        </li>

        <li>
          <span>Social</span>
          <span className="social">
            <a href="#" aria-label="Facebook"><FacebookIcon /></a>
            <a href="#" aria-label="Instagram" className="active"><InstagramIcon /></a>
            <a href="#" aria-label="Twitter"><TwitterIcon /></a>
            <a href="#" aria-label="LinkedIn"><LinkedinIcon /></a>
          </span>
        </li>
      </ul>
    </aside>
  )
}