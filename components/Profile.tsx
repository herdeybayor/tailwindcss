import React from 'react'

const Profile = () => {
  return (
    <div className="flex flex-col space-y-5 bg-gray-200 dark:bg-gray-900 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-5 sm:p-10">
      <img
        className="w-full cursor-pointer bg-[#8e5cf6] ring-rose-700 transition duration-150 sm:w-2/5 sm:max-w-sm sm:rounded-full sm:ring-4 sm:hover:scale-110"
        src="https://avatars.githubusercontent.com/u/71196743?v=4"
        alt="profile pic"
      />
      <div className="text-center text-blue-500 dark:text-white sm:text-left">
        <h1 className="text-5xl">Sherifdeen Adebayo</h1>
        <h2 className="text-2xl">I code quite alot...</h2>
      </div>
    </div>
  )
}

export default Profile
