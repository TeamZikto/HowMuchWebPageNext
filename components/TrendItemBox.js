import React, { Component, useState, useEffect } from "react";
import styled from "styled-components";
import { Bar, Line } from "react-chartjs-2";
import LinesEllipsis from "react-lines-ellipsis";

// icon
import Camera from "../assets/image/icon/camera.png";
import Bag from "../assets/image/icon/bag.png";
import Laptop from "../assets/image/icon/laptop.png";
import Lego from "../assets/image/icon/lego.png";
import Phone from "../assets/image/icon/phone.png";
import Shoes from "../assets/image/icon/shoes.png";
import Wallet from "../assets/image/icon/wallet.png";
import Watch from "../assets/image/icon/watch.png";
import Up from "../assets/image/icon/up.png";
import Down from "../assets/image/icon/down.png";

const TrendItemBox = styled.div`
    width: 446px;
    border-radius: 10px;
    height: 104px;
    margin-bottom: 18px;
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-shadow:
        rgba(0, 0, 0, 0.05) 0px 0px 32px 0px, rgba(0, 0, 0, 0.1) 0px 6px 20px 0px;
    padding: 0 30px;
    @media (max-width: 1024px) {
        width: 324px;
        height: 80px;
        padding: 0 20px;
    }
    @media (max-width: 768px) {
        width: 100%;
        height: 84px;
        padding: 0 20px;
    }
`

const IconImageBox = styled.div`
    width: 64px;
    height: 64px;
    border-radius: 64px;
    background-color: #DCFFF7;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 1024px) {
        width: 50px;
        height: 50px;
        border-radius: 50px;
    }
    @media (max-width: 768px) {
        width: 50px;
        height: 50px;
        border-radius: 50px;
    }
`;


const IconImage = styled.img`
    width: 32px;
    height: 32px;
    @media (max-width: 1024px) {
        width: 26px;
        height: 26px;
    }
    @media (max-width: 768px) {
        width: 26px;
        height: 26px;
    }
`;

const LinesEllipsisWrap = styled.div`
    font-size: 20px;
    @media (max-width: 1024px) {
        font-size: 16px;
    }
    @media (max-width: 1024px) {
        font-size: 16px;
    }
`

const LineChartWrap = styled.div`
    width: 82px;
    height: 80px;
    @media (max-width: 1024px) {
        width: 55px;
        height: 42px;
    }
    @media (max-width: 768px) {
        width: 55px;
    }
`

const PercentageWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: 30px;
    @media (max-width: 1024px) {
        margin-top: 5px;
        height: 20px;
    }
    @media (max-width: 768px) {
        margin-top: 5px;
        height: 20px;
    }
`

const PercentageMinusText = styled.div`
    color: rgba(117,177,255,1);
    font-weight: normal;
    font-size: 14px;
    line-height: 1.3125;
    font-family: 'SpoqaHanSans-Regular';
    @media (max-width: 1024px) {
        font-size: 12px;
    }
    @media (max-width: 768px) {
        font-size: 12px;
    }
`

const PercentagePlusText = styled.div`
    color: rgba(255,117,117,1);
    font-weight: normal;
    font-size: 14px;
    line-height: 1.3125;
    font-family: 'SpoqaHanSans-Regular';
    @media (max-width: 1024px) {
        font-size: 12px;
    }
    @media (max-width: 768px) {
        font-size: 12px;
    }
`

const ArrowImage = styled.img`
    width: 12px;
    height: 12px;
    margin-right: 10px;
    @media (max-width: 768px) {
        width: 10px;
        height: 10px;
    }
    @media (max-width: 768px) {
        width: 10px;
        height: 10px;
    }
`

const TrendItemsBox = ({trendItem}) => {
    const [width, setWidth] = useState(100);
    console.log(trendItem,'--')
    return (
        <div>
            {trendItem &&
                trendItem.map((v, index) => {
                    const { category2, priceTrend, dateTrend } = v;
                    const reducer = (accumulator, currentValue) => accumulator + currentValue;
                    const itemPriceAverage = priceTrend.reduce(reducer) / priceTrend.length;
                    const itemPricePercentage = ((priceTrend[11] / itemPriceAverage - 1) *100).toFixed(2);
                    return (
                    <TrendItemBox key={index}>
                        <IconImageBox>
                            {category2 === "시계" && <IconImage src={Watch} />}
                            {category2 === "카메라" && <IconImage src={Camera} />}
                            {category2 === "가방" && <IconImage src={Bag} />}
                            {category2 === "휴대폰" && <IconImage src={Phone} />}
                            {category2 === "노트북" && <IconImage src={Laptop} />}
                            {category2 === "신발" && <IconImage src={Shoes} />}
                            {category2 === "레고" && <IconImage src={Lego} />}
                            {category2 === "지갑" && <IconImage src={Wallet} />}
                        </IconImageBox>
                        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flex: 1, padding: '0 20px'}}>
                        <LinesEllipsisWrap>
                            <LinesEllipsis
                                style={{
                                    fontWeight: "bold",
                                    width: '100%',
                                    textAlign: "left",
                                    fontFamily: 'SpoqaHanSans-Bold'
                                }}
                                text={`${v.name}`}
                                maxLine="1"
                                ellipsis="..."
                                trimRight
                                basedOn="letters"
                            />
                        </LinesEllipsisWrap>
                        {itemPricePercentage < 0 && (
                            <PercentageWrap >
                            <ArrowImage src={Down} />
                            <PercentageMinusText>
                                {itemPricePercentage}% (평균가)
                            </PercentageMinusText>
                            </PercentageWrap>
                        )}

                        {itemPricePercentage > 0 && (
                            <PercentageWrap >
                            <ArrowImage src={Up} />
                            <PercentagePlusText>
                                {itemPricePercentage}% (평균가)
                            </PercentagePlusText>
                            </PercentageWrap>
                        )}
                        </div>
                        {/* <div style={{ fontWeight: "bold", fontSize: 22 }}>{v.name}</div> */}
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
                    </TrendItemBox>
                );
            })}
        </div>
    )
}

export default TrendItemsBox;