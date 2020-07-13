import React, {useState, useEffect} from 'react';
import {request} from '../../api/api';
import i18n from '../../config/lang/i18n';
import styled from 'styled-components';
import Router from 'next/router';

import email_image from '../../assets/image/vn/email.png'
import email_mobile_banner from '../../assets/image/vn/email_banner_mobile.png';

const HomeWrap = styled.div`
    width: 100%;
    height: 100%;
`

const HomeMainContainer = styled.div`
  width: 1184px;
  height: 100%;
  margin: 0 auto;
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  /* padding: 80px 40px; */
  @media (max-width: 1024px) {
    width: 100%;
    height: auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }
`;

const SubmitButton = styled.button`
    width: 100%;
    height: 70px;
    border-radius: 10px;
    @media (max-width: 1024px) {
        font-size: 20px;
        height: 50px;
    }
    @media (max-width: 768px) {
        font-size: 20px;
        height: 40px;
    }
`

const EmailInput = styled.input`
    width: 100%;
    outline: none;
    border: none;
    font-family: 'SpoqaHanSans-Bold';
    font-size: 26px;
    @media (max-width: 1024px) {
        font-size: 20px;
    }
    @media (max-width: 768px) {
        font-size: 16px;
    }
`

const SubmitButtonText = styled.p`
    font-family: 'SpoqaHanSans-Bold';
    font-size: 30px;
    @media (max-width: 1024px) {
        font-size: 20px;
    }
    @media (max-width: 768px) {
        font-size: 16px;
    }
`

const BoldText = styled.p`
    font-family: 'SpoqaHanSans-Bold';
    font-size: 30px;
    @media (max-width: 1024px) {
        font-size: 20px;
    }
    @media (max-width: 768px) {
        font-size: 20px;
    }
`

const RegularText = styled.p`
    font-family: 'SpoqaHanSans-Regular';
    font-size: 24px;
    @media (max-width: 1024px) {
        font-size: 16px;
    }
    @media (max-width: 768px) {
        font-size: 16px;
    }
`

const LeftArticleWrapPC = styled.div`
    width: 100%;
    margin-right: 27px;
    @media (max-width: 1024px) {
        display: none;
    }
    @media (max-width: 768px) {
        display: none;
    }
`

const LeftArticleWrapMobile = styled.div`
    display: none;
    @media (max-width: 1024px) {
        margin-right: 0px;
        display: block;
    }
    @media (max-width: 768px) {
        display: block;
    }
`

const RightArticleWrap = styled.div`
    width: 100%;
    margin-left: 27px;
    @media (max-width: 1024px) {
        margin-left: 0px;
    }
    @media (max-width: 768px) {
    }
`

const SendEmailContainer = () => {
    const [email, setEmail] = useState('');
    const emailRegExp = /^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/;
    const emailCheck = email.match(emailRegExp)

    const handleChange = (e) => {
        setEmail(e.target.value);   
    }

    const sendEmail = async (email) => {
        const emailRegExp = /^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/;
        if(email.match(emailRegExp)) {
            try {
                const result = await request.send(email)
                if(result.status === 200) {
                    alert(`${i18n.t('email.success')}`)
                    Router.push('/vn')
                }
            } catch(e) {
                console.log(e)
            }
        }
        else {
            alert(`${i18n.t('email.error')}`)
        }
    }

    return (
        <HomeWrap>
            <HomeMainContainer>
                <LeftArticleWrapPC>
                    <img style={{width: '100%'}} src={email_image} />
                </LeftArticleWrapPC>
                <LeftArticleWrapMobile>
                    <img style={{width: '100%'}} src={email_mobile_banner} />
                </LeftArticleWrapMobile>
                <RightArticleWrap style={{marginTop: 60}}>
                    <div style={{ lineHeight: 1.3125, marginBottom: 84}}>
                        <BoldText>
                            {i18n.t('mail.label1.line1')}
                            <br/>
                            {i18n.t('mail.label1.line2')}
                        </BoldText>
                    </div>
                    <div style={{ lineHeight: 1.3125 }}>
                        <RegularText>
                            {i18n.t('mail.label2')}
                        </RegularText>
                        <div style={{marginTop: 20, paddingBottom: 14, width: '100%', borderBottom: '2px solid #00E27F'}}>
                            <EmailInput
                                placeholder="example@example.com"
                                onChange={handleChange}
                            />
                        </div>
                        <div style={{width: '100%', marginTop: 70}}>
                            <SubmitButton
                                style={{
                                    backgroundColor: emailCheck ? '#00E27F' : '#F6F6F6'
                                }}
                                onClick={() => sendEmail(email)}
                            >
                                <SubmitButtonText
                                    style={{
                                        color: emailCheck ? 'white' : 'black',
                                    }}
                                >
                                    {i18n.t('send_button')}
                                </SubmitButtonText>
                            </SubmitButton>
                        </div>
                    </div>
                </RightArticleWrap>
            </HomeMainContainer>
        </HomeWrap>
    )
}

export default SendEmailContainer