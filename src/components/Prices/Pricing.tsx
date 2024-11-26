import Navbar from "../Features/Navbar"
import { useEffect, useState } from "react"
import details from "../Features/FeatureDetails"

export default function Pricing() {
  useEffect(() => {
    document.title = 'Plans and Pricing | eazzyBizz'
  })

  const [openIndex, setOpenIndex] = useState<boolean>(false)
  const toggleAccordion = () => {
    setOpenIndex(prev => !prev)
  }

  const [checkedFeatures, setCheckedFeatures] = useState (
    details.reduce((acc: { [key: string]: boolean }, curr) => {
      acc[curr.featureID] = false;
      return acc;
    }, {})
  )

  const selectFeatures = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedFeatures(prev => {
      let newData = prev
      newData[e.target.id] = !newData[e.target.id]
      return newData
    })
    console.log(checkedFeatures)
  }

  useEffect(() => console.log(checkedFeatures), [checkedFeatures])
  
  return (
    <main className="h-screen flex flex-col items-stretch">
      <Navbar />
      <div className="my-16 mx-8 text-text font-source-serif text-4xl text-center">
        Select the apps you want to use in your platform
      </div>
      <div className=" mx-32 mt-4">
        <div className="border-y transition-all">
          <div
            className={`flex items-center justify-between p-4 cursor-pointer hover:bg-gray-100 ${openIndex ? 'bg-gray-100' : ''}`}
            onClick={() => toggleAccordion()}
          >
            <h3 className="text-lg font-semibold text-gray-800">
              Select Apps to Customize Pricing (Hover to see details)
            </h3>
            <svg
              className={`w-5 h-5 transition-transform ${openIndex ? 'rotate-180' : ''}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 7l7 7 7-7" />
            </svg>
          </div>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex ? 'max-h-[1000px]' : 'max-h-0'
            }`}
          >
            <div className="p-4">
              <div className="px-4 grid grid-cols-2 gap-4">
                {
                  details.map((detail, index) => (
                    <label key={index} htmlFor={detail.featureID} className={`${checkedFeatures[detail.featureID] ? 'bg-cyan-500' : 'bg-gray-300'} py-2 px-4 cursor-pointer`}>
                      <input
                        type="checkbox"
                        name="plans"
                        checked={checkedFeatures[index]}
                        onChange={selectFeatures}
                        id={detail.featureID}
                        className=""
                      />
                      <p>{detail.title}</p>
                    </label>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}