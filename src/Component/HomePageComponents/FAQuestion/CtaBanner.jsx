

import { useState } from 'react'
import { assets } from '../../../assets/assets'
import './CtaBanner.css'


// position of each small round picture around the banner
const avatars = [
  { top: '14%', left: '8%', avatar: assets.darlene},
  { top: '46%', left: '16%',avatar: assets.jessica },
  { top: '76%', left: '6%',avatar: assets.diane},
  { top: '12%', right: '8%',avatar: assets.darlene },
  { top: '52%', right: '12%',avatar: assets.jessica },
  { top: '76%', right: '5%', avatar: assets.diane},
]

export default function CtaBanner() {
  const [phone, setPhone] = useState('')

  const submit = (e) => {
    e.preventDefault()
    if (!phone.trim()) return
    alert(`Thanks! We'll contact you at ${phone}`)
    setPhone('')
  }

  return (
    <div className="container">
      <section className="cta">
        {avatars.map(({avatar,...pos}, i) => (
          <img key={i} className="cta-avatar" style={pos} src={avatar} alt="" />
        ))}

        <h2>Do you still have any questions?</h2>
        <p>
          Don't hesitate to leave us your phone number. We will contact you to<br />
          discuss any questions you may have
        </p>

        <form className="cta-form" onSubmit={submit}>
          <input
            type="tel"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button className="btn btn-brand">Subscribe</button>
        </form>
      </section>
    </div>
  )
}