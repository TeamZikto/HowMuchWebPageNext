import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Router, { useRouter, withRouter } from 'next/router'
import { detail } from '../../../../api/api';
import i18n from '../../../../config/lang/i18n';
import EachLineChartContainer from '../../../../components/EachItemLinkChartContainer';
import numeral from 'numeral';
import moment from 'moment';
import withHead from '../../../../components/hoc/withHead';

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

const RightArticleWrap = styled.div`
    width: 100%;
    margin-left: 20px;
    @media (max-width: 1024px) {
        /* margin-left: 0px;  */
    }
    @media (max-width: 768px) {
        margin-left: 0px;
    }
`

const TitleText = styled.h1`
    color: black;
    font-size: 30px;
    line-height: 1.3125;
    
    @media (max-width: 768px) {
        font-size: 16px;
}
`

const TitleTextWrap = styled.div`
    border-bottom: 1px solid #F6F6F6;
    padding-bottom: 30px;
    @media (max-width: 768px) {
        padding-bottom: 20px;
    }
`

const SubTitleTextWrap = styled.div`
    padding-top: 30px;
    
    @media (max-width: 768px) {
        padding-top: 20px;
    }
`

const SubTitle = styled.h2`
    color: black;
    font-size: 20px;
    line-height: 1.3125;
    
`

const PriceText = styled.p`
    color: black;
    font-size: 60px;
    line-height: 1.3125;
    font-weight: 600;
    
    /* margin-top: 10px; */
    padding-bottom: 30px;
    letter-spacing: 2px;
    border-bottom: 1px solid #F6F6F6;
    @media (max-width: 768px) {
        font-size: 30px;
    }
`

const PriceTextWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 36px;
`

const PriceMaxText = styled.span`
    color: #FF7575;
    font-size: 26px;
    letter-spacing: 0.8px;
    
    line-height: 24px;
    @media (max-width: 768px) {
        font-size: 16px;
    }
`

const PriceMinText = styled.span`
    color: #75B1FF;
    font-size: 26px;
    letter-spacing: 0.8px;
    
    @media (max-width: 768px) {
        font-size: 16px;
    }
`

const ButtonArea = styled.div`
    width: 100%;
    margin-top: 30px;
    margin-bottom: 30px;
    padding-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 1024px) {
    }
    @media (max-width: 768px) {
    }
`

const ButtonWrap = styled.button`
    border-radius: 10px;
    border: 2px solid #00E27F;
    width: 100%;
    height: 62px;
    
    font-size: 18px;
    @media (max-width: 1024px) {
        height: 55px;
        font-size: 18px;
    }
    @media (max-width: 768px) {
        height: 50px;
        font-size: 14px;
    }
`
export async function getStaticProps(context) {
    let {id} = context.params;
    id = encodeURIComponent(id)
    id = id.split('-').join(' ')
    const result = await fetch(`https://howmuch.zikto.com/api/vn/${id}`)
    const data = await result.json()
    return {
        props: {
            itemDetail: data.data
        },
    }
}

export async function getStaticPaths() {
    const res = await fetch(`https://howmuch.zikto.com/api/web/trend/vn/itemList`)
    const items = await res.json();
    const fetchItems = items && items.data;
    const paths = fetchItems && fetchItems.map(item => `/vn/itemTrendDetail/${item.name.split(' ').join('-')}`);
    return {  paths, fallback: false }
}

