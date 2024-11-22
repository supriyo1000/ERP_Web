import { lazy } from 'react'

const VideoSection = lazy(() => import('./components/VideoSection'))
const AboutUs = lazy(() => import('./components/AboutUs'))
// const TrustedBrands = lazy(() => import('./components/TrustedBrands'))
const ContactUs = lazy(() => import('./components/ContactUs'))
import { sectionsInfoType } from "./types"

/** IMPORT ALL SECTIONS OF THE WEBSITE HERE ONLY! (EXCLUDING NAVBAR AND OTHER FUNCTIONAL COMPONENTS) */
const sectionsInfo: sectionsInfoType = [{
    name: 'Home',
    sectionComponent: VideoSection
  }, {
    name: 'About Us',
    sectionComponent: AboutUs
  }, {
  //   name: 'Trusted Brands',
  //   sectionComponent: TrustedBrands
  // }, {
    name: 'Contact Us',
    sectionComponent: ContactUs
  }
]

export default sectionsInfo