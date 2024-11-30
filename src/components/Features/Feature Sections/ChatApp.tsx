import Navbar from "../Navbar"
import Footer from "../../Footer"
// import { useEffect } from "react"
// import { useNavigation } from 'react-router-dom'

export default function ChatApp() {
  // useEffect(() => {
  //   window.location.href = 'https://www.google.com/'
  // })
  return (
    <main className="min-h-screen flex flex-col items-center gap-16 [&>:nth-last-child(2)]:mb-auto">
      <Navbar />
      <div className="mt-8 mx-8 text-text font-source-serif text-4xl text-center">
        eazzyChat
      </div>
      <form action="" className="flex flex-col w-1/2 items-center gap-8 p-8 border-text rounded-3xl">
        <div className="relative w-4/5 border-b-2 has-[>input[value='']]:border-green-400 has-[>input:focus]:border-cyan-400 has-[>input:invalid]:border-orange-400 has-[>input:not(:placeholder-shown)]:border-cyan-400 has-[>input:invalid:not(:placeholder-shown)]:border-orange-400">
          <label
            htmlFor="username"
            className="absolute top-1/2 -translate-y-1/2 left-2 text-text pointer-events-none transition-all duration-150 ease-[ease] has-[~input:focus]:top-1 has-[~input:focus]:-translate-y-[120%] has-[~input:focus]:left-0 has-[~input:focus]:text-sm has-[~input:not(:placeholder-shown)]:top-1 has-[~input:not(:placeholder-shown)]:-translate-y-[120%] has-[~input:not(:placeholder-shown)]:left-0 has-[~input:not(:placeholder-shown)]:text-sm"
          >
            Enter your username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter your username"
            className="w-full focus:outline-none px-2 py-1 bg-transparent text-text placeholder:text-transparent"
            required
          />
        </div>
        <div className="relative w-4/5 border-b-2 has-[>input[value='']]:border-green-400 has-[>input:focus]:border-cyan-400 has-[>input:invalid]:border-orange-400 has-[>input:not(:placeholder-shown)]:border-cyan-400 has-[>input:invalid:not(:placeholder-shown)]:border-orange-400">
          <label
            htmlFor="password"
            className="absolute top-1/2 -translate-y-1/2 left-2 text-text pointer-events-none transition-all duration-150 ease-[ease] has-[~input:focus]:top-1 has-[~input:focus]:-translate-y-[120%] has-[~input:focus]:left-0 has-[~input:focus]:text-sm has-[~input:not(:placeholder-shown)]:top-1 has-[~input:not(:placeholder-shown)]:-translate-y-[120%] has-[~input:not(:placeholder-shown)]:left-0 has-[~input:not(:placeholder-shown)]:text-sm"
          >
            Enter your password
          </label>
          <input
            type="text"
            name="password"
            id="password"
            placeholder="Enter your password"
            className="w-full focus:outline-none px-2 py-1 bg-transparent text-text placeholder:text-transparent"
            required
          />
        </div>
        <div className="relative w-4/5 border-b-2 has-[>input[value='']]:border-green-400 has-[>input:focus]:border-cyan-400 has-[>input:invalid]:border-orange-400 has-[>input:not(:placeholder-shown)]:border-cyan-400 has-[>input:invalid:not(:placeholder-shown)]:border-orange-400">
          <label
            htmlFor="confirm-password"
            className="absolute top-1/2 -translate-y-1/2 left-2 text-text pointer-events-none transition-all duration-150 ease-[ease] has-[~input:focus]:top-1 has-[~input:focus]:-translate-y-[120%] has-[~input:focus]:left-0 has-[~input:focus]:text-sm has-[~input:not(:placeholder-shown)]:top-1 has-[~input:not(:placeholder-shown)]:-translate-y-[120%] has-[~input:not(:placeholder-shown)]:left-0 has-[~input:not(:placeholder-shown)]:text-sm"
          >
            Confirm password
          </label>
          <input
            type="text"
            name="confirm-password"
            id="confirm-password"
            placeholder="Confirm password"
            className="w-full focus:outline-none px-2 py-1 bg-transparent text-text placeholder:text-transparent"
            required
          />
        </div>
        <button className="p-4 *:font-source-serif border-2 rounded-2xl border-text text-text shadow-md ">
          <p className="text-lg">Get Started for Free</p>
          <p className="text-sm text-gray-400">(Trial ends on 14 days)</p>
        </button>
      </form>
      <Footer />
    </main>
  )
}
