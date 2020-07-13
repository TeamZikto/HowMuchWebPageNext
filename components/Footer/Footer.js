
import React, {Component, ReactDOM} from 'react';
import styled from 'styled-components'

// image
import logo from '../../assets/image/logo.png'
import blog from '../../assets/image/blog_icon.png'
import instagram from '../../assets/image/instagram_icon.png'

const FooterContainer = styled.div`
    color: black;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    background-color: rgba(100,100,100,1);
    padding-top: 40px;
    padding-bottom: 40px;
    @media (max-width: 1024px) {
      padding: 40px 40px 60px;
    }
    @media (max-width: 768px) {
      position: relative;
      padding: 30px 20px 40px;
    }
  `
  // border-bottom: 1px solid #ccc;

const List = styled.ul`
  width: 1184px;
  display: flex;
  flex-direction: row;
  justify-content: space-aroud;
  align-items: flex-start;
  @media (max-width: 768px) {
    flex-direction: column
  }
`;

const Item = styled.li`
  height: 100%;
  flex: 1;
  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

const SNSlinkImageWrap = styled.div`
  
  flex-direction: row;
  display: none;
  @media (max-width: 1024px) {
    display: flex;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0px;
    right: 0px;
  }
`

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
    margin-top: 30px;
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
  font-family: 'SpoqaHanSans-Regular';
  @media (max-width: 768px) {
    font-size: 12px;
  }
`

const FooterSubTextRegular = styled.p`
  font-size: 14px;
  color: white;
  font-weight: 300;
  line-height: 24px;
  font-family: 'SpoqaHanSans-Thin';
  @media (max-width: 768px) {
    font-size: 12px;
  }
`

const FooterSubTextPhoneRegular = styled.a`
  font-size: 14px;
  color: white;
  font-weight: 300;
  line-height: 24px;
  font-family: 'SpoqaHanSans-Thin';
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

export default class Footer extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  componentDidMount = () => {
  }


  render() {
    return (
        <FooterContainer>
            <List>
                <Item style={{flex: 1}}>
                    <FooterText>(주)얼마야</FooterText>
                    <div style={{marginBottom: 15}}>
                        <FooterSubTextBold>사업자 등록번호</FooterSubTextBold>
                        <FooterSubTextRegular>527 - 81 - 01503 | 대표 : 김경태</FooterSubTextRegular>
                    </div>
                    <div style={{marginBottom: 15}}>
                        <FooterSubTextBold>주소</FooterSubTextBold>
                        <FooterSubTextRegular>06133 서울 강남구 테헤란로 129 7층</FooterSubTextRegular>
                    </div>
                    <div style={{marginBottom: 15}}>
                        <FooterSubTextBold>고객센터(전당포 협력 및 제휴문의)</FooterSubTextBold>
                        <FooterSubTextPhoneRegular href={"mailto:" + 'support@zikto.com'}>support@zikto.com</FooterSubTextPhoneRegular>
                    </div>
                    <div>
                        <FooterSubTextBold>연락처(전당포 협력 및 제휴문의)</FooterSubTextBold>
                        <FooterSubTextPhoneRegular href="tel: +82-02-6203-9458">02 - 6203 - 9458</FooterSubTextPhoneRegular>
                    </div>
                </Item>
                <Item style={{flex: 1}}>
                    <FooterText>(주)직토대부</FooterText>
                    <div style={{marginBottom: 15}}>
                        <FooterSubTextBold>사업자 등록번호</FooterSubTextBold>
                        <FooterSubTextRegular>701 - 81 - 01682 | 대표 : 김경태</FooterSubTextRegular>
                    </div>
                    <div style={{marginBottom: 15}}>
                        <FooterSubTextBold>대부업 등록번호</FooterSubTextBold>
                        <FooterSubTextRegular>2019 - 서울강남 - 0159(대부업)</FooterSubTextRegular>
                    </div>
                    <div style={{marginBottom: 15}}>
                        <FooterSubTextBold>주소</FooterSubTextBold>
                        <FooterSubTextRegular>06133 서울 강남구 테헤란로 129 8층</FooterSubTextRegular>
                    </div>
                    <div>
                        <FooterSubTextBold>연락처</FooterSubTextBold>
                        <FooterSubTextRegular>02 - 6203 - 9458</FooterSubTextRegular>
                    </div>
                    <SNSlinkImageWrap>
                        <SNSlinkImageContainer>
                            <a href="https://www.instagram.com/subvalue/">
                            <img style={{width: '100%', height: '100%'}} src={instagram} />
                            </a>
                        </SNSlinkImageContainer>
                        <SNSlinkImageContainer>
                            <a href="https://ulmaya.zikto.com/page/">
                            <img style={{width: '100%', height: '100%'}} src={blog} />
                            </a>
                        </SNSlinkImageContainer>
                    </SNSlinkImageWrap>
                </Item>
                <Item style={{flex: 1}}>
                    <FooterText>금리 안내</FooterText>
                        <div style={{marginBottom: 15}}>
                        <FooterSubTextBold>금리</FooterSubTextBold>
                    <FooterSubTextRegular>연 24% 이내</FooterSubTextRegular>
                    </div>
                    <div style={{marginBottom: 15}}>
                        <FooterSubTextBold>연체 금리</FooterSubTextBold>
                        <FooterSubTextRegular>연체 금리 연 24% 이내</FooterSubTextRegular>
                    </div>
                    <div>
                        <FooterSubTextRegular>취급수수료 및 조기상환조건이 없습니다. 중개수수료를 요구하거나 받는 것은 불법입니다. 과도한 빚은 당신에게 큰 불행을 안겨줄 수 있습니다. 대출 시 귀하의 신용등급이 하락할 수 있습니다.</FooterSubTextRegular>
                    </div>
                    <SNSlinkImageWrap>
                        <SNSlinkImageContainer>
                            <a href="https://www.instagram.com/subvalue/">
                            <img style={{width: '100%', height: '100%'}} src={instagram} />
                            </a>
                        </SNSlinkImageContainer>
                        <SNSlinkImageContainer>
                            <a href="https://ulmaya.zikto.com/page/">
                            <img style={{width: '100%', height: '100%'}} src={blog} />
                            </a>
                        </SNSlinkImageContainer>
                    </SNSlinkImageWrap>
                </Item>
                <ItemSNS style={{flex: 0.5}}>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: "flex-end"}}>
                        <SNSlinkImageContainer style={{width: 62, height: 62}}>
                            <a href="https://www.instagram.com/subvalue/">
                                <img style={{width: '100%', height: '100%'}} src={instagram} />
                            </a>
                        </SNSlinkImageContainer>
                        <SNSlinkImageContainer style={{width: 62, height: 62}}>
                            <a href="https://ulmaya.zikto.com/page/">
                                <img style={{width: '100%', height: '100%'}} src={blog} />
                            </a>
                        </SNSlinkImageContainer>
                    </div>
                </ItemSNS>
            </List>
        </FooterContainer>
    )
  }
}
