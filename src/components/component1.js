import React from 'react';
import './component1.css';
import { Component3 } from '../components/component3';

export class Component1 extends React.Component {
    render() {
        return (
            <div className="component-1">
                <h3>Component 1</h3>
                <Component3 value="a passed value"/>
            </div>
        );
    }
}