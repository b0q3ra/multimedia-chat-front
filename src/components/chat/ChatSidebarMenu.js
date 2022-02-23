import axios from 'axios'
import { useState, useEffect } from 'react'
import { useAuth } from '../../states/auth'

import ListChats from './ListChats'
import ListUsers from './ListUsers'
import SearchUsers from './SearchUsers'

import { ChatAltIcon, UsersIcon } from '@heroicons/react/solid'//icons

const ChatSidebarMenu = () => {

  /*SELECT CHATS */
  const [displayChats, setDisplayChats] = useState(false)

  const selectChats = () => { setDisplayChats(true) }
  const selectUsers = () => { setDisplayChats(false) }


  /*NEW CHAT */
  const [newChat, setNewChat] = useState({})

  

  return (
    <div className="border-r border-gray-300 lg:col-span-1">
      <SearchUsers />

      <div className='flex justify-around'>
        <span onClick={selectChats} className="displayChats w-full cursor-pointer"><ChatAltIcon className='w-6 m-auto hover:opacity-30'/></span>
        <span onClick={selectUsers} className="displayUsers w-full cursor-pointer"><UsersIcon className='w-6 m-auto hover:opacity-30'/></span>
      </div>

      {displayChats && <ListChats newChat={newChat}/>}
      {!displayChats && <ListUsers setDisplayChats={setDisplayChats} setNewChat={setNewChat}/>}

    </div>
    
  )
}

export default ChatSidebarMenu