import { FaRegPaperPlane,FaGrinHearts } from "react-icons/fa";
import { GrAttachment } from "react-icons/gr";
function Footer(){
    return(
        <div className="footer">
            <button>
            <FaGrinHearts />
            </button>
            <button>
                    <input type="file" id='attachFile' style={{display:"none"}}></input>
                    <label htmlFor='attachFile'>
                    <GrAttachment />
                    </label>
            </button>
            <input type="text" placeholder="Type a Message"/>
                <button><FaRegPaperPlane /></button>
            </div>
    )
}
export default Footer;