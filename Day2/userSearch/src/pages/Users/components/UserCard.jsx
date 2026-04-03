function UserCard({ user }) {
  const isAdmin = user.role === "admin"

  return (
    <div className={`bg-white border border-gray-200 rounded-lg p-4 m-2 shadow-sm hover:shadow-lg transition-transform transform hover:-translate-y-1 w-[300px] ${isAdmin ? "border-l-[5px] border-pink-500" : ""}`}>
      <div className="flex justify-between items-center mb-3 border-b border-gray-100 pb-2">
        <h3 className="m-0 text-xl text-gray-800 font-semibold">{user.name}</h3>
        <span className={`px-2 py-1 rounded-full text-xs font-bold uppercase ${isAdmin ? "bg-pink-500 text-white" : "bg-gray-200"}`}>
          {user.role}
        </span>
      </div>
      <div className="text-gray-600 text-[0.95rem]">
        <p className="mb-1"><strong className="font-medium text-gray-900">Email:</strong> {user.email}</p>
        <p className="mb-1"><strong className="font-medium text-gray-900">Phone:</strong> {user.phonenumber}</p>
      </div>
    </div>
  )
}

export default UserCard
