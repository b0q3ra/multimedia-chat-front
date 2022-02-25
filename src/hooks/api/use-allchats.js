import useSWR from "swr";
import axios from "axios";
import { useAuth } from "../../states/auth";

const useAllChats = () => {

  const { user } = useAuth()//we get our user (token)

  const { data, error, mutate } = useSWR(['chats'], () => {//Our SWR hook will fetch the chats endpoing

    const url = `${process.env.REACT_APP_API_URL}/chat/mychats`//users endpoint url

    const body = {
        senderID: user._id
    }

    const config = {
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    }

    return axios.post(url, body, config)

  })

  const postNewChat = async (senderID, reciverID) => {//this function posts a new user and then mutates the data

    const url = `${process.env.REACT_APP_API_URL}/chat/new`//users endpoint url

    const axiosConfig = { //axios configuration
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    }

    const axiosPayload = {//payload
      senderID: senderID,
      reciverID: reciverID
    }

    let response = await axios.post(url, axiosPayload, axiosConfig)//send

    if (response.data.status === 'success') {

      mutate()
    } else {

      return false
    }
  }

  return ([data?.data.data, error, mutate, postNewChat])

}

export default useAllChats