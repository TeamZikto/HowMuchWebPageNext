import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Router, { useRouter, withRouter } from 'next/router'
import withHead from '../../components/hoc/withHead';
import { detail } from '../../api/api';
import EachLineChartContainer from '../../components/EachItemLinkChartContainer';
import numeral from 'numeral';
import moment from 'moment';
import i18n from '../../config/lang/i18n';

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
    font-family: 'SpoqaHanSans-Bold';
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
    font-family: 'SpoqaHanSans-Regular';
    @media (max-width: 768px) {
        padding-top: 20px;
    }
`

const SubTitle = styled.h2`
    color: black;
    font-size: 20px;
    line-height: 1.3125;
    font-family: 'SpoqaHanSans-Bold';
`

const PriceText = styled.p`
    color: black;
    font-size: 60px;
    line-height: 1.3125;
    font-weight: 600;
    font-family: 'SpoqaHanSans-Bold';
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
    font-family: 'SpoqaHanSans-Regular';
    line-height: 24px;
    @media (max-width: 768px) {
        font-size: 16px;
    }
`

const PriceMinText = styled.span`
    color: #75B1FF;
    font-size: 26px;
    letter-spacing: 0.8px;
    font-family: 'SpoqaHanSans-Regular';
    @media (max-width: 768px) {
        font-size: 16px;
    }
`
export async function getStaticProps(context) {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    // console.log(context)
    // const [trendItem, setTrendItem] = useState();

    let {id} = context.params;
    id = id.split('-').join(' ')
    // const result = await detail.getDetailTrendItemKo(id.split('-').join(' '));
    const result = await fetch(`https://howmuch.zikto.com/api/web/detail/${id}`)
    const data = await result.json()
    // setTrendItem(result.data.data)
    console.log(data)
    
    // const itemDetail = trendItem && trendItem.itemDetail;
    // const trendHistory = trendItem && trendItem.trendHistory;
    // const lastPrice = trendHistory && trendHistory[trendHistory.length - 1] && trendHistory[trendHistory.length - 1].price
    // const lastDate = trendHistory && trendHistory[trendHistory.length - 1] && trendHistory[trendHistory.length - 1].date
    // const itemPriceTrend = trendHistory && trendHistory.map((v) => v.price)
    // const itemPriceTrendDate = trendHistory && trendHistory.map((v) => v.date)
    // const priceMax = Math.max.apply(null, itemPriceTrend);
    // const priceMin = Math.min.apply(null, itemPriceTrend);
    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        itemDetail: data.data.itemDetail,
      },
    }
  }

export async function getStaticPaths() {
    const res = await fetch(`https://howmuch.zikto.com/api/web/trend/itemList`)
    const items = await res.json()

    const fetchItems = items && items.data
    // const fetchItemName = fetchItems && fetchItems.map((v)=> v.name)
    // console.log(fetchItemName)


    return {
        // paths: [
        //     { params: { id: encodeURIComponent(fetchItemName)} },
        //     // { params: { id :encodeURIComponent(items.name)}}
        // ],

        paths: fetchItems && fetchItems.map((item) => {
            return {
                params: {
                    id: `${encodeURIComponent(item.name)}`
                }
            }
        }),
    
        fallback: true
    }
}

const ItemTrendDetail = (props) => {
    // const {router: {query: {id}}} = props;
    // const [trendItem, setTrendItem] = useState();
    // useEffect(() => {
    //     const getTrendItem = async() => {
    //         try {
    //             const result = await detail.getDetailTrendItemKo(id.split('-').join(' '));
    //             setTrendItem(result.data.data)
    //         } catch(e) {
    //             console.log(e)
    //         }
    //     }
    //     const scrollTop = () =>{
    //         window.scrollTo({top: 0, behavior: 'smooth'});
    //     };
    //     getTrendItem();
    //     scrollTop();
    // }, [props])

    const itemDetail = props.pageProps && props.pageProps.itemDetail;
    // const trendHistory = trendItem && trendItem.trendHistory;
    // const lastPrice = trendHistory && trendHistory[trendHistory.length - 1] && trendHistory[trendHistory.length - 1].price
    // const lastDate = trendHistory && trendHistory[trendHistory.length - 1] && trendHistory[trendHistory.length - 1].date
    // const itemPriceTrend = trendHistory && trendHistory.map((v) => v.price)
    // const itemPriceTrendDate = trendHistory && trendHistory.map((v) => v.date)
    // const priceMax = Math.max.apply(null, itemPriceTrend);
    // const priceMin = Math.min.apply(null, itemPriceTrend);


    return (
        <HomeWrap>
            <div>
                <HomeMainContainer>
                    <LeftArticleWrap>
                        <ImageSectionWrap>
                            <TopContainerWrap>
                                <img style={{width: '100%'}} src={props.itemDetail && props.itemDetail.image} alt="image"/>
                                {/* <img style={{width: '100%'}} src={itemDetail && itemDetail.image} alt="image"/> */}
                            </TopContainerWrap>
                        </ImageSectionWrap>
                    </LeftArticleWrap>

                    <RightArticleWrap>
                        <TitleTextWrap>
                            <TitleText>
                                {/* {JSON.stringify(props)} */}
                                fred {itemDetail && itemDetail.name}
                            </TitleText>
                        </TitleTextWrap>
                        {/* <SubTitleTextWrap>
                            <SubTitle>
                                {i18n.t('detail.secondHand')}
                            </SubTitle>
                            <PriceText>
                                {numeral(lastPrice).format('0,0')} {i18n.t('unit')}
                            </PriceText>
                        </SubTitleTextWrap>
                        <div style={{paddingTop: 30, borderBottom: '1px solid #F6F6F6'}}>
                            <SubTitle>
                                {i18n.t('detail.marketPrice')}
                            </SubTitle>
                            <div style={{marginTop: 20, marginBottom: 30}}>
                                <PriceTextWrap>
                                    <PriceMaxText style={{color: 'black'}}>{i18n.t('detail.highest')}</PriceMaxText>
                                    <PriceMaxText>{numeral(priceMax).format('0,0')} {i18n.t('unit')}</PriceMaxText>
                                </PriceTextWrap>
                                <PriceTextWrap>
                                    <PriceMinText style={{color: 'black'}}>{i18n.t('detail.lowest')}</PriceMinText>
                                    <PriceMinText>{numeral(priceMin).format('0,0')} {i18n.t('unit')}</PriceMinText>
                                </PriceTextWrap>
                            </div>
                        </div>
                        <div style={{paddingTop: 30, display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <SubTitle>
                                {i18n.t('detail.chart')}
                            </SubTitle>
                            <SubTitle style={{fontWeight: 400}}>
                                {moment(lastDate).format("YYYY. MM")}
                            </SubTitle>
                        </div>
                        <div style={{padding: '20px 20px 40px', backgroundColor: '#DCFFF7', marginTop: 20,borderRadius: 20}}>
                            <EachLineChartContainer priceTrend={itemPriceTrend} dateTrend={itemPriceTrendDate} name={itemDetail && itemDetail.name} width={'100%'} height={250}/>
                        </div> */}
                    </RightArticleWrap>

                </HomeMainContainer>
            </div>
        </HomeWrap>
    )
}

export default withHead(ItemTrendDetail, `얼마야 - `, '중고 시세의 평균값, 시세 추이, 대출한도, 매입가를 알 수 있습니다.'); 