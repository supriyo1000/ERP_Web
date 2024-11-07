import { useRef, useState } from "react"

import Navbar from "./Navbar"
import VideoSection from "./VideoSection"
import AboutUs from "./AboutUs"
import TrustedBrands from "./TrustedBrands"
import ContactUs from "./ContactUs"
import GoToTop from "./GoToTop"
import Footer from "./Footer"

export default function App() {
	const [scrolled, setScrolled] = useState(false)
  const handleScroll = () => {
    const scrollThreshold = window.innerHeight * 0.15; // 15% of viewport height
    if (window.scrollY > scrollThreshold) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
		// console.log(scrolled)
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
      <VideoSection ref={refs[0]} />
      <AboutUs ref={refs[1]} />
      <TrustedBrands ref={refs[2]} />
      <ContactUs ref={refs[3]} />
      <GoToTop scrolled={scrolled} />
      <Footer />
    </main>
  )
}