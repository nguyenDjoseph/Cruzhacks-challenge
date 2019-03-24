import React, { Component } from 'react';
import Hackers from './Hackers';
import Data from './Data';
import Nav from './Nav';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { 
      data: []
    }; 
  }

  componentDidMount() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://cruzhacks-2020-demo-hacker-api.azurewebsites.net/api/";
    fetch(proxyurl+url)
      .then(res => res.json())
      .then(json => this.setState({ data: json.results }))
      .catch(() => console.log("Can’t access " + url + " response. Blocked by browser."))
  }

  render() {
    return (
      <div className="wrapper">
        <div className="container">
        <Nav/>
        <hr className="nav-br-ln"></hr>
          <div className="row">
            <div className="col">
              <Hackers data={this.state.data}/>
            </div>
            <div className="col">
              <Data data={this.state.data}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
