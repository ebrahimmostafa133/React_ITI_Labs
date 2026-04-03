import { useState } from "react"
import ToDoBody from "./components/toDoBody"
import ToDoHeader from "./components/toDoHeader"

function Home() {
  const [tasks, setTasks] = useState([])

  const addTask = (title, description) => {
    const newTask = {
      id: Date.now(),
      title,
      description,
      completed: false,
    }
    setTasks(prev => [...prev, newTask])
  }

  const toggleTask = (id) => {
    setTasks(prev =>
      prev.map(task => task.id === id ? { ...task, completed: !task.completed } : task)
    )
  }

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id))
  }

  return (
    <>
      <ToDoHeader addTask={addTask} />
      <ToDoBody tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
    </>
  )
}

export default Home
