import React from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

export class PvChart extends React.Component {

    options = {
        chart: {
            type: 'spline'
        },
        title: {
            text: 'PV Power Forecast'
        },
        xAxis: {
            type: 'datetime',
            labels: {
                format: '{value: %d %b %Y}'
            }
        },
        yAxis: {
            title: {
                text: 'PV Estimate (Watts)'
            }
        },
        series: [{
            name: 'PV Power',
            color: 'limegreen',
            data: []
        }]
    }

    render() {
        this.props.forecasts.forEach(dat => {
            this.options.series[0].data.push({x: new Date(dat.period_end), y: dat.pv_estimate });
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
