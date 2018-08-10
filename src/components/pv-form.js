import React from 'react';
import './pv-form.css';

export class PvForm extends React.Component {
    render() {
        return (
            <div className="pv-form data-form container row">

                <div className="col-5">
                <h4>PV Power</h4>
                    <form id="pv-form" className="form" onSubmit={ this.props.submitFunction }>
                        <div className="form-group">
                            <label htmlFor="latitude">Latitude</label>
                            <input type="number" className="form-control" id="latitude" name="latitude" placeholder="e.g. 42.5"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="longitude">Longitude</label>
                            <input type="number" className="form-control" id="longitude" name="longitude" placeholder="e.g. -71.8"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="capacity">Capacity</label>
                            <input type="number" className="form-control" id="capacity" name="capacity" placeholder="e.g. 1000"/>
                        </div>
                        <button className="btn btn-primary mr-2">Get Data</button>
                        <button className="btn btn-default" onClick={ this.props.clearFunction }>Clear</button>
                    </form>
                </div>
                        
                <div className="col-7">
                    { this.props.waiting && <p>
                        Loading data....
                    </p> }

                    { this.props.forecasts[0] && <div className="row">
                        <div className="col-12">
                            <p>Period End: { this.props.forecasts[0].period_end } </p>
                            <p>PV Estimate: { this.props.forecasts[0].pv_estimate } </p>
                            <h5>Chart Coming Soon!</h5>
                        </div>
                    </div> }

                    { this.props.error && <p className="text-danger">
                        { this.props.error }
                    </p> }
                </div>
            
            </div>
        );
    }
}