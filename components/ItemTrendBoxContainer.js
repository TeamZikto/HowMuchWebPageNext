import React, {useState, useEffect} from 'react';
import Link from 'next/link'
import styled from 'styled-components';

import { trend } from '../api/api';
import ItemBoxLoop from './ItemBoxLoop';

import lg from '../assets/image/lg.png'
import apple from '../assets/image/apple.png'
import samsung from '../assets/image/samsung.png'
import Up from "../assets/image/icon/up.png";
import Down from "../assets/image/icon/down.png";

const PriceTrendBoxWrap = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1024px) {
        flex-direction: column;
    }
    @media (max-width: 768px) {
        flex-direction: column;
    }
`



const TrendItemsBox = () => {
    const [itemType, setItemType] = useState('휴대폰');
    const [appleItem, setAppleItem] = useState();
    const [samsungItem, setSamsungItem] = useState();
    const [lgItem, setLgItem] = useState();

    useEffect(() => {
        const getApple = async() => {
            try {
                const result = await trend.appleTrendGetItems(itemType)
                setAppleItem(result.data.data)
            } catch(e) {
                console.log(e)
            }
        }
        const getSamsung = async() => {
            try {
                const result = await trend.smTrendGetItems(itemType)
                setSamsungItem(result.data.data)
            } catch(e) {
                console.log(e)
            }
        }
        const getLg = async() => {
            try {
                const result = await trend.lgTrendGetItems(itemType)
                setLgItem(result.data.data)
            } catch(e) {
                console.log(e)
            }
        }
        getApple();
        getSamsung();
        getLg();
    }, [])

    return (
        <div>
            <PriceTrendBoxWrap>
                {/* Apple */}
                <ItemBoxLoop trendItem={appleItem} logo={'애플'}/>
                {/* Samsung */}
                <ItemBoxLoop trendItem={samsungItem} logo={'삼성'}/>
                {/* LG */}
                <ItemBoxLoop trendItem={lgItem} logo={'LG'}/>
            </PriceTrendBoxWrap>
        </div>
    )
}

export default TrendItemsBox;