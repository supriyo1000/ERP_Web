import Navbar from "../Features/Navbar"
import Checkbox from "./Checkbox"
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels"
import { MdDragIndicator } from "react-icons/md"
import { useEffect } from "react"

export default function Pricing() {
  useEffect(() => {
    document.title = 'Plans and Pricing | eazzyBizz'
  })
  return (
    <main className="h-screen flex flex-col features-background">
      <Navbar />
      <PanelGroup direction="horizontal" className="flex-grow">
        <Panel defaultSize={25} className="">
          <div className="overflow-y-auto overflow-x-hidden">
            <div className="flex flex-col">
              <div className="border-b-2 border-[#808080]">Sidebar</div>
              <div className="flex-grow flex items-center">
                <Checkbox /><div>Hello</div>
              </div>
            </div>
          </div>
        </Panel>
        <PanelResizeHandle className="group/dragger w-1 bg-[#808080] hover:bg-white relative rounded-lg transition-all">
          <MdDragIndicator className="group-hover/dragger:opacity-100 transition-all opacity-0 w-8 h-8 bg-white rounded-lg absolute z-40 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" />
        </PanelResizeHandle>
        <Panel className="">
          <div className="overflow-y-auto overflow-x-hidden">
            <div className="flex w-full">
              
            </div>
          </div>
        </Panel>
      </PanelGroup>
    </main>
  )
}
