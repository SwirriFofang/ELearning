import { Calculator, BookOpen, Languages, Palette } from 'lucide-react'
import './Lesson.css'

const subjects = [
  { name: 'Math', icon: Calculator, color: '#8B5CF6', bg: '#EFE9FF' },
  { name: 'Literature', icon: BookOpen, color: '#F59F00', bg: '#FFF3D6' },
  { name: 'English', icon: Languages, color: '#F03E3E', bg: '#FFE3E3' },
  { name: 'Art', icon: Palette, color: '#12B886', bg: '#D3F9E8' },
]

export default function Subjects() {
  return (
    <section className="container subjects">
      <h2 className="navy-title">Lessons revolve around 4 areas</h2>
      <p className="muted">
        Diverse lessons around 4 subjects: Math, literature, English, drawing help children improve their comprehensive knowledge
      </p>

      <div className="subject-row">
        {subjects.map(({ name, icon: Icon, color, bg }) => (
          <div key={name} className="subject-card">
            <span className="icon-box" style={{ background: bg, color }}>
              <Icon size={18} />
            </span>
            {name}
          </div>
        ))}
      </div>
    </section>
  )
}
























// import React from 'react'
// import './Lesson.css'
// import { assets } from '../../../assets/assets'

// const Lesson = () => {
//   return (
//     <div className='lessons'>
//         <div className="lesson-contents">
//             <h2>Lessons revolve around 4 area</h2>
//             <p>Diverse lessons around 4 subjects:
//                 Math,Literature,English,drawing helps children improve
//                 their comprehensive knowledges.
//             </p>
//             <div className="4-subjects">

//                 <div className="m-subject">
//                     <img src={assets.math} alt="" />
//                     <p>Math</p>
//                 </div>

//                 <div className="l-subject">
//                     <img src={assets.literature} alt="" />
//                     <p>Literature</p>
//                 </div>

//                 <div className="e-subject">
//                     <img src={assets.english} alt="" />
//                     <p>English</p>
//                 </div>

//                 <div className="a-subject">
//                     <img src={assets.arts} alt="" />
//                     <p>Art</p>
//                 </div>
//             </div>
//         </div>
      
//     </div>
//   )
// }

// export default Lesson
