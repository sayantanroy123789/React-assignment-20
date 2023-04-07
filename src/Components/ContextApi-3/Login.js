import {useState,useContext} from 'react';
import { myContext } from './Context';
var style={
    width:"300px",
    boxShadow:"0 0 10px black",
    margin:"50px auto",
    textAlign:"center"
}
function Login(props){
   const {setIsLoggedIn}= useContext(myContext)
    const [user,setUser]=useState(
        {
            name:"",
            password:""
        }
    );
    const handleAuthetication=()=>{
        if(user.name==="sayan" && user.password==="sayan123"){
            setIsLoggedIn(true);
        } else{
            alert("please type right user name")
        }
    }
    return(
        <div style={style}>
            <h3>login form</h3>
            <div>
                <input type="text" placeholder='user name' onChange={(e)=>{setUser({
                    ...user,
                    name:e.target.value
                })}} />
            </div>
            <br/>
            <div>
                <input type="password" placeholder='password' onChange={(e)=>{setUser({
                    ...user,
                    password:e.target.value
                })}} />
            </div>
            <br/>
            <button onClick={handleAuthetication}> Login</button>
        </div>
    )
}
export default Login;