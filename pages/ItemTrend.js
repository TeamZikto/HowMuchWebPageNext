import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { getTrend } from '../api/api';
import Router, { useRouter } from 'next/router';
import ItemTrendBoxContainer from '../components/ItemTrendBoxContainer';
import withHead from '../components/hoc/withHead';
import imageMain_pc from "../assets/image/pc_main_graphic.png";
import imageMain_mobile from "../assets/image/mobile_main_graphic.png";
import imageMain_tablet from "../assets/image/tablet_main_graphic.png";
import i18n from '../config/lang/i18n';

import lg from '../assets/image/lg.png'
import apple from '../assets/image/apple.png'
import samsung from '../assets/image/samsung.png'

import DownArrow from "../assets/image/icon/down_arrow.png";
import Close from "../assets/image/icon/close.png";

const itemType = '휴대폰'

const LogoList = [
    {
        image: `${apple}`,
    },
    {
        image: `${samsung}`,
    },
    {
        image: `${lg}`,
    },
]

const HomeWrap = styled.div`
    width: 100%;
    height: 100%;
`;

const HomeMainContainer = styled.div`
    width: 1184px;
    height: 320px;
    margin: 0 auto;
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #f9f8f9;
    align-items: center;
    background-image: url(${imageMain_pc});
    padding: 0 40px;
    @media (max-width: 1024px) {
        width: 100%;
        height: 100%;
        background-size: contain;
        background-image: url(${imageMain_tablet});
    }
    @media (max-width: 768px) {
        width: 100%;
        height: 154px;
        background-size: 70%;
        background-position: right;
        background-color: #f9f8f9;
        background-repeat: no-repeat;
        background-image: url(${imageMain_mobile});
        padding: 0 20px;
    }
`;

const FirstArticleWrap = styled.div`
    height: 100%;
    display: flex;
    width: 1184px;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    @media (max-width: 1024px) {
        justify-content: flex-start;
        padding: 0 40px;
        margin-top: 350px;
    }
    @media (max-width: 768px) {
        margin-top: 20px;
        padding: 0 0px;
    }
`;

const TitleText = styled.h1`
    color: black;
    font-size: 48px;
    line-height: 1.3125;
    margin-bottom: 87px;
    font-family: 'SpoqaHanSans-Bold';

    @media (max-width: 1024px) {
        
    }
    @media (max-width: 768px) {
        font-size: 28px;
        margin-bottom: 20px;  
    }
`;

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

const SecondArticleWrap = styled.div`
    display: flex;
    flex-direction: row;
    width: 1184px;
    justify-content: space-between;
    align-items: flex-start;
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

const SecondaryTitle = styled.div`
    margin-top: 50px;
    font-size: 24px;
    line-height: 1.3125;
    font-weight: 400;
    margin-bottom: 30px;
    font-family: 'SpoqaHanSans-Regular';
    font-weight: nomal;
    @media (max-width: 1024px) {
    }
    @media (max-width: 768px) {
        margin-top: 30px;
        font-size: 16px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        display: none;
    }
`

const LogoContainer = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    @media (max-width: 1024px) {
    }
    @media (max-width: 768px) {
        display: none;
    }
`

const LogoItems = styled.li`
    width: 50px;
    height: 50px;
    &:nth-child(2) {
        margin: 0 24px;
    }
`

const SelectOptionTitle = styled.div`
    font-size: 24px;
    line-height: 1.3125;
    font-family: 'SpoqaHanSans-Regular';
    font-weight: nomal;
    margin-bottom: 30px;
    @media (max-width: 1024px) {
        font-size: 16px;
    }
    @media (max-width: 768px) {
        margin-top: 30px;
        font-size: 16px;
    }
`

const SelectButtonOptionWrap = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 1024px) {
        height: 50px;
    }
    @media (max-width: 768px) {
        height: 50px;
    }
`

const SelectButtonOption = styled.button`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #00EEB6;
    padding-bottom: 20px;
    background-color: transparent;
`

const SearchButtonOption = styled.button`
    width: 100%;
    height: 100%;
    background-color: #00EEB6;
    border-radius: 10px;
