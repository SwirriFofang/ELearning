
import { assets } from '../../../assets/assets'
import './PromoBanner.css'

export default function PromoBanner() {
  return (
    <section className="promo">
      <div className="promo-text">
        <h2>
          Edudu offers you a 30%<br />discount this season
        </h2>
        <p>Promotion valid from May 1, 2023 - June 30, 2023</p>
        <button className="btn btn-brand promo-btn">Explore now</button>
      </div>

      <div className="promo-img">
        <span className="blob blob-orange-promo" />
        <img src={assets.bannerGirl} alt="" />
      </div>
    </section>
  )
}