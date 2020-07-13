import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { Bar, Line } from 'react-chartjs-2';
import numeral from 'numeral';
import moment from 'moment';

const LineChartWrap = styled.div`
    /* width: 82px;
    height: 80px; */
    /* width: 100%; */
    /* height: 250px; */
`

const LineChartContainer = ({dateTrend, height, name, priceTrend, width}) => {
    
    return (
        <LineChartWrap>
                <Line
                    data={{
                        labels: dateTrend,
                        datasets: [
                            {
                                borderColor: "#00EEB6",
                                backgroundColor: "rgba(0,238,182,0.14)",
                                data: priceTrend,
                                label: `${name}`,

                                lineTension: 0.1,
                                borderCapStyle: 'butt',
                                borderDash: [],
                                borderDashOffset: 0.0,
                                borderJoinStyle: 'miter',
                                pointBorderColor: 'rgba(75,192,192,1)',
                                pointBackgroundColor: '#fff',
                                pointBorderWidth: 3,
                                pointHoverRadius: 5,
                                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                                pointHoverBorderColor: 'rgba(220,220,220,1)',
                                pointHoverBorderWidth: 2,
                                pointRadius: 1,
                                pointHitRadius: 10,
                                // radius: 0
                            }
                        ]
                    }}
                    width={width}
                    height={height}
                    options={{
                        maintainAspectRatio: false,
                        legend: {
                            display: true
                        },
                        scales: {
                            xAxes: [
                                {
                                    ticks: {
                                        display: true //this will remove only the label
                                    },
                                    gridLines: {
                                        display: true
                                    }
                                }
                            ],
                            yAxes: [
                                {
                                    ticks: {
                                        display: true //this will remove only the label
                                    },
                                    gridLines: {
                                        display: true
                                    }
                                }
                            ]
                    }
                    }}
                />
            </LineChartWrap>
    )
}

export default LineChartContainer;