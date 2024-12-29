import React, { useState } from 'react'

const Header = (props) => {
    // console.log(props.data.name)
    // const [userName, setUserName] = useState('')
    // if(!data){
    //     setUserName('Admin')
    // } else {
    //     setUserName(data.name)
    // }
const admin = JSON.parse(localStorage.getItem('admin'))
console.log(admin)
    const logOutUser =()=>{
        localStorage.setItem('LoggedInUser','')
        // window.location.reload()
        props.changeUser('')
    }

    return (
        <div className='flex items-end justify-between '>
            <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>{props.data ? props.data.name : admin.name}👋</span></h1>
            <button onClick={logOutUser} className='bg-red-600 text-lg font-medium text-white py-2 px-5 rounded-sm'>Log Out</button>
        </div>
    )
}

export default Header
