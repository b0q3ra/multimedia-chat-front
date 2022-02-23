import axios from "axios";
import ActiveChats from "../../components/ActiveChats";
import ChatBox from "../../components/ChatBox";

const Chat = () => {

    return (
        <div>
            <div className="container mx-auto flex justify-center">
                <ActiveChats />
                <ChatBox />

            </div>
        </div>
    )
}

export default Chat