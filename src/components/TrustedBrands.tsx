import Gucci from "../logos/Brands/Gucci"
import LouisVuitton from "../logos/Brands/LouisVuitton"
import Zara from "../logos/Brands/Zara"
import Puma from "../logos/Brands/Puma"
import Adidas from "../logos/Brands/Adidas"
import Apple from "../logos/Brands/Apple"

import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { useRef } from "react"

export default function TrustedBrands() {
  const ref = useRef<null | React.HTMLProps<HTMLHeadingElement>>(null)
  const { scrollY, scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end']
  })
  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll: ", latest)
  })

  return (
    <section className="min-h-screen flex items-center justify-center flex-col text-white gap-8 trusted-brand-section">
      <h1  className="trusted-brand-section-header font-source-serif">Our Trusted Partners</h1>
      <div className="flex w-3/5 items-center gap-x-20 gap-y-12 justify-center flex-wrap">
        <motion.div
          whileHover={{scale: 1.1}}
          transition={{type: 'ease', stiffness: 250, duration: 0.2}}
          className="w-36"
        >
          <Gucci />
        </motion.div>
        <motion.div
          whileHover={{scale: 1.1}}
          transition={{type: 'ease', stiffness: 250, duration: 0.2}}
          className="w-40"
        >
          <LouisVuitton />
        </motion.div>
        <motion.div
          whileHover={{scale: 1.1}}
          transition={{type: 'ease', stiffness: 250, duration: 0.2}}
          className="w-28"
        >
          <Zara />
        </motion.div>
        <motion.div
          whileHover={{scale: 1.1}}
          transition={{type: 'ease', stiffness: 250, duration: 0.2}}
          className="w-32"
        >
          <Puma />
        </motion.div>
        <motion.div
          whileHover={{scale: 1.1}}
          transition={{type: 'ease', stiffness: 250, duration: 0.2}}
          className="w-28"
        >
          <Adidas />
        </motion.div>
        <motion.div
          whileHover={{scale: 1.1}}
          transition={{type: 'ease', stiffness: 250, duration: 0.2}}
          className="w-16"
        >
          <Apple />
        </motion.div>
      </div>
    </section>
  )
}
