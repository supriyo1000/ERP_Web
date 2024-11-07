export type emptyProps = {}

export type messagesType = {
	heading: string,
	description: string
}[]

export type navbar = {
  scrolled: boolean,
  sectionRefs?: React.RefObject<HTMLDivElement>[]
}

export type scrollable = {
  scrolled: boolean
}

export interface logoWrapper extends React.SVGAttributes<SVGSVGElement> {
  viewBox: string,
  children: React.ReactNode
}