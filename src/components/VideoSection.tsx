// import { motion, Variants } from 'framer-motion'
import videosection from '/Finalized.mp4'
import { useEffect, useState } from 'react'

type messagesType = {
	heading: string,
	description: string
}[]

const messages: messagesType = [
	{
		heading: 'Heading 1',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, praesentium iusto blanditiis rerum aspernatur molestiae incidunt laborum corrupti adipisci nesciunt.'
	},
	{
		heading: 'Heading 2',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, praesentium iusto blanditiis rerum aspernatur molestiae incidunt laborum corrupti adipisci nesciunt.'
	},
	{
		heading: 'Heading 3',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, praesentium iusto blanditiis rerum aspernatur molestiae incidunt laborum corrupti adipisci nesciunt.'
	},
	{
		heading: 'Heading 4',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, praesentium iusto blanditiis rerum aspernatur molestiae incidunt laborum corrupti adipisci nesciunt.'
	},
	{
		heading: 'Heading 5',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, praesentium iusto blanditiis rerum aspernatur molestiae incidunt laborum corrupti adipisci nesciunt.'
	}
]

export default function VideoSection() {
	const [index, setIndex] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			if (index < messages.length - 1)
			setIndex((prev) => prev + 1)
			else if(index === messages.length - 1)
			setIndex(0)
		}, 6000)
		return () => clearInterval(interval)
	}, [index])

  return (
		<section className='w-full h-screen relative flex items-end'>
			<video autoPlay loop muted playsInline src={videosection} className="absolute size-full z-[-1] object-cover" />
			{/* <div className="pb-16 pl-16 w-3/5 h-8 flex"> */}
				{
					messages.map((obj, ind) => {
						return (
							// <div {(ind === index) ? } className='absolute text-slate-100 items-end w-3/5 pb-16 pl-16'>
							<div
								key={ind}
								className={`absolute pb-16 pl-16 text-slate-100 w-3/5 video-description ${(ind === index) ? 'appear' : ''}`}
								// className='absolute pb-16 pl-16 text-slate-100 w-3/5'
							>
								<h1 className='video-section-header font-noto-serif'>{obj.heading}</h1>
								<p className='video-section-description'>{obj.description}</p>
							</div>
						)
					})
				}
			{/* </div> */}
		</section>
  )
}
