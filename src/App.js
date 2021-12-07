import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Pages from './components/Pages';
import { 
  BrowserRouter as Router,
  Link,
  Route
 } from 'react-router-dom';

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

  fetchAPI(arg) {
    fetch(`http://localhost:3000/${arg}`)
    .then(r => r.json())
    .then(({data}) => this.setState({
      [arg]: data
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

