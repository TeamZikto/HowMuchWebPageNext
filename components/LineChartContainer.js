import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Bar, Line} from 'react-chartjs-2';
import numeral from 'numeral';

const LineChartWrap = styled.div`
  width: 82px;
  height: 80px;
  @media (max-width: 1024px) {
    /* width: 55px;
    height: 42px; */
  }
  @media (max-width: 768px) {
    /* width: 55px; */
  }
`

const LineChartContainer = ({priceTrend, dateTrend}) => {
    const [width, setWidth] = useState(100);

    return (
        <LineChartWrap>
            <Line
                data={{
                labels: dateTrend,
                datasets: [
                    {
                        borderColor: "#00EEB6",
                        backgroundColor: "#DCFFF7",
                        data: priceTrend,
                        radius: 0
                    }
                ]
                }}
                width={width}
                height={50}
                options={{
                    maintainAspectRatio: false,
                    legend: {
                        display: false
                    },
                    scales: {
                        xAxes: [
                            {
                                ticks: {
                                    display: false //this will remove only the label
                                },
                                gridLines: {
                                    display: false
                                }
                            }
                        ],
                        yAxes: [
                            {
                                ticks: {
                                    display: false //this will remove only the label
                                },
                                gridLines: {
                                    display: false
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