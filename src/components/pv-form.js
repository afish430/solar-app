import React from 'react';

import { PvChart } from '../components/pv-chart';
import sun from '../images/sunlogo.png';

export class PvForm extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="pv-form data-form row">
                    <div className="col-4">
                    <h4 className="mb-3">Photovoltaic Power</h4>
                        <form id="pv-form" className="form" onSubmit={ this.props.submitFunction }>
                            <div className="form-group">
                                <label htmlFor="latitude">Latitude<sup className="text-orange">*</sup></label>
                                <input type="number" className="form-control" id="latitude" name="latitude" placeholder="e.g. 42.5"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="longitude">Longitude<sup className="text-orange">*</sup></label>
                                <input type="number" className="form-control" id="longitude" name="longitude" placeholder="e.g. -71.8"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="capacity">Capacity (Watts)<sup className="text-orange">*</sup></label>
                                <input type="number" className="form-control" id="capacity" name="capacity" placeholder="e.g. 1000"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="tilt">Tilt (degrees)</label>
                                <input type="number" className="form-control" id="tilt" name="tilt" placeholder="0 to 90"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="azimuth">Azimuth (degrees)</label>
                                <input type="number" className="form-control" id="azimuth" name="azimuth" placeholder="-180 to 180"/>
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
                            <PvChart forecasts={ this.props.forecasts }/>
                        }

                        { this.props.error && <p className="text-orange text-center">
                            { this.props.error }
                        </p> }
                    </div>
                </div>
            </div>
        );
    }
}