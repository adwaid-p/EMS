import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const NewTask = ({ data }) => {
    const [userData, setUserData] = useContext(AuthContext);

    const handleAcceptTask = () => {
        // Get the data from localStorage
        const storedData = JSON.parse(localStorage.getItem('employees')) || [];
        
        // Update the employee's task list
        const updatedData = storedData.map(employee => {
            if (employee.name === data.asignTo) {
                const updatedTasks = employee.tasks.map(task => {
                    if (task.title === data.title) {
                        return {
                            ...task,
                            newTask: false,
                            active: true,
                        };
                    }
                    return task;
                });

                return {
                    ...employee,
                    taskNumber: {
                        ...employee.taskNumber,
                        newTask: employee.taskNumber.newTask - 1,
                        active: employee.taskNumber.active + 1,
                    },
                    tasks: updatedTasks,
                };
            }
            return employee; // Return the employee unchanged if not matched
        });

        // Save the updated data back to localStorage
        localStorage.setItem('employees', JSON.stringify(updatedData));
        
        // Update context
        setUserData(prevData => ({ ...prevData, employee: updatedData }));
    };

    return (
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
            <p className='text-sm mt-2'>
                {data.description}
            </p>
            <div className="mt-4">
                <button className='w-full bg-blue-600' onClick={handleAcceptTask}>Accept Task</button>
            </div>
        </div>
    );
}

export default NewTask;
