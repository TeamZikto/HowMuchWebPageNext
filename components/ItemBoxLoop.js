import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import numeral from 'numeral';
import Router, { useRouter, withRouter } from 'next/router'
import i18n from '../config/lang/i18n';

import LineChartContainer from './LineChartContainer';

import lg from '../assets/image/lg.png'
import apple from '../assets/image/apple.png'
import samsung from '../assets/image/samsung.png'
import Up from "../assets/image/icon/up.png";
import Down from "../assets/image/icon/down.png";

const PriceTrendBoxItem = styled.li`
    display: flex;
    flex-direction: column;
    width: 100%;
    background: white;
    box-shadow:
        rgba(0,0,0,0.05) 0px 0px 8px 0px, rgba(0,0,0,0.1) 0px 3px 37px 0px;
    border-radius: 20px;
    height: 514px;
    padding: 0 30px;
    &:nth-child(2) {
        margin: 0 24px;
    }

    @media (max-width: 1024px) {
        &:nth-child(2) {
        margin: 24px 0px !important;
        }
    }

    @media (max-width: 768px) {
        &:nth-child(2) {
        margin: 24px 0px !important;
        }
    }
`

const TrendItemBrandSection = styled.div`
    padding: 20px 0;
    display: flex;
    border-bottom: 2px solid #00EEB6;
    align-items: center;
`

const BrandLogoImage = styled.div`
    width: 32px;
    height: 32px;
    margin-right: 20px;
`

const BrandLogoText = styled.p`
    font-family: 'SpoqaHanSans-Bold';
    font-weight: 600;
    font-size: 20px;
`

const BrandTrendList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 20px 0 40px 0;
`

const TrendItemBoxWrap = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

const TrendItemName = styled.p`
    font-weight: 400;
    font-family: 'SpoqaHanSans-Regular';
`

const TrendItemPrice = styled.p`
    font-weight: 600;
    font-size: 20px;
    letter-spacing: 0.6px;
    margin: 10px 0;
    font-family: 'SpoqaHanSans-Bold';
`

const PercentageWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-top: 4px;
    @media (max-width: 1024px) {
        margin-top: 5px;
    }
    @media (max-width: 768px) {
        margin-top: 5px;
    }
`

const PercentageMinusText = styled.div`
    color: rgba(117,177,255,1);
    font-weight: normal;
    font-size: 14px;
    line-height: 1.3125;
    letter-spacing: 0.6px;
    @media (max-width: 1024px) {
        font-size: 12px;
    }
    @media (max-width: 768px) {
        font-size: 12px;
    }
`

const ArrowImage = styled.img`
    width: 10px;
    height: 10px;
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

const PercentagePlusText = styled.div`
    color: rgba(255,117,117,1);
    font-weight: normal;
    font-size: 14px;
    line-height: 1.3125;
    letter-spacing: 0.6px;
    @media (max-width: 1024px) {
        font-size: 12px;
    }
    @media (max-width: 768px) {
        font-size: 12px;
    }
`


const ItemBoxLoop = ({trendItem, logo}) => { 

    const _linkItemDetail = (name) => {
        // const name = selectedModel.split(' ').join('-');
        Router.push(`/itemTrendDetail/[id]`, `/itemTrendDetail/${name.split(' ').join('-')}`)
    }

    return (
        <>
            {trendItem && (
                <PriceTrendBoxItem>
                    <TrendItemBrandSection>
                        <BrandLogoImage>
                            {logo === '애플' ? <img style={{width: '100%'}} src={apple} alt="apple_logo"/> : logo === '삼성' ? <img style={{width: '100%'}} src={samsung} alt="samsung_logo"/> : logo === 'LG' ? <img style={{width: '100%'}} src={lg} alt="lg_logo"/> : null}
                        </BrandLogoImage>
                        <BrandLogoText>{logo}</BrandLogoText>
                    </TrendItemBrandSection>
                    <BrandTrendList>
                        {trendItem && trendItem.map((v, i) => {
                            const {priceTrend, dateTrend, name} = v;
                            if (priceTrend &&  priceTrend.length === 0) return
                            
                            const itemPricePercentage = priceTrend.length < 2 ? 0: ((priceTrend[priceTrend.length-1] / priceTrend[priceTrend.length-2] - 1) * 100).toFixed(2)

                            return (
                                <TrendItemBoxWrap key={i}>
                                    <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', cursor: 'pointer'}}>
                                        <a onClick={() => _linkItemDetail(name)}>
                                            <TrendItemName>{name}</TrendItemName>
                                            <TrendItemPrice>{numeral(v.priceTrend[priceTrend.length - 1]).format('0,0')} 원</TrendItemPrice>
                                            {itemPricePercentage < 0 && (
                                                <PercentageWrap>
                                                    <ArrowImage
                                                        src={Down}
                                                    />
                                                    <PercentageMinusText>
                                                        {itemPricePercentage}% ({i18n.t('price.average')})
                                                    </PercentageMinusText>
                                                </PercentageWrap>
                                            )}
                                            {itemPricePercentage > 0 && (
                                                <PercentageWrap >
                                                <ArrowImage
                                                    src={Up}
                                                />
                                                <PercentagePlusText
                                                >
                                                    {itemPricePercentage}% ({i18n.t('price.average')})
                                                </PercentagePlusText>
                                                </PercentageWrap>
                                            )}
                                        </a>
                                        <LineChartContainer dateTrend={dateTrend} priceTrend={priceTrend}/>
                                    </div>
                                </TrendItemBoxWrap>
                            )
                        })}
                    </BrandTrendList>
                </PriceTrendBoxItem>
            )}
        </>   
    )
}

export default ItemBoxLoop;