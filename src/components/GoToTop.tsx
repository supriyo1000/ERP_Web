import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"
import { BsArrowUp } from "react-icons/bs"
import { scrollable } from "../types"

export default function GoToTop(props: scrollable) {
  const controls = useAnimation()
  const goToTop = () => {
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    controls.start({
      opacity: props.scrolled ? 1 : 0,
      pointerEvents: props.scrolled ? "all" : "none",
      transition: {duration: 0.15}
    })
  }, [props.scrolled, controls])

  return (
    <motion.div
      className="fixed z-50 select-none opacity-0 cursor-pointer bottom-20 right-20 aspect-square text-white text-4xl bg-black border-white border-2 p-4 rounded-full"
      animate={controls}
      whileHover={{
        scale: 1.2,
        transition: {type: 'spring', stiffness: 300}
      }}
      onClick={goToTop}
    >
      <BsArrowUp />
    </motion.div>
  )
}
