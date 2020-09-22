import React from 'react'; 
import { 
  BrowserRouter as Router
} from 'react-router-dom' 

import Header from './Components/Header'
import Works from './Components/Works'
import Contacts from './Components/Contacts'
import About from './Components/About'

function App() {
   

  return (
    <Router> 
        <Header/>
        <Works/>
        <Contacts/>
        <About/> 
    </Router>
  );
}

export default App;
