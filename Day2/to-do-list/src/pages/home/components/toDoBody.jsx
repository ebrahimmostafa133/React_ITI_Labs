import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function ToDoBody({ tasks, onToggle, onDelete }) {
  return (
    <div className="mt-6 max-w-xl mx-auto">
      {tasks.length === 0 ? (
        <div className="text-center py-8">
          <FontAwesomeIcon icon="inbox" className="text-gray-300 text-5xl mb-3" />
          <p className="text-gray-500">No tasks yet. Add one above!</p>
        </div>
      ) : (
        <ul className="space-y-3">
          {tasks.map(task => (
            <li key={task.id} className={`flex items-center justify-between p-4 bg-white rounded shadow-sm border border-gray-200 hover:shadow-md transition-shadow ${task.completed ? "bg-gray-50" : ""}`}>
              <div onClick={() => onToggle(task.id)} className="cursor-pointer flex-1 flex items-start gap-3 min-w-0 pr-2">
                <div className="mt-1 flex-shrink-0">
                  <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${task.completed ? "bg-blue-500 border-blue-500" : "border-gray-400"}`}>
                    {task.completed && <FontAwesomeIcon icon="check" className="text-white text-xs" />}
                  </div>
                </div>
                <div className="flex-1 min-w-0 overflow-hidden">
                  <span className={`block font-medium break-words ${task.completed ? "line-through text-gray-400" : "text-gray-800"}`}>
                    {task.title}
                  </span>
                  {task.description && (
                    <span className={`block text-sm mt-1 break-words ${task.completed ? "text-gray-400" : "text-gray-500"}`}>
                      {task.description}
                    </span>
                  )}
                </div>
              </div>
              <button onClick={() => onDelete(task.id)} className="ml-2 p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded transition-colors flex-shrink-0">
                <FontAwesomeIcon icon="trash" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ToDoBody
