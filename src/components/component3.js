import React from 'react';
import './component3.css';

export function Component3 (props) {
    return (
        <div className="component-3">
            <h5>Component 3 (Nested)</h5>
            <p>{ props.value }</p>
        </div>
    );
}