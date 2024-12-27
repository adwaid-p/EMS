import React from 'react'

const NewTask = () => {
    return (
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>20 feb 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
            <p className='text-sm mt-2'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum illum consequuntur est minima aut id?
            </p>
            <div className="mt-4">
                <button className='w-full bg-blue-600'>Accept Task</button>
            </div>
        </div>
    )
}

export default NewTask