`

const ButtonText = styled.span`
    font-size: 24px;
    line-height: 1.3125;
    font-weight: 400;
    font-weight: 600;
    color: white;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 1024px) {
        font-size: 16px;
    }
    @media (max-width: 768px) {
        font-size: 16px;
    }
`

const IconTag = styled.div`
    width: 20px;
    height: 20px;
  /* margin-bottom: 20px; */
`

const ItemList = styled.li`
    margin-top: 20px;
    &:nth-child(1) {
        margin-top: 0px;
    }
`

const PriceTrendArticleWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 1184px;
    padding: 80px 40px;
    @media (max-width: 1024px) {
        padding: 40px;
    }
    @media (max-width: 768px) {
        padding: 40px;
    }
`;

const PriceTrendSortTabContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 30px 0;
    @media (max-width: 1024px) {
        margin: 0;
    }
    @media (max-width: 768px) {
        margin: 0;
    }
`



const ItemTrend = () => {
    const [brandList, setBrandList] = useState([]);
    const [modelList, setModelList] = useState([]);
    const [openBrandCategory, setOpenBrandCategory] = useState(false);
    const [openModelCategory, setOpenModelCategory] = useState(false);
    const [selectedBrand, setSelectBrand] = useState(null);
    const [selectedModel, setSelectedModel] = useState(null);

    useEffect(() => {
        const scrollTop = () =>{
            window.scrollTo({top: 0, behavior: 'smooth'});
        };
        scrollTop();
    }, [])

    const _selectBrandName = async() => {
        try {
            const result = await getTrend.getTrendItemBrand(itemType);
            setBrandList(result.data.data)
            setOpenBrandCategory(!openBrandCategory)
            setSelectedModel(null)
        } catch(e) {
            console.log(e)
        }
    }

    const _selectedBrandName = async (brand) => {
        try {
            setSelectBrand(brand);
            setOpenBrandCategory(false);
        } catch(e) {
            console.log(e)
        }
    }

    const _selectModelName = async (itemType, selectedBrand) => {
        if(selectedBrand) {
            try {
                const result = await getTrend.getTrendItemModel(itemType, selectedBrand)
                setModelList(result.data.data);
                setOpenModelCategory(!openModelCategory)
            } catch(e) {
                console.log(e)
            }
        } else {
            alert('브랜드를 먼저 선택해주세요.')
        }
        
    }

    const _selectedModelName = async (model) => {
        try {
            setSelectedModel(model.name);
            setOpenModelCategory(false);
        } catch(e) {
            console.log(e)
        }
    }

    const _linkItemDetail = (selectedModel) => {
        const name = selectedModel.split(' ').join('-')
        if(selectedBrand && selectedModel) {
            Router.push(`/itemTrendDetail/[id]`, `/itemTrendDetail/${name}`)
        } else {
            alert('빈칸을 입력해주세요.')
        }
    }

    return (
        <HomeWrap>
            <HomeMainContainer>
                <FirstArticleWrap>
                    <TitleText>
                        찍으면 돈이된다.
                        <br />
                        얼마야.
                    </TitleText>
                </FirstArticleWrap>
            </HomeMainContainer>

            <HomeArticleContainer>
                <SecondArticleWrap>
                    <div style={{width: '100%'}}>
                        <SubTitleTextMobile>
                            휴대폰 정보를 입력하여<br />중고 시세를 알아보세요.
                        </SubTitleTextMobile>
                        <SubTitleText>
                            휴대폰 정보를 입력하여<br />중고 시세를 알아보세요.
                        </SubTitleText>
                        <SecondaryTitle>
                            중고 시세의 평균값, 시세 추이, 대출 한도,<br/>매입가를 알 수 있습니다. 
                        </SecondaryTitle>
                        <LogoContainer>
                            {LogoList && LogoList.map((v, i)=> (
                                <LogoItems key={i}>
                                    <img style={{width: '100%'}} src={v.image} alt="apple_logo"/>
                                </LogoItems>
                            ))}
                        </LogoContainer>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', width: '100%', position: 'relative'}}>
                        <div style={{marginBottom: 40}}>
                            <SelectOptionTitle>
                                브랜드를 선택해주세요.
                            </SelectOptionTitle>
                            <SelectButtonOption
                                onClick={() => _selectBrandName()}
                            >
                                <div style={{fontWeight: 600, fontSize: 30}}>
                                    {selectedBrand}
                                </div>
                                <IconTag>
                                    <img style={{width: '100%'}} src={openBrandCategory ? Close : DownArrow} alt="down"/>
                                </IconTag>
                            </SelectButtonOption>
                            {openBrandCategory && (
                                <ul style={{position: 'absolute', width: '100%', backgroundColor: 'white', padding: 30, boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 32px 0px, rgba(0, 0, 0, 0.1) 0px 6px 20px 0px'}}>
                                    {brandList && brandList.map((v) => (
                                        <ItemList>
                                            <button
                                                style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', backgroundColor: 'transparent'}}
                                                onClick={() => _selectedBrandName(v)}
                                            >
                                                <p style={{fontWeight: 600, fontSize: 20}}>{v}</p>
                                                <p style={{fontWeight: 600, fontSize: 20, color: '#00EEB6'}}>선택</p>
                                            </button>
                                        </ItemList>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <div style={{marginBottom: 70}}>
                            <SelectOptionTitle>
                                모델명을 선택해주세요.
                            </SelectOptionTitle>
                            <SelectButtonOption
                                onClick={() => _selectModelName(itemType, selectedBrand)}
                            >
                                <div style={{fontWeight: 600, fontSize: 30}}>
                                    {selectedModel}
                                </div>
                                <IconTag>
                                    <img style={{width: '100%'}} src={openModelCategory ? Close : DownArrow} alt="down"/>
                                </IconTag>
                            </SelectButtonOption>
                            {openModelCategory && (
                                <ul style={{position: 'absolute', width: '100%', backgroundColor: 'white', padding: 30, boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 32px 0px, rgba(0, 0, 0, 0.1) 0px 6px 20px 0px', overflow: 'scroll', height: '100%'}}>
                                    {modelList && modelList.map((v, i) => (
                                        <ItemList key={i}>
                                            <button
                                            style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', backgroundColor: 'transparent'}}
                                            onClick={() => _selectedModelName(v)}
                                            >
                                            <p style={{fontWeight: 600, fontSize: 20}}>{v.name}</p>
                                            <p style={{fontWeight: 600, fontSize: 20, color: '#00EEB6'}}>선택</p>
                                            </button>
                                        </ItemList>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <SelectButtonOptionWrap>
                            <SearchButtonOption onClick={() => _linkItemDetail(selectedModel)}>
                                <ButtonText>검색 하기</ButtonText>
                            </SearchButtonOption>
                        </SelectButtonOptionWrap>
                    </div>
                </SecondArticleWrap>
            </HomeArticleContainer>
            <HomeArticleContainer style={{backgroundColor: '#DCFFF7'}}>
                <PriceTrendArticleWrap>
                    <SubTitleTextMobile>
                        얼마야에서 가장 공정한<br />모바일 중고 시세를 알아보세요.
                    </SubTitleTextMobile>
                    <SubTitleText>
                        얼마야에서 가장 공정한<br />모바일 중고 시세를 알아보세요.
                    </SubTitleText>
                    <PriceTrendSortTabContainer>
                        {/* <div>
                        <PriceTrendSortList>
                            <li>최신순</li>
                            <li>높은 가격</li>
                            <li>낮은 가격</li>
                            <li>변동율 상승</li>
                            <li>변동율 하락</li>
                        </PriceTrendSortList>
                        </div>
                        <div>
                        <button>
                            가격 비교
                        </button>
                        </div> */}
                    </PriceTrendSortTabContainer>
                    <div>
                        <ItemTrendBoxContainer itemType={itemType}/>
                    </div>
                </PriceTrendArticleWrap>
            </HomeArticleContainer>
        </HomeWrap>
    )
}

export default withHead(ItemTrend, '얼마야 - 중고 시세를 알아보세요.', '중고 시세의 평균값, 시세 추이, 대출 한도, 매입가를 알 수 있습니다.');
