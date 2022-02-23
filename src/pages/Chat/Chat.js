import axios from "axios";
import ActiveChats from "../../components/chat/ChatSidebarMenu";
import ChatBox from "../../components/chat/ChatBox";

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