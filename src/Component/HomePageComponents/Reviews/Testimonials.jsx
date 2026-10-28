import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
// import { img } from '../../images'
import './Testimonials.css'
import { assets } from '../../../assets/assets'


const reviews = [
  { name: 'Jassica Andrew', avatar: assets.darlene, text: 'My child has improved a lot after finishing school. Thank you very much Edudu' },
  { name: 'Darlene Robertson', avatar: assets.diane, text: 'My child knows how to write very good essays. English ability is also much better. The cost is very cheap, so you should register. Thank you very much Edudu.' },
  { name: 'Dianne Russell', avatar: assets.jessica, text: 'My child has improved a lot after finishing school. Thank you very much Edudu' },
  { name: 'Courtney Henry', avatar: assets.diane, text: 'Great teachers and a flexible schedule. My child loves the live classes!' },
  { name: 'Leslie Alexander', avatar: assets.darlene, text: 'The recorded lessons are perfect for reviewing before exams. Highly recommended.' },
]

function Stars({ size = 12 }) {
  return (
    <span className="stars">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={size} fill="#FBBC04" stroke="#FBBC04" />
      ))}
    </span>
  )
}

// returns true while the screen matches the query, and updates when it is resized
function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches)

  useEffect(() => {
    const media = window.matchMedia(query)
    const update = () => setMatches(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [query])

  return matches
}

export default function Testimonials() {
  const [start, setStart] = useState(0)

  const isSmall = useMediaQuery('(max-width: 900px)')
  const perPage = isSmall ? 1 : 3          // how many reviews are shown

  // show `perPage` reviews, wrapping around the list
  const visible = Array.from({ length: perPage }, (_, i) => reviews[(start + i) % reviews.length])

  // the arrows move by the same number of reviews that are shown
  const move = (dir) =>
    setStart((s) => (s + dir * perPage + reviews.length * 3) % reviews.length)

  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="center-title">What do students say about Edudu?</h2>

        <div className="review-wrap">
          <button className="arrow" onClick={() => move(-1)} aria-label="Previous">
            <ChevronLeft size={16} />
          </button>

          <div className="review-row">
            {visible.map((r, i) => (
              <div key={r.name} className={!isSmall && i === 1 ? 'review mid' : 'review'}>
                <img src={r.avatar} alt="" />
                <h4>{r.name}</h4>
                <Stars />
                <p>{r.text}</p>
              </div>
            ))}
          </div>

          <button className="arrow brand" onClick={() => move(1)} aria-label="Next">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  )
}