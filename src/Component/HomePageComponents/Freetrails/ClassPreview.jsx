import { Volume2, Users, PlayCircle } from 'lucide-react'
// import { img } from '../../images'
import './ClassPreview.css'
import { assets } from '../../../assets/assets'

const modes = [
  { label: 'Audio Classes', icon: Volume2, color: '#F03E3E', bg: '#FFE3E3' },
  { label: 'Live Classes', icon: Users, color: '#8B5CF6', bg: '#EFE9FF' },
  { label: 'Recorded Class', icon: PlayCircle, color: '#12B886', bg: '#D3F9E8' },
]

export default function ClassPreview() {
  return (
    <section className="container class-preview">
      <h2 className="center-title">What's in the class at Edudu?</h2>
      <p className="muted">
        Online classes with teachers, continuous questions and answers during class if you do not understand. At the end of the session, the lesson is recorded for your child to review
      </p>
      <button className="btn btn-brand">Free trial lesson</button>

      <div className="preview-card">
        {/* <img src={img('class-preview.jpg')} alt="" /> */}
        <img src={assets.trail} alt="" />
      </div>

      <div className="mode-row">
        {modes.map(({ label, icon: Icon, color, bg }) => (
          <div key={label} className="mode">
            <span className="icon-box" style={{ background: bg, color }}>
              <Icon size={16} />
            </span>
            {label}
          </div>
        ))}
      </div>
    </section>
  )
}