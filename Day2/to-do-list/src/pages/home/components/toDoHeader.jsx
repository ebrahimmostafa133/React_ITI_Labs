import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function ToDoHeader({ addTask }) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim()) return
    addTask(title, description)
    setTitle("")
    setDescription("")
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow mb-6 border border-gray-200">
      <h1 className="text-center text-3xl font-bold text-gray-800 mb-6">
        <FontAwesomeIcon icon="clipboard-list" className="mr-2 text-blue-600" />
        To Do List
      </h1>
      <form onSubmit={handleSubmit} className="space-y-3 max-w-xl mx-auto">
        <input
          type="text"
          placeholder="Task title"
          maxLength="100"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
        />
        <input
          type="text"
          placeholder="Description"
          maxLength="300"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
        />
        <button
          type="submit"
          className="w-full p-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition-colors"
        >
          <FontAwesomeIcon icon="plus" className="mr-2" />
          Add Task
        </button>
      </form>
    </div>
  )
}

export default ToDoHeader
