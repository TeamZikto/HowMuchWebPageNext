import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Router, { useRouter, withRouter } from 'next/router'
import { detail } from '../../api/api';

const HomeWrap = styled.div`
    width: 100%;
    height: 100%;
`

const HomeMainContainer = styled.div`
    width: 1184px;
    margin: 0 auto;
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 80px 40px;
    @media (max-width: 1024px) {
        width: 100%;
        height: auto;
    }
    @media (max-width: 768px) {
        width: 100%;
        height: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px;
    }
`;

const LeftArticleWrap = styled.div`
    width: 100%;
    margin-right: 20px;
    @media (max-width: 1024px) {
        /* margin-right: 0px;  */
    }
    @media (max-width: 768px) {
        margin-right: 0px;
    }
`;

const ImageSectionWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
    }
`

const TopContainerWrap = styled.div`
    width: 446px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 1024px) {
    }
    @media (max-width: 768px) {
        
        width: 200px;
    }
`


const ItemTrendDetail = () => {
    const nextRouter = useRouter();
    const {query: {id}} = nextRouter;
    const [trendItem, setTrendItem] = useState();
    console.log(id)
    useEffect(() => {
        const getTrendItem = async() => {
            try {
                const result = await detail.getDetailTrendItemKo(id.split('-').join(' '));
                setTrendItem(result.data.data)
            } catch(e) {
                console.log(e)
            }
        }
        getTrendItem();
    }, [])

    const itemDetail = trendItem && trendItem.itemDetail;
    const trendHistory = trendItem && trendItem.trendHistory;

    // console.log(itemDetail)

    return (
        <HomeWrap>
            <div>
                <HomeMainContainer>
                    <LeftArticleWrap>
                        <ImageSectionWrap>
                            <TopContainerWrap>
                                <img style={{width: '100%'}} src={itemDetail && itemDetail.image} alt="image"/>
                            </TopContainerWrap>
                        </ImageSectionWrap>
                    </LeftArticleWrap>
                </HomeMainContainer>
            </div>
        </HomeWrap>
    )
}

export default ItemTrendDetail;