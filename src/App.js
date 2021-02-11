import React from 'react'; 
import { 
  BrowserRouter as Router
} from 'react-router-dom' 

import Header from './components/Header'
import Works from './components/works/Works'
import Contacts from './components/Contacts'
import About from './components/About'

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
