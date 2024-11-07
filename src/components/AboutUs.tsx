import { forwardRef } from "react"
import { emptyProps } from "../types"

export default forwardRef<HTMLDivElement, emptyProps>(function AboutUs(props, ref) {
  return (
    <section id='about' ref={ref} className="min-h-[200vh]">
      <div className="sticky top-0 h-screen bg-white">

      </div>
    </section>
  )
})
