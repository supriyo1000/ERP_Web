import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../contexts/useAuth'

export default function SignIn() {
  const user = useAuth()
  const navigate = useNavigate()
  useEffect(() => {
    if (user !== null) navigate('/dashboard', { replace: true })
  }, [user])
  return (
    <div>
      SignIn
    </div>
  )
}