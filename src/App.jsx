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
  const [userData, setUserData] = useContext(AuthContext)

  // useEffect(() => {
  //   const loggedInUser = localStorage.getItem('LoggedInUser')
  //   if (loggedInUser) {
  //     setUser(loggedInUser.role)
  //   }
  // }, [authData])


  useEffect(() => {
    const loggedInUser = localStorage.getItem('LoggedInUser')
    // console.log(JSON.parse(loggedInUser))
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      // setLoggedInUserData(userData.data)
      setLoggedInUserData((prev) => ({ ...prev, ...userData.data }))
      
      
      console.log(userData.data)

      console.log(loggedInUserData)
    }
  }, [])



  const handleLogin = (email, password) => {
    // console.log(data)
    if (email == 'admin@gmail.com' && password == 123) {
      setUser('admin')
      localStorage.setItem('LoggedInUser', JSON.stringify({ role: 'admin' }))
    } else if (userData) {
      const employee = userData.employee.find((emp) => emp.email == email && emp.password == password)
      if (employee) {
        setLoggedInUserData(employee)
        // console.log(employee)
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
      {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : ''}
      {user == 'user' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : ''}

      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard/> */}
    </>
  )
}

export default App
