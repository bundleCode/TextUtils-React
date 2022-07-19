// import logo from './logo.svg';
import React, {useState} from 'react'

import './App.css';

import Alerts from './components/Alerts';
import Navbar from './components/Navbar.js'
import TextArea from './components/TextArea.js'
// import About from './components/About';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route  
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null); //initially alert is set to null

  const showAlert = (message, type) => {
    setAlert({
        msg : message,
        type: type,
    });
    setTimeout(()=> {
      setAlert(null);
    },2000)
  }

  const toggleModeSwitch = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor= 'grey';
      showAlert('Dark mode is successfully enabled','success');
      document.title = 'TextUtils-DarkMode';
    }else{
      setMode('light');
      document.body.style.backgroundColor= 'white';
      showAlert('Light mode is successfully enabled','success');
      document.title = 'TextUtils-LightMode';
    }
  }

  
  
  return (
    // <></> is called jsx Fragment
    <>
      {/* <Router>  */}
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleModeSwitch} />
      <Alerts alert={alert} /> 
          
      {/* <Switch>
          <Route exact path="/about"> */}
            {/* /home .......... component -1 without using exact path it will never reach to the component /home/user
           /home/user ............ component 2 */}
            {/* <About />
          </Route> */}
          {/* <Route exact path="/"> */}
            <TextArea heading="Enter the text to analyze below" textMode={mode} showAlert={showAlert} />
          {/* </Route>           */}
      {/* </Switch>
      </Router> */}
    </>
  );
}

export default App;
