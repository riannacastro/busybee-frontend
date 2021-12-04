import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Pages from './components/Pages';
import { 
  BrowserRouter as Router,
  Link
 } from 'react-router-dom';

export default class App extends React.Component {

  state = {
    page: "home",
    home: [],
    important: [],
    finished: []
  }

  changePage = (page) => {
    this.setState({
      page: page
    })
  }

  componentDidMount() {
    this.fetchAPI("home")
    this.fetchAPI("important")
    this.fetchAPI("finished")
  }

  componentDidUpdate() {
    console.log(this.state)
  }

  fetchAPI(home) {
    fetch('http://localhost:3001/lists')
    .then(r => r.json())
    .then(data => this.setState({
      [home]: data
    }))
  }

  render() {
    return (
      <Router>
         <div className="App">
           < NavBar changePage={this.changePage}/>
           < Pages page={this.state.page} home={this.state.home} important={this.state.important} finished={this.state.important}/>
      </div>
    </Router>
    );
  }
};

