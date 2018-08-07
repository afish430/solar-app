import React, { Component } from 'react';
// import { Component1 } from './components/component1';
import { RadiationForm } from './components/radiation-form';
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
        <div className="row">
          <div className="col-12">
            <p className="App-intro">
              App intro will go here
            </p>
          </div>
        </div>

        {/* <div className="row">
          <div className="col-12">
            <Component1/>
          </div>
        </div> */}

        <div className="row">
          <div className="col-12">
            <RadiationForm 
              submitFunction={this.getRadiation}
              forecasts={this.state.forecasts}
              error={this.state.error}
              waiting={this.state.waiting}/>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
