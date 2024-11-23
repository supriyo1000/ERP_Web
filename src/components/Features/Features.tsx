import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <main className="min-h-screen">
      Explore all our features
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Link to='/features/feature' className='feature-grid'>Feature 1</Link>
        <Link to='/features/feature' className='feature-grid'>Feature 2</Link>
        <Link to='/features/feature' className='feature-grid'>Feature 3</Link>
        <Link to='/features/feature' className='feature-grid'>Feature 4</Link>
        <Link to='/features/feature' className='feature-grid'>Feature 5</Link>
      </div>
    </main>
  )
}
