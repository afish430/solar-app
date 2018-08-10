import React from 'react';
import './home.css';

export class Home extends React.Component {
    render() {
        return (
            <div className="home row container">
                <div className="col-12">
                    <h3>Welcome to Solcastr!</h3>
                    <p>
                        This application uses the 
                        <a href="https://solcast.com.au/api/index.html" target="blank"> Solcast API </a> 
                        to provide radiation and PV power forecasts based on your location.
                    </p>
                </div>
            </div>
        );
    }
}