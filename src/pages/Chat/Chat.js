import axios from "axios";
import ActiveUsers from "../../components/ActiveUsers";
import ChatBox from "../../components/ChatBox";

const Chat = () => {

    return (
        <div>
            <div className="container mx-auto flex justify-center">
                <ActiveUsers />
                <ChatBox />

            </div>
        </div>
    )
}

export default Chat