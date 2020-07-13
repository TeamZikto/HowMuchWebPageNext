import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import { item, search } from '../../api/api';
import Router, { useRouter, withRouter } from 'next/router'
import SearchInput, {createFilter} from 'react-search-input';
import Link from "next/link";
import i18n from '../../config/lang/i18n';

import styled from 'styled-components';
import Meta from '../../components/Meta';
import withHead from '../../components/hoc/withHead';
import ItemTrendBoxContainer from '../../components/ItemTrendBoxContainer';
import TrendItemsBox from '../../components/TrendItemBox';
import ItemSlider from "../../components/Slider";



//  images

import home_title from '../../assets/image/vn/home_title.png';
import home_title_vn from '../../assets/image/vn/home_title_vn.png';

import articleMain from "../../assets/image/article_main.png";
import articleMainVN from '../../assets/image/vn/mockup_vn.png';
import magnifier from '../../assets/image/vn/magnifier.png';
import search_arrow from '../../assets/image/vn/search_arrow.png';
import home_main_image from '../../assets/image/vn/home_main_image.png';

import app_store from "../../assets/image/app-store.png";
import google_play from "../../assets/image/google-play.png";

import imageMain_pc from "../../assets/image/pc_main_graphic.png";
import imageMain_mobile from "../../assets/image/mobile_main_graphic.png";
import imageMain_tablet from "../../assets/image/tablet_main_graphic.png";
import articleSubImage1 from "../../assets/image/article_sub1.png";

import image_blog_pc_1 from '../../assets/image/blog/pc_blog_image_1.png'
import image_blog_pc_2 from '../../assets/image/blog/pc_blog_image_2.png'
import image_blog_pc_3 from '../../assets/image/blog/pc_blog_image_3.png'
import image_blog_pc_4 from '../../assets/image/blog/pc_blog_image_4.png'
import image_blog_pc_5 from '../../assets/image/blog/pc_blog_image_5.png'
import image_blog_pc_6 from '../../assets/image/blog/pc_blog_image_6.png'

const HomeWrap = styled.div`
  width: 100%;
  height: 100%;
`;

const HomeMainContainerEN = styled.div`
  width: 100%;
  /* height: 900px; */
  margin-top: 150px;
  background-size: auto;
  background-position: bottom;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1024px) {
    width: 100%;
    margin-top: 100px;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 100px;
  }
`;

const FirstArticleWrapEN = styled.div`
  /* height: 100%; */
    width: 1184px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    @media (max-width: 1024px) {
        justify-content: flex-start;
        padding: 0 40px;
    }
    @media (max-width: 768px) {
        padding: 0 20px;
    }
`;

const SearchBoxImage = styled.div`
    width: 638px;
    margin-bottom: 62px;
    @media (max-width: 1024px) {
        width: 461px;
        margin-bottom: 62px;
    }
    @media (max-width: 768px) {
        width: 280px;
        margin-bottom: 62px;
    }
`

const SearchBox = styled.div`
    position: relative;
    width: 730px;
    height: 60px;
    border: 2px solid #00E27F;
    border-radius: 30px;
    padding: 17px 30px;
    @media (max-width: 1024px) {
        width: 560px;
    }
    @media (max-width: 768px) {
        width: 280px;
        margin-bottom: 62px;
    }
`

const HomeArticleContainer = styled.div`
    width: 100%;
    height: auto;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    @media (max-width: 1024px) {
        height: auto;

    }
    @media (max-width: 768px) {
        height: auto;
    }
`;

const SubTitleTextMobile = styled.h2`
    display: none;
    font-family: 'SpoqaHanSans-Bold';
    @media (max-width: 1024px) {
        display: none;
    }
    @media (max-width: 768px) {
        font-size: 22px;
        line-height: 1.3125;
        justify-content: center;
        text-align: center;
        line-height: 1.3125;
        display: block;
        font-weight: 600;
        margin-bottom: 30px;
    }
`

