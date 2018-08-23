import React from 'react';

import './header.css';
import sun from '../images/sunlogo.png';

export class Header extends React.Component {
    render() {
        return (
            <header className="app-header row">
                <div className="col-1">
                    <img src={sun} className="app-logo" alt="logo" />
                </div>
                <div className="col-9">
                    <h1 className="app-title">
                        <em>SolCastr</em>
                    </h1>
                </div>
          </header>
        );
    }
}