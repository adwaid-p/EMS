const employees = [
  {
    id: 1,
    name: "Aarav Sharma",
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Prepare report",
        description: "Create the quarterly financial report.",
        date: "2024-12-30",
        category: "Finance",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        assignTo: "Aarav Sharma"
      },
      {
        title: "Team meeting",
        description: "Organize a meeting with the marketing team.",
        date: "2024-12-27",
        category: "Management",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        assignTo: "Aarav Sharma"
      },
      {
        title: "Update database",
        description: "Ensure customer database is updated with recent entries.",
        date: "2024-12-29",
        category: "IT",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        assignTo: "Aarav Sharma"
      }
    ],
    taskNumber: { active: 1, newTask: 1, completed: 1, failed: 0 }
  },
  {
    id: 2,
    name: "Ishita Verma",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Social media campaign",
        description: "Design and implement a social media campaign for new product launch.",
        date: "2024-12-28",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        assignTo: "Ishita Verma"
      },
      {
        title: "Inventory check",
        description: "Conduct a full inventory check in the warehouse.",
        date: "2024-12-29",
        category: "Operations",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        assignTo: "Ishita Verma"
      }
    ],
    taskNumber: { active: 1, newTask: 0, completed: 1, failed: 0 }
  },
  {
    id: 3,
    name: "Kabir Gupta",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Customer feedback analysis",
        description: "Analyze customer feedback from the past quarter.",
        date: "2024-12-31",
        category: "Customer Service",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        assignTo: "Kabir Gupta"
      }
    ],
    taskNumber: { active: 1, newTask: 0, completed: 0, failed: 0 }
  },
  {
    id: 4,
    name: "Anaya Rao",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Code review",
        description: "Review code submissions from the development team.",
        date: "2024-12-27",
        category: "IT",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        assignTo: "Anaya Rao"
      },
      {
        title: "Server maintenance",
        description: "Perform scheduled maintenance on company servers.",
        date: "2024-12-29",
        category: "IT",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        assignTo: "Anaya Rao"
      },
      {
        title: "Document API endpoints",
        description: "Update API endpoint documentation for developers.",
        date: "2024-12-30",
        category: "Documentation",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        assignTo: "Anaya Rao"
      }
    ],
    taskNumber: { active: 1, newTask: 1, completed: 1, failed: 0 }
  },
  {
    id: 5,
    name: "Rohan Patel",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Organize workshop",
        description: "Plan and organize a skill development workshop for employees.",
        date: "2024-12-28",
        category: "HR",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        assignTo: "Rohan Patel"
      },
      {
        title: "Budget analysis",
        description: "Analyze and report on the department's monthly budget.",
        date: "2024-12-31",
        category: "Finance",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        assignTo: "Rohan Patel"
      },
      {
        title: "Policy update",
        description: "Draft updates to the company policies for review.",
        date: "2024-12-29",
        category: "Management",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        assignTo: "Rohan Patel"
      }
    ],
    taskNumber: { active: 1, newTask: 1, completed: 1, failed: 0 }
  }
];


const admin = {
  id: 1,
  name: "Vikram Mehta",
  email: "admin@example.com",
  password: "123"
};


  export const setLocalStorage = ()=>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
  }

  export const getLocalStorage = ()=>{
    const employee = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    return {employee, admin}
}