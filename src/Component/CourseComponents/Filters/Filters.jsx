import { Search, ChevronDown } from 'lucide-react'
import { categories } from '../../data/courses'
import './Filters.css'

export default function Filters({ category, setCategory, query, setQuery, sort, setSort }) {
  return (
    <>
      <div className="pills">
        {categories.map((c) => (
          <button
            key={c}
            className={c === category ? 'pill active' : 'pill'}
            onClick={() => setCategory(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="search-row">
        <div className="search">
          <input
            placeholder="Search Course, Teacher name"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button aria-label="Search"><Search size={16} /></button>
        </div>

        <div className="sort">
          <label>Sort by:</label>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="latest">Latest</option>
            <option value="low">Price: low to high</option>
            <option value="high">Price: high to low</option>
          </select>
          <ChevronDown size={14} />
        </div>
      </div>
    </>
  )
}