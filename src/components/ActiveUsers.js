import axios from 'axios'
import { useState, useEffect } from 'react'
import { useAuth } from '../states/auth'

const ActiveUsers = () => {
  /*AUTH */
  const { user } = useAuth()

  /*FETCH ALL CHATS */
  const [listOfUsers, setListOfUsers] = useState(null)//declare state list of chats

  useEffect(async () => {//on first load, render all chats
    const url = `${process.env.REACT_APP_API_URL}/chat/chats`//url
    const chats = await fetchChats(url)//we fetch all chats
    setListOfUsers(chats.data)//we set the chats state
  }, [])

  const fetchChats = async (url) => {
    try {
      let chats = await axios.get(url, {
        headers: {
          Authorization: 'Bearer ' + user.token
        }
      })

      return chats.data

    } catch (error) {
      console.log(error)
    }

  }
  /*SET SOCKETS FOR EVERY CHAT */
  const getChat = (e) => {
    e.preventDefault()
    
  }

  return (
    <div className="border-r border-gray-300 lg:col-span-1">
      <div className="mx-3 my-3">
        <div className="relative text-gray-600">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              viewBox="0 0 24 24" className="w-6 h-6 text-gray-300">
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </span>
          <input type="search" className="block w-full py-2 pl-10 bg-gray-100 rounded outline-none" name="search"
            placeholder="Search" required />
        </div>
      </div>

      <ul className="overflow-auto h-[32rem]">
        <h2 className="my-2 mb-2 ml-2 text-lg text-gray-600">Chats</h2>

          {listOfUsers && listOfUsers.map((element, index) => {
            return (
              <li key={index} onClick={getChat}>
                <a
                  className="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none">
                  <img className="object-cover w-10 h-10 rounded-full"
                    src="https://d1bvpoagx8hqbg.cloudfront.net/259/5557dc8dc59d815eacda0306558d848f.jpg" alt="username" />
                  <div className="w-full pb-2">
                    <div className="flex justify-between">
                      <span className="block ml-2 font-semibold text-gray-600">{element.email}</span>
                      <span className="block ml-2 text-sm text-gray-600">time</span>
                    </div>
                    <span className="block ml-2 text-sm text-gray-600">last message</span>
                  </div>
                </a>
              </li>
            )
          })}
          
      </ul>
    </div>
  )
}

export default ActiveUsers