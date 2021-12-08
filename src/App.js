import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Pages from './components/Pages';
import { 
  BrowserRouter as Router,
  Link,
  Route
 } from 'react-router-dom';
import ListForm from './components/ListForm';

export default class App extends React.Component {

  state = {
    // page: "home",
    home: [],
    important: [],
    finished: []
  }

  // changePage = (page) => {
  //   this.setState({
  //     page: page
  //   })
  // }

  componentDidMount() {
    this.fetchAPI("home")
    this.fetchAPI("important")
    this.fetchAPI("finished")
  }

  fetchAPI() {
    fetch(`http://localhost:3000/lists`)
    .then(r => r.json())
    .then(data => this.setState({
      home: data
    }))
  }

  render() {
    return (
      <Router>
         <div className="App">
           
           < NavBar changePage={this.changePage}/>
           {/* < Link to="/home">Home</Link>
           < Link to="/important">Important Tasks</Link>

           <Route path="/home">
             <p>Home</p>
          </Route> */}
           < Pages
            home={this.state.home}
            important={this.state.important} 
            finished={this.state.finished}
            />
      </div>
    </Router>
    );
  }
};

