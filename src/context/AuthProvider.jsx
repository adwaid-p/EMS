import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
const [userData, setUserData] = useState([])
  useEffect(() => {
    const existingData = localStorage.getItem('employees')
    // localStorage.clear()
    if(!existingData){
      setLocalStorage()
    }
    const {employee,admin} = getLocalStorage()
    setUserData({employee,admin})
  }, [])
  

  return (
    <div>
      <AuthContext.Provider value={[userData,setUserData]}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider