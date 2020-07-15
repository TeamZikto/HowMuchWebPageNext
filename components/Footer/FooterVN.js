
import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
// image
import instagram from '../../assets/image/instagram_icon.png'

const FooterContainer = styled.div`
    color: black;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    background-color: rgba(100,100,100,1);
    padding: 40px 40px;
    @media (max-width: 1024px) {
        padding: 40px 40px 60px;
        justify-content: flex-start;
    }
    @media (max-width: 768px) {
        position: relative;
        justify-content: flex-start;
        padding: 30px 20px 40px;
    }
`
  // border-bottom: 1px solid #ccc;

const List = styled.ul`
    width: 1184px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    @media (max-width: 1024px) {
        width: 100%;
    }
    @media (max-width: 768px) {
        width: 100%;
        flex-direction: column
    }
`;

const Item = styled.li`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    
    
    @media (max-width: 768px) {
        /* margin-bottom: 30px; */
    }
`;

const ItemSNS = styled.li`
    height: 100%;
    flex: 1;
    @media (max-width: 1024px) {
        display: none;
    }
`

const SNSlinkImageContainer = styled.div`
    width: 62px;
    height: 62px;
    margin-right: 20px;
    @media (max-width: 1024px) {
        width: 50px;
        height: 50px;
    }
    @media (max-width: 768px) {
        width: 30px;
        height: 30px;
    }
`

const Image = styled.img`
  height: 30px;
`

const FooterSubTextBold = styled.p`
  font-size: 14px;
  color: white;
  font-weight: 500;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`

const FooterSubTextRegular = styled.p`
  font-size: 14px;
  color: white;
  font-weight: 300;
  line-height: 24px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`

const FooterSubTextPhoneRegular = styled.a`
  font-size: 14px;
  color: white;
  font-weight: 300;
  line-height: 24px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`

const FooterText = styled.p`
    
  font-size: 22px; 
  margin-bottom: 20px;
  color: white;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`

const FooterVN = () => {
    return (
        <FooterContainer>
            <div style={{display: 'flex'}}>
                <List>
                <Item style={{flex: 1}}>
                    <FooterText>Ulmaya</FooterText>
                </Item>
                <Item>
                    <div style={{marginBottom: 15, display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
                        <FooterSubTextBold style={{marginRight: 10}}>Contact</FooterSubTextBold>
                        <FooterSubTextPhoneRegular href={"mailto:" + 'support@ulmaya.io'}>support@ulmaya.io</FooterSubTextPhoneRegular>
                    </div>
                </Item>
                <Item>
                    <div style={{marginBottom: 15}}>
                    <FooterSubTextBold>Copyright © 2020 Ulmaya Pte, Ltd. All rights reserved.</FooterSubTextBold>
                    </div>
                </Item>
                </List>
                <ItemSNS style={{flex: 0.5}}>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: "flex-end"}}>
                        <SNSlinkImageContainer style={{width: 62, height: 62}}>
                        <a href="https://www.instagram.com/subvalue/">
                            <img style={{width: '100%', height: '100%'}} src={instagram} />
                        </a>
                        </SNSlinkImageContainer>
                    </div>
                </ItemSNS>
            </div>
        </FooterContainer>
    )
}

export default FooterVN;
