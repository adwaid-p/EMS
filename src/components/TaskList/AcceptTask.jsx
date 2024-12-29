import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const AcceptTask = ({data}) => {
const [userData, setUserData] = useContext(AuthContext);
    const handleComplete = () => {
        // console.log('completed')
        
        const storedData = JSON.parse(localStorage.getItem('employees')) || []
        const updatedData = storedData.map(employee => {
            if(employee.name == data.assignTo) {
                const updateTask = employee.tasks.map(task=>{
                    if(task.title == data.title){
                        return {
                            ...task,
                            active: false,
                            completed: true
                        }
                    }
                    return task
                })

                return {
                    ...employee,
                    tasks: updateTask,
                    taskNumber: {
                        ...employee.taskNumber,
                        active: employee.taskNumber.active - 1,
                        completed: employee.taskNumber.completed + 1
                    }
                }
            }
            return employee
        })
        console.log(updatedData)
        const loggegUserData = JSON.parse(localStorage.getItem('LoggedInUser'))
        
        updatedData.map((data)=>{
            if(data.email == loggegUserData.data.email && data.password == loggegUserData.data.password){
                console.log(data)
                // localStorage.setItem()
                localStorage.setItem('LoggedInUser', JSON.stringify({ role: 'user', data: data }))
            }
        })

        localStorage.setItem('employees', JSON.stringify(updatedData))
        setUserData(prevData => ({ ...prevData, employee: updatedData }));
    }

    const handleFailed = () => {
        const storedData = JSON.parse(localStorage.getItem('employees')) || []
        const updatedData = storedData.map(employee => {
            if(employee.name == data.assignTo) {
                const updateTask = employee.tasks.map(task=>{
                    if(task.title == data.title){
                        return {
                            ...task,
                            active: false,
                            failed: true
                        }
                    }
                    return task
                })

                return {                    
                    ...employee,
                    tasks: updateTask,
                    taskNumber: {
                        ...employee.taskNumber,
                        active: employee.taskNumber.active - 1,
                        failed: employee.taskNumber.failed + 1
                    }
                }
            }            
            return employee
        })

        console.log(updatedData)
        const loggegUserData = JSON.parse(localStorage.getItem('LoggedInUser'))
        
        updatedData.map((data)=>{
            if(data.email == loggegUserData.data.email && data.password == loggegUserData.data.password){
                console.log(data)
                // localStorage.setItem()
                localStorage.setItem('LoggedInUser', JSON.stringify({ role: 'user', data: data }))
            }
        })

        localStorage.setItem('employees', JSON.stringify(updatedData))
        setUserData(prevData => ({ ...prevData, employee: updatedData }));

    }


    return (
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
            <p className='text-sm mt-2'>
                {data.description}
            </p>
            <div className='flex justify-between mt-4'>
                <button onClick={handleComplete} className='bg-green-500 py-1 px-2 text-sm'>Mark as Completed</button>
                <button onClick={handleFailed} className='bg-red-500 py-1 px-2 text-sm'>Mark as Failed</button>
            </div>
        </div>
    )
}

export default AcceptTask