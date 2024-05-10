import Chat from "../component/chat"
import Sidebar from "../component/sidebar"
export default function Home(){
    return(
        <div className="home">
            <div className="container">
                <Sidebar />
                <Chat />
            </div>
        </div>
    )
}