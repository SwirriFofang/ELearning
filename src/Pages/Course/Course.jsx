import { useState } from 'react'

import Filters from '../../Component/CourseComponents/Filters/Filters'
import PromoBanner from '../../Component/CourseComponents/PromoBanner/PromoBanner'
import CourseSection from '../../Component/CourseComponents/CourseSection/CourseSection'
import { courses } from '../../Component/data/courses'
import Breadcrumb from '../../Component/CourseComponents/Breadcrumb/Breadcrumb'

export default function Course() {
  const [category, setCategory] = useState('All Courses')
  const [query, setQuery] = useState('')
  const [sort, setSort] = useState('latest')

  // 1. filter by category and search text
  let list = courses.filter(
    (c) =>
      (category === 'All Courses' || c.category === category) &&
      c.title.toLowerCase().includes(query.toLowerCase())
  )

  // 2. sort
  if (sort === 'latest') list = [...list].sort((a, b) => b.id - a.id)
  if (sort === 'low') list = [...list].sort((a, b) => a.price - b.price)
  if (sort === 'high') list = [...list].sort((a, b) => b.price - a.price)

  // 3. one section per category that still has courses
  const sections = ['Math', 'Literature'].filter((s) => list.some((c) => c.category === s))

  return (
    <main className="container course-page">
      <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Course' }]} />
      <PromoBanner />
      <Filters
        category={category} setCategory={setCategory}
        query={query} setQuery={setQuery}
        sort={sort} setSort={setSort}
      />

      {sections.length === 0 && <p className="no-results">No courses found.</p>}

      {sections.map((s) => (
        <CourseSection
          key={s}
          title={`${s} Course`}
          courses={list.filter((c) => c.category === s)}
        />
      ))}
    </main>
  )
}