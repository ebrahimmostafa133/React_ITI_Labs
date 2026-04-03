import { useState } from "react"
import UserCard from "./components/UserCard"

const users = [
  { id: 1, name: "Ahmed Ali", email: "ahmed@gmail.com", phonenumber: "01012345678", role: "admin" },
  { id: 2, name: "Sara Mohamed", email: "sara@gmail.com", phonenumber: "01112345678", role: "user" },
  { id: 3, name: "Omar Hassan", email: "omar@gmail.com", phonenumber: "01212345678", role: "user" },
  { id: 4, name: "Nour Khaled", email: "nour@gmail.com", phonenumber: "01512345678", role: "admin" },
  { id: 5, name: "Youssef Tamer", email: "youssef@gmail.com", phonenumber: "01612345678", role: "user" },
]
function Users() {
  const [searchText, setSearchText] = useState("")
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchText.toLowerCase()) ||
    user.email.toLowerCase().includes(searchText.toLowerCase())
  )

  return (
    <div className="p-5 max-w-7xl mx-auto">
      <div className="mb-8 flex justify-center">
        <input
          type="text"
          placeholder="Search users..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-full max-w-lg px-5 py-3 text-base border-2 border-gray-200 rounded-full outline-none transition-colors focus:border-indigo-500"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-5">
        {filteredUsers.length === 0 ? (
          <p className="text-center text-gray-500 text-lg mt-12 w-full">No users found.</p>
        ) : (
          filteredUsers.map(user => (
            <UserCard key={user.id} user={user} />
          ))
        )}
      </div>
    </div>
  )
}

export default Users
