import { useState, useEffect } from 'react'
import { supabase } from '../supabaseClient'
import Auth from '../components/loginTemplate'
import Account from '../components/accountSetup'
import Home from '../pages/homePage'

function Login() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <div className="container" style={{ padding: '50px 0 100px 0' }}>
      {!session ? <Auth /> : <Home /> }
    </div>
  )
}

export default Login