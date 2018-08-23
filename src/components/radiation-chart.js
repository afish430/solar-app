import React from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

export class RadiationChart extends React.Component {

    options = {
        chart: {
            type: 'spline'
        },
        title: {
            text: 'Radiation Forecast'
        },
        xAxis: {
            type: 'datetime',
            labels: {
                format: '{value: %d %b %Y}'
            }
        },
        yAxis: [{
            title: {
                text: 'Air Temp (°C)'
            }
        }, {
            title: {
                text: 'Global Horizontal Irradiance (W/m2)'
            },
            opposite: true
        }],
        series: [{
            name: 'Air Temp',
            color: 'orange',
            data: []
        }, {
            name: 'Irradiance (GHI)',
            color: 'purple',
            data: [],
            yAxis: 1
        }]
    }

    render() {
        this.props.forecasts.forEach(dat => {
            this.options.series[0].data.push({x: new Date(dat.period_end), y: dat.air_temp });
            this.options.series[1].data.push({x: new Date(dat.period_end), y: dat.ghi });
        });
    
        return (
            <div>
                <HighchartsReact
                    highcharts={ Highcharts }
                    options={ this.options }
                />
            </div>
        );
    }
}
