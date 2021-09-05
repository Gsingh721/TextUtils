import './App.css';
import { About } from './Components/About';
import { Navbar } from './Components/Navbar';
import { TextArea } from './Components/TextArea';
import React, {useState} from 'react';
import { Alert } from './Components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {

  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const getAlert=(messege,type)=>{
    setAlert({
      msg: messege,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);  
   
  }
  const toggleMode=()=>{
      if(mode==='dark'){
        setmode("light");
        document.body.style.backgroundColor = 'white';  
      }else{
        setmode('dark');
        document.body.style.backgroundColor = '#094089';
        getAlert('Dark Mode Enabled' , 'success');
      }
  }
  return (
    <Router>
    <>
    
      <Navbar title="Text-Utils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      
          <Switch>
            <Route exact path="/about">
                <About mode={mode}/>
            </Route>
            <Route exact path="/">
                <TextArea heading="Enter text to analyse" mode={mode} getAlert={getAlert}/>
            </Route>
        </Switch>
    
    </>
    </Router>
  );
}

export default App;
