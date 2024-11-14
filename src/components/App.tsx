import { useRef, useState, useEffect } from "react"

import Navbar from "./Navbar"
import GoToTop from "./GoToTop"
import Footer from "./Footer"
import sectionsInfo from "../sectiondata"

export default function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme'))
  useEffect(() => {
    switch (theme) {
      case 'dark':
        if (theme !== null) document.body.classList.add(theme)
        break
      case '':
        break
      default:
        if (window.matchMedia("prefers-color-scheme: dark")) {
          document.body.classList.add('dark')
          localStorage.setItem('theme', 'dark')
          setTheme('dark')
        }
        else {
          localStorage.setItem('theme', '')
          setTheme('')
        }
    }
  }, [])
  const toggleTheme = () => {
    if (document.body.classList.contains('dark')) {
      document.body.classList.remove('dark')
      localStorage.setItem('theme', '')
      setTheme('')
    }
    else {
      document.body.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setTheme('dark')
    }
  }

	const [scrolled, setScrolled] = useState(false)
  const handleScroll = () => {
    const scrollThreshold = window.innerHeight * 0.15; // 15% of viewport height
    if (window.scrollY > scrollThreshold) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  const refs: React.RefObject<HTMLDivElement>[] = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null)
  ]

	window.onscroll = handleScroll
  return (
    <main className="relative">
      <Navbar scrolled={scrolled} sectionRefs={refs} />
      {
        sectionsInfo.map((section, index) => {
          return <section.sectionComponent key={index} ref={refs[index]} />
        })
      }
      <GoToTop scrolled={scrolled} />
      <Footer />
    </main>
  )
}