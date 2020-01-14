import React from 'react';
import './App.css';
import {Router} from '@reach/router';
import WordNumComponent from './components/WordNumComponent';
import HomeComponent from './components/HomeComponent';
import WordComponent from './components/WordComponent';

const App = () => {
    return (
     <div className="App">
       <Router>
        <HomeComponent path="/home"/>
        <WordNumComponent path="/:id">
          <WordComponent path="/"/>
          <WordComponent path=":textcolor"/>
          <WordComponent path=":textcolor/:backgroundcolor"/>
        </WordNumComponent>
       </Router>
     </div>
   );
}

export default App;
