import { forwardRef } from "react"
import { emptyProps } from "../types"

export default forwardRef<HTMLDivElement, emptyProps>(function ContactUs(props, ref) {
  return (
    <section id='contact' ref={ref}>
      Contact Us
    </section>
  )
})