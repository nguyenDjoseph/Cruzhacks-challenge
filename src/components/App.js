import React, { Component } from 'react';
import Hackers from './Hackers';
import Data from './Data';
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
          <div className="row row justify-content-around">
            <div className="col-8">
              <Hackers data={this.state.data}/>
            </div>
            <div className="col-4">
              <Data data={this.state.data}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
