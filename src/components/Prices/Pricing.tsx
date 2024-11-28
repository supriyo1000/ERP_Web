import Navbar from "../Features/Navbar"
import { useEffect, useState } from "react"
import details from "../Features/FeatureDetails"
import FeaturesAccordion from "./FeaturesAccordion"
import PlanSummary from "./PlanSummary"
import Footer from "../Footer"

export default function Pricing() {
  useEffect(() => {
    document.title = 'Plans and Pricing | eazzyBizz'
  })

  const [checkedFeatures, setCheckedFeatures] = useState (
    details.map(detail => detail.featureID).reduce((acc, id) => {
      acc[id] = false
      return acc
    }, {} as { [key: string]: boolean })
  )

  const selectFeatures = (key: string) => {
    setCheckedFeatures((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }))
  }

  return (
    <main className="min-h-screen flex flex-col items-stretch gap-8">
      <Navbar />
      <div className="mt-8 mx-8 text-text font-source-serif text-4xl text-center">
        Select the apps you want to use in your platform
      </div>
      <FeaturesAccordion checkedFeatures={checkedFeatures} selectFeatures={selectFeatures} />
      <PlanSummary checkedFeatures={checkedFeatures} />
      <Footer />
    </main>
  )
}

