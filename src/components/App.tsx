import { useRef, useState } from "react"

import Navbar from "./Navbar"
import GoToTop from "./GoToTop"
import Footer from "./Footer"
import sectionsInfo from "../sectiondata"

export default function App() {
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