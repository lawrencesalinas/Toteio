import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

export const useAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [checkingStatus, setCheckingStatus] = useState(true)

  // get user from the state
  const { user } = useSelector((state) => state.auth)

  // run when user changes
  useEffect(() => {
    // checl if user is there
    if (user) {
      setLoggedIn(true)
    } else {
      setLoggedIn(false)
    }

    // if we checked the status
    setCheckingStatus(false)
  }, [user])

  return { loggedIn, checkingStatus }
}
