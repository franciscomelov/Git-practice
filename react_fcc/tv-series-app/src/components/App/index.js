import React, {Component} from 'react'
import './App.css';
import Intro from '../intro/index'
import 'whatwg-fetch'


class App extends Component {
  state ={
    series : []
  }

  componentDidMount(){
    fetch("https://api.tvmaze.com/search/shows?q=Vikings")
      .then(response => response.json())
      .then( json => this.setState({series:json}))
  }

  render (){
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TV Series List</h1>
        </header>
        <Intro message="Here you can find your favorite series" />
    <p>length of array - {this.state.series.length}</p>
      </div >
    );
  }
}

export default App;
