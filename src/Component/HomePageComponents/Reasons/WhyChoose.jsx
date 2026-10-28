import { assets } from '../../../assets/assets'
import './WhyChoose.css'

const reasons = [
  {
    image: assets.exp,
    title: 'Experienced teacher',
    text: 'Instructors from all over Vietnam and around the world, providing quality learning experiences and helping students develop their full potential',
  },
  {
    image: assets.create,
    title: 'Creative program',
    text: "Curriculum designed around each student's abilities and needs, with engaging learning activities and continuous two-way interaction.",
  },
  {
    image: assets.pig,
    title: 'Appropriate cost',
    text: 'Flexible payment, suitable to personal financial situation and study schedule. Pay monthly, by course or "study now, pay later"',
  },
]

export default function WhyChoose() {
  return (
    <section className="why">
      <div className="container">
        <h2 className="center-title">Why should you choose Edudu?</h2>
        <div className="why-grid">

          {reasons.map((r) => (
            <div key={r.title} className="why-card">
              <div className="why-image"> <img src= {r.image} /> </div>
              <h3>{r.title}</h3>
              <p>{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}