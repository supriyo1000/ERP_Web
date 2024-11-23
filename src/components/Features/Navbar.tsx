import { Link } from 'react-router-dom'
import ThemeToggler from '../ThemeToggler'

export default function Navbar() {
  return (
    <nav className='sticky top-0 w-full text-text bg-background border-b-2 border-[#808080] z-[100] px-8 py-4 flex items-center'>
      <Link to='/' className='font-source-serif text-4xl font-bold'>
        eazzyBizz
      </Link>
      <ThemeToggler />
    </nav>
  )
}

