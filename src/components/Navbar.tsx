import { useEffect, useRef, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { RxHamburgerMenu } from "react-icons/rx"
import { navbar } from '../types'
import sectionsInfo from '../sectiondata'

export default function Navbar(props: navbar) {
	/* Tracking options box on different screens */
	const [optionsClicked, setOptionsClicked] = useState(false)  // By default it is hidden
	const toggleOptions = () => {
		setOptionsClicked((prev) => !prev)
	}
	// On window width size greater than or equal to 1100px the options box will be hidden automatically
	window.onresize = () => window.innerWidth >= 1100 && setOptionsClicked(false)
	
	/* For filling background */
	const controls = useAnimation();
	useEffect(() => {
		controls.start({
			borderColor: (props.scrolled || optionsClicked) ? '#808080ff' : '#80808000',
			backgroundColor: (props.scrolled || optionsClicked) ? '#030711ff' : '#03071100',
			transition: { duration: 0.2 },
		});
	}, [props.scrolled, optionsClicked, controls])

	/* Scroll to the element */
	const largeScreenRefs: React.RefObject<HTMLDivElement>[] = Array.from({ length: sectionsInfo.length }, () => useRef<HTMLDivElement>(null))
	useEffect(() => {
		largeScreenRefs.forEach((ref, index) => {
			if (ref.current != null) {
				ref.current.onclick = () => {
					props.sectionRefs[index].current?.scrollIntoView({
						behavior: 'smooth'
					})
				}
			}
		})
	})

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
				{
					sectionsInfo.map((section, index) => {
						return (
							<motion.div
								whileTap={{scale: 0.9, transition: {duration: 0.1}}}
								whileHover={{scale: 1.1, transition: {duration: 0.1}}}
								ref={largeScreenRefs[index]}
								key={index}
								className="text-xl py-2 transition-transform cursor-pointer"
							>
								{section.name}
							</motion.div>
						)
					})
				}
			</div>
			<SignInBtn />
			<div
				className='lg:hidden text-2xl cursor-pointer hover:scale-110 transition-transform'
				onClick={toggleOptions}
			>
				<RxHamburgerMenu />
			</div>
			<MediumScreenOpts clicked={optionsClicked} sectionRefs={props.sectionRefs} />
		</motion.nav>
	)
}

function SignInBtn() {
	return (
		<motion.button
			whileTap={{ scale: 0.9 }}
			className="px-4 py-2 lg:p-4 ml-auto lg:ml-0 mr-[5%] lg:mr-0 bg-slate-100 text-black border-background border-[1px] border-solid hover:bg-background hover:text-white hover:border-white transition-colors duration-300"
		>
			Login In or Sign Up
		</motion.button>
	)
}

type msopts = {
	clicked: boolean;
	sectionRefs: React.RefObject<HTMLDivElement>[];
}

function MediumScreenOpts(props: msopts) {
	const mediumScreenRefs: React.RefObject<HTMLDivElement>[] = Array.from({ length: sectionsInfo.length }, () => useRef<HTMLDivElement>(null))

	// useEffect(() => {
		mediumScreenRefs.forEach((ref, index) => {
			if (ref.current != null) {
				ref.current.onclick = () => {
					props.sectionRefs[index].current?.scrollIntoView({
						behavior: 'smooth'
					})
				}
			}
		})
	// })

	return (
		<div className={`absolute flex flex-col gap-4 py-4 bg-background -z-10 border-y-2 border-[#808080] left-0 right-0 top-full lg:!hidden ${props.clicked ? 'block' : 'hidden'}`}>
			{
				sectionsInfo.map((section, index) => {
					return (
						<motion.div
							whileTap={{scale: 0.9}}
							className='pr-4 transition-all text-lg group/medopts flex items-center overflow-hidden'
							key={index}
							ref={mediumScreenRefs[index]}
						>
							<div className='flex items-center overflow-hidden'>
								<div className='-translate-x-full mx-0 transition-all group-hover/medopts:translate-x-0 group-hover/medopts:mx-4 opacity-0 group-hover/medopts:opacity-100'>→</div>
								<div className=''>{section.name}</div>
							</div>
						</motion.div>
					)
				})
			}
		</div>
	)
}