import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'

import { Home } from './components/home';
import { RadiationForm } from './components/radiation-form';
import { PvForm } from './components/pv-form';
import { Header } from './components/header';
import './App.css';

const API_KEY = 'w2iJNg2Ag0204Qk0Tw9dXWONDeziH2zM';
const PROXY_URL = "https://cors-anywhere.herokuapp.com/";
const BASE_URL = 'https://api.solcast.com.au';

class App extends Component {

  state = {
    forecasts: [],
    waiting: false,
    error: ''
  }

  getRadiation = async (e) => {
      e.preventDefault();

      this.setState({
        forecasts: [],
        waiting: true,
        error: ''
      });

      const lat = e.target.elements.latitude.value;
      const long = e.target.elements.longitude.value;

      if (lat && long) {
        const api_call = await fetch(`${PROXY_URL}${BASE_URL}/radiation/forecasts?longitude=${long}&latitude=${lat}&api_key=${API_KEY}&format=json`);
        const data = await api_call.json();
        console.log(data);
  
        this.setState({
            forecasts: data.forecasts,
            waiting: false,
            error: ''
        });
      } else {
        this.setState({
          forecasts: [],
          waiting: false,
          error: 'You must enter both latitude and longitude'
        });
      }

  }

  render() {
    return (
      <div className="App container-fluid">

        <Header/>

        <Router>
          <div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <ul className="navbar-nav">
                <li className="nav-item"><NavLink className="nav-link" exact to="/">Home</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/radiation">Radiation</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/pv">PV Power</NavLink></li>
              </ul>
            </nav>

            <hr/>

            <Route exact path="/" component={Home}/>
            <Route
              path="/radiation"
                render={(props) => <RadiationForm {...props} 
                  submitFunction={this.getRadiation}
                  forecasts={this.state.forecasts}
                  error={this.state.error}
                  waiting={this.state.waiting}
                  />}
            />
            <Route path="/pv" component={PvForm}/>
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
