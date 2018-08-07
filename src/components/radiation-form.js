import React from 'react';

export class RadiationForm extends React.Component {
    render() {
        return (
            <div>
                <h3>Radiation Form</h3>
                <form className="form" onSubmit={ this.props.submitFunction }>
                    <input type="text" name="latitude" placeholder="Latitude"/>
                    <input type="text" name="longitude" placeholder="Longitude"/>
                    <button>Get Data</button>
                </form>

                <br/>

                { this.props.waiting && <p>
                    Loading data....
                </p> }

                { this.props.forecasts[0] && <div className="row">
                    <div className="col-12">
                        <p>Period End: { this.props.forecasts[0].period_end } </p>
                        <p>Air Temp: { this.props.forecasts[0].air_temp } </p>
                        <p>DHI: { this.props.forecasts[0].dhi } </p>
                    </div>
                </div> }

                { this.props.error && <p className="text-danger">
                    { this.props.error }
                </p> }
            </div>
        );
    }
}