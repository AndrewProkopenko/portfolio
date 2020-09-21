import React from 'react'; 
import { 
  BrowserRouter as Router
} from 'react-router-dom' 

import Header from './Components/Header'
import Works from './Components/Works'

function App() {
   

  return (
    <Router>
     
     <Header/>
     <Works/>
         
     
      
    
    </Router>
  );
}

export default App;
