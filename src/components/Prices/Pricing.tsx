import Navbar from "../Features/Navbar"
import { useEffect } from "react"
// import details from "../Features/FeatureDetails"
import FeaturesAccordion from "./FeaturesAccordion"
import PlanSummary from "./PlanSummary"
import Footer from "../Footer"

export default function Pricing() {
  useEffect(() => {
    document.title = 'Plans and Pricing | eazzyBizz'
  })

  return (
    <main className="h-screen flex flex-col items-stretch gap-8">
      <Navbar />
      <div className="mt-8 mx-8 text-text font-source-serif text-4xl text-center">
        Select the apps you want to use in your platform
      </div>
      <FeaturesAccordion />
      <PlanSummary />
      <Footer />
    </main>
  )
}

