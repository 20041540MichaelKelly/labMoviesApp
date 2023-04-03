import { useEffect, useState } from "react";
import { supabase } from '../supabaseClient';


const isLoggedIn = () => {
    const [session, setSession] = useState(null)
    const [user, setUser] = useState(null)
    useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session)
      })
    
      supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session)
      })
    
      supabase.auth.getUser(({ data: { user } }) => {
        setUser(user)
      })
  }, []);
  return {session, setSession};
};

export default isLoggedIn