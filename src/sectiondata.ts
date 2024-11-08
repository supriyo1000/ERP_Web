import VideoSection from "./components/VideoSection"
import AboutUs from "./components/AboutUs"
import TrustedBrands from "./components/TrustedBrands"
import ContactUs from "./components/ContactUs"
import { sectionsInfoType } from "./types"

/** IMPORT ALL SECTIONS OF THE WEBSITE HERE ONLY! (EXCLUDING NAVBAR AND OTHER FUNCTIONAL COMPONENTS) */
const sectionsInfo: sectionsInfoType = [{
    name: 'Home',
    sectionComponent: VideoSection
  }, {
    name: 'About Us',
    sectionComponent: AboutUs
  }, {
    name: 'Trusted Brands',
    sectionComponent: TrustedBrands
  }, {
    name: 'Contact Us',
    sectionComponent: ContactUs
  }
]

export default sectionsInfo