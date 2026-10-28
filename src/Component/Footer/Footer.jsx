// import { img } from '../../images'
import { assets } from '../../assets/assets'
import './Footer.css'

const columns = {
    Courses: ['Classroom courses', 'Virtual classroom courses', 'E-learning courses', 'Video Courses', 'Offline Courses'],
    Community: ['Learners', 'Partners', 'Developers', 'Transactions', 'Blog', 'Teaching Center'],
    'Quick links': ['Home', 'Professional Education', 'Courses', 'Admissions', 'Testimonial', 'Programs'],
    More: ['Press', 'Investors', 'Terms', 'Privacy', 'Help', 'Contact'],
}

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-inner">
                <div>
                    <div className="logo small">
                        <img src={assets.bee} alt="" /> Edudu
                    </div>
                    <div className="footer-social">
                        <span>f</span>
                        <span>t</span>
                        <span>in</span>
                    </div>
                    <p className="footer-note">
                        ©2020 Edudu.co<br />
                        Edudu is a registered trademark of Edudu.co
                    </p>
                </div>

                {Object.entries(columns).map(([title, links]) => (
                    <div key={title}>
                        <h4>{title}</h4>
                        {links.map((l) => (
                            <a key={l} href="#">{l}</a>
                        ))}
                    </div>
                ))}
            </div>
        </footer>
    )
}