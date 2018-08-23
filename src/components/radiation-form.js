import React from 'react';

import { RadiationChart } from '../components/radiation-chart';
import sun from '../images/sunlogo.png';

export class RadiationForm extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="radiation-form data-form row">
                    <div className="col-4">
                        <h4 className="mb-3">Solar Radiation</h4>
                        <form id="radiation-form" className="form" onSubmit={ this.props.submitFunction }>
                            <div className="form-group">
                                <label htmlFor="latitude">Latitude<sup className="text-danger">*</sup></label>
                                <input type="number" className="form-control" id="latitude" name="latitude" placeholder="e.g. 42.5"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="longitude">Longitude<sup className="text-danger">*</sup></label>
                                <input type="number" className="form-control" id="longitude" name="longitude" placeholder="e.g. -71.8"/>
                            </div>
                            <button className="btn btn-primary mr-2">Get Data</button>
                            <button className="btn btn-default" onClick={ this.props.clearFunction }>Clear</button>
                        </form>
                    </div>
                            
                    <div className="col-8 pt-5">
                        { this.props.waiting && <div className="loading" >
                            <img src={sun} alt="logo" />
                            <p className="text-center">Loading...</p>
                        </div> }

                        { this.props.forecasts[0] && 
                            <RadiationChart forecasts={ this.props.forecasts }/>
                        }

                        { this.props.error && <p className="text-danger text-center">
                            { this.props.error }
                        </p> }
                    </div>
                </div>
            </div>
        );
    }
}