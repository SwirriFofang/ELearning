import { CheckCircle2 } from 'lucide-react'
// import { img } from '../../images'
import './Benefits.css'
import { assets } from '../../../assets/assets'

const benefits = [
  'Master program knowledge at school',
  'The ability to criticize knowledge increases',
  'Respond confidently when encountering difficult situations',
]

export default function Benefits() {
  return (
    <section className="white-band">
      <div className="container benefit">
        <div className="benefit-img">
          <span className="blob blob-orange" />
          {/* <img src={img('boy-school.png')} alt="" /> */}
          <img src={assets.boy2} alt="" />
        </div>

        <div>
          <h2>
            What will your child<br />get after studying at<br />Edudu?
          </h2>
          <ul className="checklist">
            {benefits.map((b) => (
              <li key={b}><CheckCircle2 size={16} /> {b}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}