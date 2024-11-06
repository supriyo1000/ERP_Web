import { useState } from "react"
import Navbar from "./Navbar"
import VideoSection from "./VideoSection"
import TrustedBrands from "./TrustedBrands"
import GoToTop from "./GoToTop"

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

	window.onscroll = handleScroll
  return (
    <div className="relative">
      <Navbar scrolled={scrolled} />
      <VideoSection />
      <TrustedBrands />
      <GoToTop scrolled={scrolled} />
    </div>
  )
}