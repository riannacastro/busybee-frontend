import React from 'react';
import react from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Pages from './components/Pages';

export default class App extends React.Component {

  state = {
    page: "home"
  }

  changePage = (page) => {
    this.setState({
      page: page
    })
  }

  componentDidUpdate() {
    console.log(this.state)
  }

  render() {
    return (
    <div className="App">
      < NavBar changePage={this.changePage}/>
      < Pages page={this.state.page}/>
    </div>
    );
  }
};

