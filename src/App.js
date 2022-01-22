import React from 'react';
import './App.css';
import { Switch, Route }from 'react-router-dom';
import ListContainer from './components/home/ListContainer';
import WelcomePage from './components/WelcomePage';
import store from './redux/store';


function App() {
    return (
     <div className="App">
       <Switch>
         <Route exact path="/" component={WelcomePage} />
         <Route path="/home" component={routerProps => < ListContainer routerProps={routerProps} /> } />
       </Switch>
     </div>
    );
};

export default App;