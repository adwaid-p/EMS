import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {

    const [userData, setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [assignTo, setAssignTo] = useState('');
    const [priority, setPriority] = useState('');
    const [category, setCategory] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault();

        // Create the new task object
        const newTask = {
            title: taskTitle,
            description: taskDescription,
            date: taskDate,
            category,
            assignTo,
            active: false,
            newTask: true,
            failed: false,
            completed: false,
        };

        // Get the data from localStorage
        const data = JSON.parse(localStorage.getItem('employees')) || [];

        // Update the employee's task list
        const updatedData = data.map((employee) => {
            if (employee.name === assignTo) {
                return {
                    ...employee,
                    taskNumber: {
                        ...employee.taskNumber,
                        newTask: employee.taskNumber.newTask + 1
                    }
                    ,
                    tasks: [...employee.tasks, newTask], // Add the new task to the tasks array
                };
            }
            return employee; // Return the employee unchanged if not matched
        });

        // Save the updated data back to localStorage
        // await setUserData(updatedData)
        setUserData((prevData) => ({ ...prevData, employee: updatedData, }));
        // console.log(userData)
        localStorage.setItem('employees', JSON.stringify(updatedData));

        // console.log(updatedData);

        // Reset the form fields
        setTaskTitle('');
        setTaskDate('');
        setAssignTo('');
        // sets('');
        // setPriority('');
        setCategory('');
        setTaskDescription('');
    };

    return (
        <div className="p-5 bg-[#1c1c1c] mt-5 rounded">
            <form
                onSubmit={submitHandler}
                className="flex flex-wrap w-full items-start justify-between"
            >
                <div className="w-1/2">
                    <div>
                        <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
                        <input
                            value={taskTitle}
                            onChange={(e) => setTaskTitle(e.target.value)}
                            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                            type="text"
                            placeholder="Make a UI design"
                        />
                    </div>
                    <div>
                        <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
                        <input
                            value={taskDate}
                            onChange={(e) => setTaskDate(e.target.value)}
                            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                            type="date"
                        />
                    </div>
                    <div>
                        <h3 className="text-sm text-gray-300 mb-0.5">Asign to</h3>
                        <input
                            value={assignTo}
                            onChange={(e) => setAssignTo(e.target.value)}
                            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                            type="text"
                            placeholder="employee name"
                        />
                    </div>
                    <div>
                        <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
                        <input
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                            type="text"
                            placeholder="design, dev, etc"
                        />
                    </div>
                </div>

                <div className="w-2/5 flex flex-col items-start">
                    <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
                    <textarea
                        value={taskDescription}
                        onChange={(e) => setTaskDescription(e.target.value)}
                        className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
                    ></textarea>
                    <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
                        Create Task
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateTask;
