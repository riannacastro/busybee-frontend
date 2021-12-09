import React from 'react';
import './App.css';
import { NavLink } from 'react-router-dom';
import Pages from './components/Pages';


function App() {
    return (
     <div className="App">
       <NavLink to="/">Home</NavLink>
       <NavLink to="lists">Lists</NavLink>
       <Pages />
     </div>
    );
};

export default App;