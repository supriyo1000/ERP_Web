export default function PlanSummary() {
  return (
    <div className=" mx-32 mt-4 text-center">
      <div className="m-8 mt-8 text-text font-source-serif text-4xl text-center">
        Prices
      </div>
      <div>
        <h2 className="mb-8 text-3xl font-source-serif">Choose the plan that fits you</h2>
        <div className="grid grid-cols-3 gap-8 text-text *:border-2 *:rounded-xl *:py-8 *:px-4 *:flex *:flex-col *:gap-8 *:items-center">
          <SummaryWrapper title="Per User/Month Plan" />
          <SummaryWrapper title="Yearly Plan" />
          <SummaryWrapper title="Enterprise Plan" />
        </div>
      </div>
    </div>
  )
}

type summaryProps = {
  title: string
}

function SummaryWrapper(props: summaryProps) {
  return (
    <div className="">
      <h3 className="capitalize font-source-serif text-xl">{props.title}</h3>
      <div className="text-left pl-8 w-full flex flex-col gap-2">
        <h4 className="font-source-serif">Includes :-</h4>
        <div className="list-disc px-2 *:flex *:justify-between *:items-center">
          <div className='*:font-source-serif'>
            <div className="">Hello</div>
            <div className='text-gray-500'>$70.00</div>
          </div>
          <div className='*:font-source-serif'>
            <div className="">Hello</div>
            <div className='text-gray-500'>$70.00</div>
          </div>
          <div className='*:font-source-serif'>
            <div className="">Hello</div>
            <div className='text-gray-500'>$70.00</div>
          </div>
          <div className='*:font-source-serif'>
            <div className="">Hello</div>
            <div className='text-gray-500'>$70.00</div>
          </div>
          <div className='*:font-source-serif'>
            <div className="">Hello</div>
            <div className='text-gray-500'>$70.00</div>
          </div>
        </div>
      </div>
      <button className="font-source-serif text-lg w-3/5 bg-cyan-400 px-4 py-2 rounded-xl shadow-md text-black hover:shadow-lg hover:bg-cyan-300 active:shadow-sm active:bg-cyan-500 transition-all">Pay $350.00</button>
    </div>
  )
}