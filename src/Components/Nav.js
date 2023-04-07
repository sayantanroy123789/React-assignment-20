import {useContext} from "react";
import { myContext } from "./ContextApi-3/Context";
import "./ContextApi-3/Nav.css";
function Nav(props){
   const {setIsLoggedIn}= useContext(myContext);
    return(
        <div className="nav">
            <div id="title">
                <h2>React context</h2>
            </div>
            <div id="menu"> 
                <a href="*">Home</a>
                <a href="*">Profile</a>
                <a href="*">Product</a>
                <a href="*">Support</a>
                <button onClick={()=>{setIsLoggedIn(false)}}>logout</button>
            </div>
        </div>
    )
}
export default Nav;