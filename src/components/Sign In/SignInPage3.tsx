import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../contexts/useAuth'
import SignInSVG from './SignInSVG'
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'

export default function SignInPage() {
  // const user = useAuth()
  // const navigate = useNavigate()
  // useEffect(() => {
  //   if (user !== null) navigate('/dashboard', { replace: true })
  // }, [user])

  const [openSignUp, setOpenSignUp] = useState(false)  // false -> Sign In ,  true -> Sign Up
  const toggleSignUp = () => {
    setOpenSignUp(prev => !prev)
  }
  return (
    <main className={`h-screen duration-300 flex items-stretch *:w-1/2 bg-gradient-to-l ${openSignUp ? "from-[#4545ef]" : "from-[#6B46C1]"} to-[#111_50%] text-white`}>
      <div className='flex flex-col items-center justify-center *:first:self-stretch'>
        { openSignUp ? <SignUpForm /> : <SignInForm /> }
        <div className='flex flex-col items-center gap-2'>
          {/* <Link to='/' className='w-max hover:scale-105 duration-200'>Forgot Email or password? Click here</Link> */}
          <div className='w-max cursor-pointer hover:scale-105 duration-200' onClick={toggleSignUp}>
            {
              openSignUp
              ? 'Already an user? Click here to sign in'
              : 'New user? Click here to register yourself'
            }
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <div className='w-1/2'>
          <SignInSVG />
        </div>
      </div>
    </main>
  )
}