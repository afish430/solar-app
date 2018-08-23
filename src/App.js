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
const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
const BASE_URL = 'https://api.solcast.com.au';

class App extends Component {

  state = {
    radiation: {
      forecasts: [],
      waiting: false,
      error: ''
    },
    pv: {
      forecasts: [],
      waiting: false,
      error: ''
    }
  }

  clearRadiation = (e) => {
    e.preventDefault();
    document.getElementById('radiation-form').reset();
    this.setState({
      radiation: {
        forecasts: [],
        waiting: false,
        error: ''
      }
    });
  }

  clearPv = (e) => {
    e.preventDefault();
    document.getElementById('pv-form').reset();
    this.setState({
      pv: {
        forecasts: [],
        waiting: false,
        error: ''
      }
    });
  }

  getRadiation = async (e) => {
      e.preventDefault();

      this.setState({
        radiation: {
          forecasts: [],
          waiting: true,
          error: ''
        }
      });

      const lat = e.target.elements.latitude.value;
      const long = e.target.elements.longitude.value;

      if (lat && long) {
        const api_call = await fetch(`${PROXY_URL}${BASE_URL}/radiation/forecasts?longitude=${long}&latitude=${lat}&api_key=${API_KEY}&format=json`);
        const data = await api_call.json();
  
        this.setState({
          radiation: {
            forecasts: data.forecasts,
            waiting: false,
            error: ''
          }
        });
      } else {
        this.setState({
          radiation: {
            forecasts: [],
            waiting: false,
            error: 'You must enter both latitude and longitude'
          }
        });
      }
  }

  getPvPower = async (e) => {
    e.preventDefault();

    this.setState({
      pv: {
        forecasts: [],
        waiting: true,
        error: ''
      }
    });

    const lat = e.target.elements.latitude.value;
    const long = e.target.elements.longitude.value;
    const capacity = e.target.elements.capacity.value;
    const tilt = e.target.elements.tilt.value;
    const azimuth = e.target.elements.azimuth.value;

    if (lat && long && capacity) {
      let url = `${PROXY_URL}${BASE_URL}/Pv_power/forecasts?longitude=${long}&latitude=${lat}&capacity=${capacity}&api_key=${API_KEY}&format=json`;
      if (tilt) {
        url = `${url}&tilt=${tilt}`;
      }
      if (azimuth) {
        url = `${url}&azimuth=${azimuth}`;
      }

      const api_call = await fetch(url);
      const data = await api_call.json();

      this.setState({
        pv: {
          forecasts: data.forecasts,
          waiting: false,
          error: ''
        }
      });
    } else {
      this.setState({
        pv: {
          forecasts: [],
          waiting: false,
          error: 'You must enter latitude, longitude and capacity'
        }
      });
    }
}

  render() {
    return (
      <div className="App">

        <Header/>

        <Router>
          <div className="solcastr-container">

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
                  clearFunction={this.clearRadiation}
                  forecasts={this.state.radiation.forecasts}
                  error={this.state.radiation.error}
                  waiting={this.state.radiation.waiting}
                  />}
            />
            <Route
              path="/pv"
                render={(props) => <PvForm {...props} 
                  submitFunction={this.getPvPower}
                  clearFunction={this.clearPv}
                  forecasts={this.state.pv.forecasts}
                  error={this.state.pv.error}
                  waiting={this.state.pv.waiting}
                  />}
            />
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
