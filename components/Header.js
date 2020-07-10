import React, {useState, useEffect} from 'react';
import Link from "next/link";
import styled from "styled-components";
import Router, { useRouter, withRouter } from 'next/router'
import {Dropdown} from "react-bootstrap";

import logo from '../assets/image/logo.png'
import langImage from '../assets/image/lang.png';

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
    color: ${props => props.current ? `#00EEB6` : ''};
    font-size: 20px;
    border-bottom: 6px solid ${props => props.current ? `#00EEB6` : 'transparent'};
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
    height: 70px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-size: 20px;
    transition: border-bottom .5s ease-in-out;
    color: ${props => props.current ? `#00EEB6` : ''};
    font-size: 20px;
    border-bottom: 6px solid ${props => props.current ? `#00EEB6` : 'transparent'};
    @media (max-width: 768px) {
        font-size: 12px;
        height: 60px;
        /* padding-top: 24px; */
        padding: 0 10px;
        border-bottom-width: 2px;
        padding-top: 15px;
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
        margin-top: 11px;
        /* padding-top: 24px; */
        border-bottom-width: 2px;
    }
`

const linkStyle = {
        // marginRight: 15
    };
    
const Header = (props) => {
    const { router } = props;
    const nextRouter = useRouter();
    const [lang, setLang] = useState('korean');


    return (
        <HeaderContainer>
            <List>
                <Item>
                    <ALink onClick={() => Router.push('/')} style={{border: 'none', justifyContent: 'flex-start'}}><Image src={logo} alt="my image" /></ALink>
                </Item>
                <div style={{ display: "flex" }}>
                    {lang !== 'korean'
                        ? null
                        : <LinkItem><ALink onClick={() => Router.push('/ItemTrend')}>가격 비교</ALink></LinkItem>
                    }
                    {lang !== 'korean'
                        ? null 
                        : <LinkItem><ALink href="https://ulmaya.zikto.com/page/">블로그</ALink></LinkItem>
                    }
                    <LinkItem>
                        <Dropdown style={{height: '100%', height: 70, display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '6px solid transparent'}}>
                            <Dropdown.Toggle variant="secondary" size="sm" style={{width: 24, height :24, backgroundColor: 'white'}}>
                                <LangImage src={langImage} />
                            </Dropdown.Toggle>
                        </Dropdown>
                    </LinkItem>
                </div>
            </List>
        </HeaderContainer>
    )
};

export default Header;