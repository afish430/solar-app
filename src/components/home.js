import React from 'react';
import { NavLink } from 'react-router-dom'

import './home.css';
import panels from '../images/panels.jpg';

export class Home extends React.Component {
    render() {
        return (
            <div className="home container-fluid">
                <div className="row">
                    <div className="col-6">
                        <h3 className="mb-4">Welcome to Solcastr!</h3>
                        <p className="mb-4">
                            This application uses the 
                            <a href="https://solcast.com.au/api/index.html" target="blank"> Solcast API </a> 
                            to provide customized solar radiation and PV (photovoltaic) power forecasts based on your location, anywhere in the world.
                        </p>
                        <p className="mb-4">
                            The <NavLink to="/radiation">Radiation request</NavLink> returns detailed solar radiation data for the next week based only on your specified latitude and longitude.
                            The data represents 30-minute averages up to the time shown.
                        </p>
                        <p>
                            The <NavLink to="/pv">PV Power request</NavLink> returns a first-guess PV output forecast (in Watts) for the next week,
                            based on your specified latitude and longitude, plus some basic PV system characteristics
                            (at a minimum, we need to know the total capacity in Watts).
                            The data represents 30-minute averages up to the time shown. 
                        </p>
                    </div>
                    <div className="col-6">
                        <img src={panels} alt="panels" />
                    </div>
                </div>
            </div>
        );
    }
}