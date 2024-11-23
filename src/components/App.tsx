import { useRef, useState } from "react"

import Navbar from "./Navbar"
import GoToTop from "./GoToTop"
import Footer from "./Footer"
import sectionsInfo from "../sectiondata"
// import { themeValues } from "../types"
import { NavbarHeightProvider } from "../contexts/NavbarHeightContext"

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import ThemeProvider from "../contexts/ThemeContext"

export default function App() {
  
  return (
    <ThemeProvider>
      {/* <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='*' element={<Navigate to='/' />}/>
        </Routes>
      </Router> */}
      <HomePage />
    </ThemeProvider>
  )
}

function HomePage() {
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
      <NavbarHeightProvider>
        {
          sectionsInfo.map((section, index) => {
            return <section.sectionComponent key={index} ref={refs[index]} />
          })
        }
      </NavbarHeightProvider>
      <GoToTop scrolled={scrolled} />
      <Footer />
    </main>
  )
}