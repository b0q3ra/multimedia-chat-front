import useSWR from "swr";
import axios from "axios";
import { useAuth } from "../../states/auth";

const useAllUsers = () => {
    
    const { user } = useAuth()//we get our user

    const usersURL = `${process.env.REACT_APP_API_URL}/user/all`//users endpoint url

    const {data, error, mutate} = useSWR(['users'], () => {

      return axios.get(usersURL, { headers: {'Authorization': `Bearer ${user.token}` }  })
    })

    return( [data?.data.data, error, mutate ] )

}

export default useAllUsers