const VNItemTrendDetail = (props) => {
    const {router: {query: {id}, pathname}} = props;
    const pathCheck = pathname.includes('/vn');
    const langCheck = i18n && i18n.language;
    useEffect(() => {
        const scrollTop = () =>{
            window.scrollTo({top: 0, behavior: 'smooth'});
        };
        const changeLanguage = () => {
            langCheck === 'vn' && i18n && i18n.changeLanguage('vn');
            pathCheck && i18n && i18n.changeLanguage('vn');
        }
        scrollTop();
        changeLanguage();
    }, [])

    const sendMail = () => {
        Router.push('/vn/sendMail')
    }

    const itemDetail = props && props.pageProps && props.pageProps.itemDetail && props.pageProps.itemDetail.itemDetail; 
    const trendHistory = props && props.pageProps && props.pageProps.itemDetail && props.pageProps.itemDetail.trendHistory; 
    const lastPrice = trendHistory && trendHistory[trendHistory.length - 1] && trendHistory[trendHistory.length - 1].price;
    const lastDate = trendHistory && trendHistory[trendHistory.length - 1] && trendHistory[trendHistory.length - 1].date;
    const itemPriceTrend = trendHistory && trendHistory.map((v) => v.price)
    const itemPriceTrendDate = trendHistory && trendHistory.map((v) => v.date)
    const priceMax = Math.max.apply(null, itemPriceTrend);
    const priceMin = Math.min.apply(null, itemPriceTrend);


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
                        {pathCheck && (
                            <ButtonArea
                                style={{
                                    borderTop: '2px solid #F6F6F6'
                                }}
                            >
                                <ButtonWrap
                                    onClick={sendMail}
                                    style={{
                                        backgroundColor: 'white',
                                        marginRight: 10
                                    }}
                                >
                                    {/* {i18n.t('detail.sell_button')} */}
                                    Bán sản phẩm
                                </ButtonWrap>
                                <ButtonWrap
                                    onClick={sendMail}
                                    style={{
                                        backgroundColor: '#00E27F',
                                        marginLeft: 10,
                                        color: 'white'
                                    }}
                                >
                                    {/* {i18n.t('detail.loan_button')} */}
                                    Khoản vay thế chấp
                                </ButtonWrap>
                            </ButtonArea>
                        )}
                    </LeftArticleWrap>

                    <RightArticleWrap>
                        <TitleTextWrap>
                            <TitleText>
                                {itemDetail && itemDetail.name}
                            </TitleText>
                        </TitleTextWrap>
                        <SubTitleTextWrap>
                            <SubTitle>
                                {/* {i18n.t('detail.secondHand')} */}
                                Lời trích dẫn lại gần đây nhất
                            </SubTitle>
                            <PriceText>
                                {numeral(lastPrice).format('0,0')} VND
                                {/* {i18n.t('unit')} */}
                            </PriceText>
                        </SubTitleTextWrap>
                        <div style={{paddingTop: 30, borderBottom: '1px solid #F6F6F6'}}>
                            <SubTitle>
                                {/* {i18n.t('detail.marketPrice')} */}
                                Giá thấp nhất
                            </SubTitle>
                            <div style={{marginTop: 20, marginBottom: 30}}>
                                <PriceTextWrap>
                                    <PriceMaxText style={{color: 'black'}}>
                                        {/* {i18n.t('detail.highest')} */}
                                        Giá cao nhất
                                    </PriceMaxText>
                                    <PriceMaxText>{numeral(priceMax).format('0,0')} VND
                                        {/* {i18n.t('unit')} */}
                                    </PriceMaxText>
                                </PriceTextWrap>
                                <PriceTextWrap>
                                    <PriceMinText style={{color: 'black'}}>
                                        {/* {i18n.t('detail.lowest')} */}
                                        Giá thấp nhất
                                    </PriceMinText>
                                    <PriceMinText>
                                        {numeral(priceMin).format('0,0')} VND
                                        {/* {i18n.t('unit')} */}
                                    </PriceMinText>
                                </PriceTextWrap>
                            </div>
                        </div>
                        <div style={{paddingTop: 30, display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <SubTitle>
                                {/* {i18n.t('detail.chart')} */}
                                Biểu đồ trích dẫn cũ
                            </SubTitle>
                            <SubTitle style={{fontWeight: 400}}>
                                {moment(lastDate).format("YYYY. MM")}
                            </SubTitle>
                        </div>
                        <div style={{padding: '20px 20px 40px', backgroundColor: '#DCFFF7', marginTop: 20,borderRadius: 20}}>
                            <EachLineChartContainer priceTrend={itemPriceTrend} dateTrend={itemPriceTrendDate} name={itemDetail && itemDetail.name} width={'100%'} height={250}/>
                        </div>
                    </RightArticleWrap>

                </HomeMainContainer>
            </div>
        </HomeWrap>
    )
}

export default withHead(VNItemTrendDetail, '똠양꿍', 'Bạn có thể biết giá trung bình của giá thị trường đã qua sử dụng, xu hướng giá cả, giới hạn cho vay và giá');