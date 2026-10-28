

import { assets } from "../../assets/assets";

const bio =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit.'

export const teachers = [
  { id: 1, name: 'Jassica Nephi', years: 5, subject: 'Math', school: 'Weston', image: assets.teacher1, totalCourses: 12, rating: 4.9, reviews: 153, languages: 'English, French' },
  { id: 2, name: 'Henry, Arthur', years: 10, subject: 'English', school: 'Weston', image: assets.teacher2, totalCourses: 30, rating: 4.8, reviews: 210, languages: 'English' },
  { id: 3, name: 'Flores, Juanita', years: 3, subject: 'Math', school: 'VinVi', image: assets.teacher3, totalCourses: 8, rating: 4.7, reviews: 64, languages: 'English, Spanish' },
  { id: 4, name: 'Nguyen, Shane', years: 4, subject: 'Math', school: 'Wing', image: assets.teacher4, totalCourses: 15, rating: 4.9, reviews: 98, languages: 'English, Vietnamese' },
  { id: 5, name: 'Courtney Henry', years: 5, subject: 'Math', school: 'Weston', image: assets.teacher5, totalCourses: 11, rating: 4.6, reviews: 87, languages: 'English' },
  { id: 6, name: 'Leslie Alexander', years: 10, subject: 'English', school: 'Weston', image: assets.teacher6, totalCourses: 28, rating: 4.9, reviews: 176, languages: 'English, French' },
  { id: 7, name: 'Jerome Bell', years: 3, subject: 'Math', school: 'VinVi', image: assets.teacher7, totalCourses: 7, rating: 4.5, reviews: 41, languages: 'English' },
  { id: 8, name: 'Arlene McCoy', years: 4, subject: 'Math', school: 'Wing', image: assets.teacher8, totalCourses: 14, rating: 4.8, reviews: 112, languages: 'English, German' },
].map((t) => ({
  ...t,
  graduated: true,
  about: bio,
  certification: bio,
  // ids of the courses (from courses.js) this teacher teaches
  courseIds: [1, 2],
}))