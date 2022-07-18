import "./mainChat.css"
import chat from "../../assets/chat.jpg"
function Chat()
{
    return(
        <div>
            
            <div className="mainChat">
        
            <div className="messages">
                <img src={chat} alt = "" style={{height:"535px", width:"300px"}}></img>
            </div>
            </div>
        </div>
    );
}

export default Chat;