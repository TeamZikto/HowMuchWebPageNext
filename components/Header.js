import React, {useState, useEffect} from 'react';
import Link from "next/link";
import styled from "styled-components";
import Router, { useRouter, withRouter } from 'next/router'
import {Dropdown} from "react-bootstrap";
import i18n from '../config/lang/i18n';

import logo from '../assets/image/logo.png'
import logoEn from "../assets/image/vn/logo_en.png";

import langImage from '../assets/image/lang.png';
import check from '../assets/image/check.png';
import uncheck from '../assets/image/uncheck.png';

const HeaderContainer = styled.header`
    color: black;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70px;
    z-index: 10;
  /* background-color: #f9f8f9; */
    background-color: white;
    @media (max-width: 1024px) {
        padding: 0 40px;
    }
    @media (max-width: 768px) {
        height: auto;
        padding: 0 20px;
    }
`;
// border-bottom: 1px solid #ccc;

const List = styled.ul`
    width: 1184px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 768px) {
        
    }
`;

const Item = styled.li`
    width: 140px;
    height: 100%;
    display: flex;
    @media (max-width: 1024px) {
    }
    @media (max-width: 768px) {
        /* width: 62px; */
    }
`;

const LinkItem = styled.li`
  /* width: 140px; */
    height: 100%;
    display: flex;
    
    @media (max-width: 1024px) {
    }
    @media (max-width: 768px) {
        /* &:nth-child(1) {
        margin-right: 12px;
        } */
        /* width: 70px; */
    }
`;

const Image = styled.img`
    height: 30px;
`;

const SLink = styled(Link)`
    height: 70px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    /* color: ${props => props.current ? `#00EEB6` : ''}; */
    font-size: 20px;
    /* border-bottom: 6px solid ${props => props.current ? `#00EEB6` : 'transparent'}; */
    transition: border-bottom .5s ease-in-out;
    cursor: pointer;
    @media (max-width: 768px) {
        font-size: 12px;
        height: 60px;
        /* padding-top: 24px; */
        padding: 0 10px;
        border-bottom-width: 2px;
        padding-top: 15px;
    }
`;

const ALink = styled.a`
    height: 60px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-size: 20px;
    transition: border-bottom .5s ease-in-out;
    /* color: ${props => props.current ? `#00EEB6` : ''}; */
    font-size: 20px;
    /* border-bottom: 6px solid ${props => props.current ? `#00EEB6` : 'transparent'}; */
    cursor: pointer;
    @media (max-width: 768px) {
        font-size: 12px;
        height: 60px;
        /* padding-top: 24px; */
        padding: 0 10px;
        border-bottom-width: 2px;
        /* padding-top: 15px; */
    }
`

const LangImage = styled.img`
    width: 24px;
    height: 24px;
    @media (max-width: 1024px) {
        
    }
    @media (max-width: 768px) {
        width: 20px;
        height: 20px;
        /* margin-top: 11px; */
        /* padding-top: 24px; */
        /* border-bottom-width: 2px; */
    }
`

const linkStyle = {
        // marginRight: 15
    };
    
const Header = (props) => {
    const { router } = props;
    const nextRouter = useRouter();
    const [lang, setLang] = useState('korean');

    useEffect(() => {
        const {pathname} = nextRouter;
        const changeLang = () => {
            if(pathname.includes('/vn')) {
                i18n.changeLanguage('vn')
                setLang('Vietnamese')
            } else {
                i18n.changeLanguage('ko')
                setLang('korean')
            }
        }
        changeLang();
    }, [])

    const changeLanguage = (e) => {
        if(e.split(',')[0] === 'ko') {
            Router.push('/')
        } else if(e.split(',')[0] === 'vn'){
            Router.push('/vn')
        }
        i18n.changeLanguage(e.split(',')[0]);
    
        // 이름변경
        setLang(e.split(',')[1])
    }


    return (
        <HeaderContainer>
            <List>
                <Item>
                    {lang !== 'korean'
                        ? <ALink onClick={() => Router.push('/vn')} style={{border: 'none', justifyContent: 'flex-start'}}><Image src={logoEn} alt="my image" /></ALink>
                        : <ALink onClick={() => Router.push('/')} style={{border: 'none', justifyContent: 'flex-start'}}><Image src={logo} alt="my image" /></ALink>
                    }
                </Item>
                <div style={{ display: "flex" }}>
                    {lang !== 'korean'
                        ? null
                        : <LinkItem><ALink onClick={() => Router.push('/itemTrend')}>{i18n.t('header.label1')}</ALink></LinkItem>
                    }
                    {lang !== 'korean'
                        ? null 
                        : <LinkItem><ALink href="https://ulmaya.zikto.com/page/">{i18n.t('header.label2')}</ALink></LinkItem>
                    }
                    <LinkItem>
                        <Dropdown style={{height: '100%', height: 65, display: 'flex', justifyContent: 'center', alignItems: 'center'}} onSelect={changeLanguage}>
                            <Dropdown.Toggle variant="secondary" size="sm" style={{backgroundColor: 'white'}}>
                                <LangImage src={langImage} />
                            </Dropdown.Toggle>
                            <Dropdown.Menu
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        backgroundColor: 'white',
                                        padding: '10px 20px',
                                        boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 32px 0px, rgba(0, 0, 0, 0.1) 0px 6px 20px 0px',
                                        marginTop: 5,
                                    }}
                                >
                                <Dropdown.Item eventKey={["ko", "korean"]}>
                                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: 100, marginBottom: 10}}>
                                        <p>{i18n.t('lang.ko')}</p>
                                        <p style={{width: 16, height: 16}}>
                                            {lang === 'korean' ? <img src={check} style={{width: 16, height: 16}} /> : <img src={uncheck} style={{width: 16, height: 16}} /> }
                                        </p>
                                    </div>
                                </Dropdown.Item>
                                {/* <Dropdown.Item eventKey={["en", "English"]}>
                                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: 100, marginBottom: 10}}>
                                    <p style={{fontFamily: 'SpoqaHanSans-Regular'}}>{i18n.t('lang.en')}</p>
                                    <p style={{width: 16, height: 16}}>
                                    {i18n && i18n.language === 'en' ? <img src={check} style={{width: 16, height: 16}} /> : <img src={uncheck} style={{width: 16, height: 16}} />}
                                    </p>
                                </div>
                                </Dropdown.Item> */}
                                <Dropdown.Item eventKey={["vn", "Vietnamese"]}>
                                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: 100, }}>
                                        <p>{i18n.t('lang.vn')}</p>
                                        <p style={{width: 16, height: 16}}>
                                            {lang === 'Vietnamese'  ? <img src={check} style={{width: 16, height: 16}} /> : <img src={uncheck} style={{width: 16, height: 16}} />}
                                        </p>
                                    </div>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </LinkItem>
                </div>
            </List>
        </HeaderContainer>
    )
};

export default Header;