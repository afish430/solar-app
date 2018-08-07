import React from 'react';
import './header.css';
import sun from '../animated-sun.gif';

export class Header extends React.Component {
    render() {
        return (
            <header className="App-header row">
                <div className="col-1">
                    <img src={sun} className="App-logo" alt="logo" />
                </div>
                <div className="col-9">
                    <h1 className="App-title">Title of App</h1>
                </div>
          </header>
        );
    }
}