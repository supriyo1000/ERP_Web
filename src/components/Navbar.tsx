import { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { RxHamburgerMenu } from "react-icons/rx"
import { navbar } from '../types'

export default function Navbar(props: navbar) {
	const [optionsClicked, setOptionsClicked] = useState(false)
	const toggleOptions = () => {
		setOptionsClicked((prev) => !prev)
	}
  const controls = useAnimation();
  useEffect(() => {
    controls.start({
			borderColor: props.scrolled ? '#808080ff' : '#80808000',
      backgroundColor: props.scrolled ? '#030711ff' : '#03071100',
      transition: { duration: 0.2 },
    });
  }, [props.scrolled, controls]);

	const scrollToSection = () => {
		
	}

  return (
    <motion.nav animate={controls} className="flex items-center justify-between fixed z-50 top-0 left-0 right-0 text-white px-8 py-4 select-none border-b-2">
			<motion.a
				href='/'
				whileHover={{
					scale: 1.05,
				}}
				whileTap={{
					scale: 0.9
				}}
				className="font-source-serif text-4xl font-bold"
			>
				GoShopping
			</motion.a>
			<div className="hidden lg:flex lg:items-center lg:gap-8 lg:px-8">
				<div onClick={scrollToSection} className="text-xl py-2 hover:scale-110 transition-transform cursor-pointer">Home</div>
				<div onClick={scrollToSection} className="text-xl py-2 hover:scale-110 transition-transform cursor-pointer">About Us</div>
				<div onClick={scrollToSection} className="text-xl py-2 hover:scale-110 transition-transform cursor-pointer">Trusted Partners</div>
				<div onClick={scrollToSection} className="text-xl py-2 hover:scale-110 transition-transform cursor-pointer">Contact Us</div>
			</div>
			<SignInBtn />
			<div
				className='lg:hidden text-2xl cursor-pointer hover:scale-110 transition-transform'
				onClick={toggleOptions}
			>
				<RxHamburgerMenu />
			</div>
			<div className={`absolute -z-10 left-0 right-0 top-0 ${optionsClicked ? 'block' : 'hidden'}`}>
				<div>Home</div>
				<div>About Us</div>
				<div>Trusted Partners</div>
				<div>Contact Us</div>
			</div>
    </motion.nav>
  )
}

function SignInBtn() {
	return(
		<motion.button
			whileTap={{scale: 0.9}}
			className="px-4 py-2 lg:p-4 ml-auto lg:ml-0 mr-[5%] lg:mr-0 bg-slate-100 text-black border-background border-[1px] border-solid hover:bg-background hover:text-white hover:border-white transition-colors duration-300"
		>
			Login In or Sign Up
		</motion.button>
	)
}