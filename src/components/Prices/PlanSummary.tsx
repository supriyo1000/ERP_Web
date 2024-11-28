import { useEffect, useState } from "react"
import details from "../Features/FeatureDetails"

type PlanSummaryProps = {
  checkedFeatures: { [key: string]: boolean }
}

export default function PlanSummary(props: PlanSummaryProps) {
  return (
    <div className=" mx-32 mt-4 text-center mb-auto">
      <div className="m-8 mt-8 text-text font-source-serif text-4xl text-center">
        Prices
      </div>
      <div>
        <h2 className="mb-8 text-text text-3xl font-source-serif">Select the plan that suit your needs</h2>
        <div className="grid lg:grid-cols-3 gap-8 text-text">
          <SummaryWrapper title="Per User/Month Plan" checkedFeatures={props.checkedFeatures} />
          <SummaryWrapper title="Yearly Plan" checkedFeatures={props.checkedFeatures} />
          <SummaryWrapper title="Enterprise Plan" checkedFeatures={props.checkedFeatures} />
        </div>
      </div>
    </div>
  )
}

type summaryProps = {
  title: string,
  checkedFeatures: { [key: string]: boolean }
}

function SummaryWrapper(props: summaryProps) {
  const [totalPrice, setTotalPrice] = useState(0)
  useEffect(() => {
    let value = 0
    props.title, details.filter(detail => props.checkedFeatures[detail.featureID]).map(detail => (
      value += props.title === 'Per User/Month Plan' ? detail.price_per_user_per_month : props.title === 'Yearly Plan' ? detail.price_yearly : detail.price_enterprise
    ))
    setTotalPrice(value)
  }, [props.checkedFeatures])
  return (
    <div className="border-2 hover:border-cyan-500 transition-colors rounded-xl py-8 px-4 flex flex-col gap-8 items-center bg-background">
      <h3 className="capitalize font-source-serif text-xl">{props.title}</h3>
      <div className="text-left px-2 w-full flex flex-col gap-2">
        {
          details.filter(detail => props.checkedFeatures[detail.featureID]).length === 0 ? 
            <div className="text-gray-500 text-center">No features selected</div>
          :
          <>
            <h4 className="">Includes -</h4>
            <div className="px-2 flex flex-col gap-2 items-stretch">
              {
                details.filter(detail => props.checkedFeatures[detail.featureID]).map((detail, index) => (
                  <div className="flex justify-between items-center gap-2" key={index}>
                  <div className="leading-4">{detail.title}</div>
                  <div className="text-gray-500">
                    ${
                      props.title === 'Per User/Month Plan' ? detail.price_per_user_per_month.toFixed(2)
                      : props.title === 'Yearly Plan' ? detail.price_yearly.toFixed(2) : detail.price_enterprise.toFixed(2)
                    }
                  </div>
                  </div>
                ))
              }
            </div>
          </>
        }
      </div>
      <button
        disabled={details.filter(detail => props.checkedFeatures[detail.featureID]).length === 0}
        className="select-none font-source-serif text-lg w-3/5 bg-cyan-400 px-4 py-2 rounded-xl shadow-md text-black [&:not(:disabled):hover]:shadow-lg [&:not(:disabled):hover]:bg-cyan-300 [&:not(:disabled):active]:shadow-sm [&:not(:disabled):active]:bg-cyan-500 [&:not(:disabled):active]:scale-90 transition-all disabled:cursor-not-allowed disabled:grayscale"
        onClick={() => console.log('Hii')}
      >
        {
          details.filter(detail => props.checkedFeatures[detail.featureID]).length === 0 ? 'Select Features'
          : `Pay $${totalPrice.toFixed(2)}`
          // : details.filter(detail => )
        }
      </button>
    </div>
  )
}