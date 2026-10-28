

import { assets } from "../../assets/assets"

const description =
  'Course summarizing semester 1 knowledge for 3rd graders according to the program at school. The course includes 120 lessons, which students study for 3 months'

export const categories = ['All Courses', 'Math', 'Literature', 'English', 'Art']

export const courses = [
  { id: 1, category: 'Math', image: assets.math1 },
  { id: 2, category: 'Math', image: assets.math2 },
  { id: 3, category: 'Math', image: assets.math3 },
  { id: 4, category: 'Math', image: assets.math4 },
  { id: 5, category: 'Literature', image: assets.lit1 },
  { id: 6, category: 'Literature', image: assets.lit2 },
  { id: 7, category: 'Literature', image: assets.lit3 },
  { id: 8, category: 'Literature', image: assets.lit4 },
].map((c) => ({
  ...c,
  title: `${c.category} course for 3rd grade children`,
  description,
  price: 380,
  oldPrice: 500,
  students: 40,

  // used on the Course Detail page
  detailTitle: `${c.category === 'Math' ? 'Maths' : c.category} - for Standard 3 Students | Episode ${c.id}`,
  lessons: 49,
  completion: '1 Month',
  teacherId: 1,              // id of a teacher from teachers.js
  learners: '12,000+',
  detailPrice: 200,

}))