const SubTitleText = styled.h2`
    color: black;
    font-size: 40px;
    line-height: 1.3125;
    font-weight: 600;
    font-family: 'SpoqaHanSans-Bold';
    @media (max-width: 1024px) {
        justify-content: flex-start;
        font-size: 28px;
        line-height: 1.3125;
        margin-bottom: 48px;
    }
    @media (max-width: 768px) {
        justify-content: flex-start;
        font-size: 28px;
        display: none;
    }
`;

const SecondArticleWrap = styled.div`
    display: flex;
    flex-direction: row;
    width: 1184px;
    justify-content: space-around;
    align-items: center;
    padding: 80px 40px;
    @media (max-width: 1024px) {
        width: 100%;
        padding: 70px 40px;
    }
    @media (max-width: 768px) {
        height: auto;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 60px 20px;
    }
`;

const SecondArticleImage = styled.div`
    width: 352px;
    @media (max-width: 1024px) {
        width: 250px;
    }
    @media (max-width: 768px) {
        width: 140px;
    }
`
const SecondaryTitle = styled.div`
    margin-top: 50px;
    font-size: 24px;
    line-height: 1.3125;
    margin-bottom: 20px;
    font-weight: nomal;
    @media (max-width: 1024px) {
        font-size: 16px;
    }
    @media (max-width: 768px) {
        margin-top: 30px;
        font-size: 16px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
`
const SearchResultBox = styled.div`
    position: absolute;
    left: -2px;
    top: 50px;
    width: 730px;
    padding: 0 30px;
    background-color: white;
    border: 2px solid #00E26F;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    border-top-width: 0;
    padding-bottom: 20px;
    @media (max-width: 1024px) {
        width: 560px;
    }
    @media (max-width: 768px) {
        width: 280px;
    }
`

const FirstImageBox = styled.div`
    width: 638px;
    @media (max-width: 1024px) {
        width: 560px;
    }
    @media (max-width: 768px) {
        width: 280px;
    }
`



