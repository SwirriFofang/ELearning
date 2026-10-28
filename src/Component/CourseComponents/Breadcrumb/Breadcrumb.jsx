import { Link } from 'react-router-dom'
import './Breadcrumb.css'

// items = [{ label: 'Home', to: '/' }, { label: 'Course' }]
export default function Breadcrumb({ items }) {
  return (
    <p className="breadcrumb">
      {items.map((item, i) => (
        <span key={item.label}>
          {item.to ? <Link to={item.to}>{item.label}</Link> : <strong>{item.label}</strong>}
          {i < items.length - 1 && ' | '}
        </span>
      ))}
    </p>
  )
}