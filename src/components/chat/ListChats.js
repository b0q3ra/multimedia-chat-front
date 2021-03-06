import { useState, useEffect } from "react"
import { mutate } from "swr"
import useAllChats from "../../hooks/api/use-allchats"
import { useAuth } from "../../states/auth"
import { io } from "socket.io-client";

const ListChats = ({newChat}) => {
    const { user } = useAuth()


    /*FETCH CHATS */
    const [listOfChats, errorFetchingChats, mutateChats, postNewChat] = useAllChats()
    

    /*CREATE NEW CHAT */
    useEffect(() => {

      postNewChat(user._id, newChat._id)
    }, []);

    /*ADD SOCKETS TO CHAT */



    return(
        <ul className="overflow-auto h-[32rem]">
        <h2 className="my-2 mb-2 ml-2 text-lg text-gray-600">Chats</h2>

          {Array.isArray(listOfChats) && listOfChats.map((element, index) => {
            return (
              <li key={index}>
                <a
                  className="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none">
                  <img className="object-cover w-10 h-10 rounded-full"
                    src="https://d1bvpoagx8hqbg.cloudfront.net/259/5557dc8dc59d815eacda0306558d848f.jpg" alt="username" />
                  <div className="w-full pb-2">
                    <div className="flex justify-between">
                      <span className="block ml-2 font-semibold text-gray-600">
                        {
                        element.firstUser._id  === user._id ? element.secondUser.email : element.firstUser.email 
                        }
                      </span>
                      <span className="block ml-2 text-sm text-gray-600">time</span>
                    </div>
                    <span className="block ml-2 text-sm text-gray-600">last message</span>
                  </div>
                </a>
              </li>
            )
          })}
          
      </ul>
    )
}

export default ListChats