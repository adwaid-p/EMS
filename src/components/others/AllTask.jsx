import React, { useContext , useEffect} from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

    const [userData, setUserData] = useContext(AuthContext)

    // useEffect(() => {
    //      console.log(userData.employee)
    // }, [userData])
    
    // const authData = localStorage.getItem('employees')
    // console.log(authData)
    // console.log(userData.employee[0].taskNumber.newTask)
   

    return (
        <div id='tasklist_scroll' className='bg-[#1c1c1c] p-5 mt-5 rounded'>
            <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
                <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
                <h3 className='text-lg font-medium w-1/5'>New Task</h3>
                <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
                <h5 className='text-lg font-medium w-1/5'>Completed</h5>
                <h5 className='text-lg font-medium w-1/5'>Failed</h5>
            </div>

            <div>
            {
                userData.employee.map((elem, idx) => {
                    return <div className="border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded" key={idx}>
                        <h2 className='text-lg font-medium w-1/5'>{elem.name}</h2>
                        <h3 className='text-lg font-medium w-1/5 text-blue-400'>{elem.taskNumber.newTask}</h3>
                        <h5 className='text-lg font-medium w-1/5 text-yellow-400'>{elem.taskNumber.active}</h5>
                        <h5 className='text-lg font-medium w-1/5 text-green-400'>{elem.taskNumber.completed}</h5>
                        <h5 className='text-lg font-medium w-1/5 text-red-400'>{elem.taskNumber.failed}</h5>
                    </div>
                })
            }
            </div>
        </div>
    )
}

export default AllTask