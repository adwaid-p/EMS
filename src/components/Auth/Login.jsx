import React, { useState } from 'react'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const submitHandler = (e) => {
    e.preventDefault()
    setEmail('')
    setPassword('')
  }

  return (
    <div className='flex items-center justify-center h-screen w-screen'>
      <div className='border-2 rounded-xl border-emerald-600 p-20'>
        <form
          onSubmit={(e) => { submitHandler(e) }}
          className='flex flex-col items-center justify-center'>
          <input
            value={email}
            onChange={(e) => { setEmail(e.target.value) }}
            required className='border-2 border-emerald-600 rounded-full text-xl outline-none bg-transparent placeholder:text-gray-400 py-3 px-5' type="email" placeholder='Enter your email' />
          <input
          value={password}
          onChange={(e) => { setPassword(e.target.value) }}
          required className='border-2 border-emerald-600 rounded-full text-xl outline-none bg-transparent placeholder:text-gray-400 py-3 px-5 mt-3' type="password" placeholder='Enter your password' />
          <button className='mt-5 border-2 border-emerald-600 rounded-full text-xl text-white outline-none bg-emerald-600 border-none placeholder:text-white py-3 px-5'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