const Home = () => {
    const nextRouter = useRouter();
    const [recentUserItemList, setRecentUserItemList] = useState();
    const [trendItem, setTrendItem] = useState();
    const [searchTerm, setSearchTerm] = useState();
    const [searchItemList, setSearchItemList] = useState([]);

    const filterdData = searchItemList && searchItemList.map((v) => v.name)

    const {pathname} = nextRouter;
    const langCheck = i18n && i18n.language;

    useEffect(() => {
        const getRecentUserItem = async () => {
            try {
                const result = await item.recentGetItems()
                setRecentUserItemList(result.data.data.recentAddedItems)
            } catch(e) {
                console.log(e)
            }
        }

        const getTrendItem = async () => {
            try {
                const result = await item.recentGetItems()
                setTrendItem(result.data.data.trend)
            } catch(e) {
                console.log(e)
            }
        }
        getRecentUserItem();
        getTrendItem();
        
    }, [])

    const _searchUpdated = async (searchTerm) => {
        try {
            const result = await search.getSearchItem(searchTerm)
            setSearchItemList(result.data.data);
            setSearchTerm(searchTerm)
        } catch(e) {
            console.log(e)
        }
    }

    const itemClick = async (item) => {
        Router.push(`/vn/itemTrendDetail/[id]`, `/vn/itemTrendDetail/${(item.name).split(' ').join('-')}`)
    }
    
    const keyPress = (event) => {
        if (event.key === 'Enter') {
            if(searchTerm === '') {
                alert(`${i18n.t('search.error1')}`)
            } else if (searchItemList && searchItemList.length > 1) {
                alert(`${i18n.t('search.error2')}`)
            } else if (searchItemList && searchItemList.length < 1) {
                alert(`${i18n.t('search.error3')}`)
            } else if (searchItemList && searchItemList.length === 1) {
                itemClick(searchItemList[0])
            } else {
                itemClick(searchTerm)
            }
        }
    }


    return (
        <HomeWrap>
            <main>
                <HomeMainContainerEN>
                    <FirstArticleWrapEN>
                        <SearchBoxImage>
                            {langCheck === 'en' ? <img src={home_title} style={{width: '100%'}} /> : <img src={home_title_vn} style={{width: '100%'}} />}
                        </SearchBoxImage>
                        <SearchBox style={{
                            borderBottomLeftRadius: filterdData && filterdData.length !== 0 ? 0 : 30,
                            borderBottomRightRadius: filterdData && filterdData.length !== 0 ? 0 : 30,
                            borderBottomWidth: filterdData && filterdData.length !== 0 ? 0 : 2,
                        }}>
                            <SearchInput
                                onChange={ (searchTerm) => _searchUpdated(searchTerm)}
                                onKeyPress={keyPress}
                                placeholder={`${i18n.t('search.label')}`}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    outline: 'none',
                                    border: 'none',
                                    fontSize: 16,
                                    fontFamily: 'SpoqaHanSans-Regular',
                                    borderBottom: filterdData && filterdData.length !== 0 ? '1px solid #F6F6F6' : '0px',
                                    paddingBottom: filterdData && filterdData.length !== 0 ? 16 : 0,
                                }}
                            />
                            {filterdData && filterdData.length !== 0 ? (
                                <SearchResultBox>
                                    {searchItemList && searchItemList.map((v) => {
                                        return (
                                            <button onClick={() => itemClick(v)} style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',  marginTop: 16, backgroundColor: 'white', width: '100%'}}>
                                                <p style={{fontFamily: 'SpoqaHanSans-Bold'}}>{v.name}</p>
                                                <p style={{width: 16, height: 16}}>
                                                <img src={search_arrow} style={{width: '100%'}} />
                                                </p>
                                            </button>
                                        )
                                    })}
                                </SearchResultBox>
                            ) : (
                                null
                            )}
                            {searchTerm === '' 
                                ? <img style={{width: 24, height: 24, position: 'absolute', right: 30, top: 18}} src={magnifier} /> 
                                // : <button onClick={() => this.setState({searchTerm: ''})}><img style={{width: 18, height: 18, position: 'absolute', right: 30, top: 18, backgroundColor: 'white'}} src={close} /></button> 
                                : null
                            }
                        </SearchBox>
                        <FirstImageBox>
                            <img src={home_main_image} style={{width: '100%'}} />
                        </FirstImageBox>
                    </FirstArticleWrapEN>
                </HomeMainContainerEN>
                <HomeArticleContainer style={{backgroundColor: '#DCFFF7'}}>
                    <SecondArticleWrap>
                        <SubTitleTextMobile>
                            {i18n.t('section_3.line1')}
                        <br/>
                            {i18n.t('section_3.line2')}
                        </SubTitleTextMobile>
                        <SecondArticleImage>
                            {pathname && pathname === '/' ? (
                                <img style={{width: '100%', height: '100%'}} src={articleMain} alt="이미지" />
                            ) : (
                                <img style={{width: '100%', height: '100%'}} src={articleMainVN} alt="이미지" />
                            )}
                        </SecondArticleImage>
                        <div>
                            <SubTitleText>
                                {i18n.t('section_3.line1')}
                                <br/>
                                {i18n.t('section_3.line2')}
                            </SubTitleText>
                            <SecondaryTitle>
                                {i18n.t('section_3.subtitle')}
                            </SecondaryTitle>
                        </div>
                    </SecondArticleWrap>
                </HomeArticleContainer>
            </main>
        </HomeWrap>
    )
}

export default withHead(Home, '얼마야 - 촬영하면 돈이된다', '얼마야는 사진만 찍어서 중고가치를 실시간으로 평가하는 애플리케이션입니다. 평가받은 물건으로 소액대출이 가능한 모바일 전당포 플랫폼입니다.');
