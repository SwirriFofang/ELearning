
import { Check } from 'lucide-react'
import './CourseContent.css'

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit.'

const learnItems = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
]

export default function CourseContent() {
  return (
    <section className="content">
      <h3>Course Details</h3>
      <p>{lorem}</p>
      <p>{lorem}</p>

      <h3>Certification</h3>
      <p>{lorem}</p>

      <h3>Who this course is for</h3>
      <p>{lorem}</p>

      <h3>What you'll learn in this course:</h3>
      <ul className="learn-list">
        {learnItems.map((item, i) => (
          <li key={i}>
            <span className="tick"><Check size={10} strokeWidth={3.5} /></span>
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}