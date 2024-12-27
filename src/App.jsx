import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'
import { data } from 'autoprefixer'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const authData = useContext(AuthContext)

  // useEffect(() => {
  //   const loggedInUser = localStorage.getItem('LoggedInUser')
  //   if (loggedInUser) {
  //     setUser(loggedInUser.role)
  //   }
  // }, [authData])


  useEffect(() => {
    const loggedInUser = localStorage.getItem('LoggedInUser')
    if(loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  }, [])
  


  const handleLogin = (email, password) => {
    // console.log(data)
    if (email == 'admin@gmail.com' && password == 123) {
      setUser('admin')
      localStorage.setItem('LoggedInUser', JSON.stringify({ role: 'admin' }))
    } else if (authData) {
      const employee = authData.employee.find((emp) => emp.email == email && emp.password == password)
      if (employee) {
        setLoggedInUserData(employee)
        setUser('user')
        localStorage.setItem('LoggedInUser', JSON.stringify({ role: 'user', data: employee }))  
      }
    } else {
      alert("Invalid data")
    }
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard /> : ''}
      {user == 'user' ? <EmployeeDashboard data={loggedInUserData} /> : ''}

      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard/> */}
    </>
  )
}

export default App
