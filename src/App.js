import logo from './logo.svg';
import './App.css';
import Login from './Components/ContextApi-3/Login';
import Nav from './Components/Nav';
import Home from './Components/ContextApi-3/Home';
import {useContext} from 'react';
import { myContext } from './Components/ContextApi-3/Context';

function App() {
    const {isloggedin}=useContext(myContext);
  return (
    <div className="App">
      {/* <Login/> */}
      {/* <Nav/>
      <Login/>
      <Home/> */}
      {
        isloggedin ? <div> <Nav/> <Home/> </div> : <Login/>
      }
    </div>
  );
}

export default App;
