import Head from "next/head";
import React, { useState, useEffect } from "react";
import { item } from "../api/api";
import Router, { useRouter, withRouter } from "next/router";
import Link from "next/link";
import i18n from "../config/lang/i18n";
import styled from "styled-components";
import Meta from "../components/Meta";
import withHead from "../components/hoc/withHead";
import ItemTrendBoxContainer from "../components/ItemTrendBoxContainer";
import TrendItemsBox from "../components/TrendItemBox";
import ItemSlider from "../components/Slider";

//  images
import articleMain from "../assets/image/article_main.png";

import app_store from "../assets/image/app-store.png";
import google_play from "../assets/image/google-play.png";

import imageMain_pc from "../assets/image/pc_main_graphic.png";
import imageMain_mobile from "../assets/image/mobile_main_graphic.png";
import imageMain_tablet from "../assets/image/tablet_main_graphic.png";
import articleSubImage1 from "../assets/image/article_sub1.png";

import image_blog_pc_1 from "../assets/image/blog/pc_blog_image_1.png";
import image_blog_pc_2 from "../assets/image/blog/pc_blog_image_2.png";
import image_blog_pc_3 from "../assets/image/blog/pc_blog_image_3.png";
import image_blog_pc_4 from "../assets/image/blog/pc_blog_image_4.png";
import image_blog_pc_5 from "../assets/image/blog/pc_blog_image_5.png";
import image_blog_pc_6 from "../assets/image/blog/pc_blog_image_6.png";

const HomeWrap = styled.div`
  width: 100%;
  height: 100%;
`;

const HomeMainContainer = styled.div`
  width: 100%;
  height: 900px;
  background-size: auto;
  background-position: bottom;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #f9f8f9;
  align-items: center;
  background-image: url(${imageMain_pc});
  @media (max-width: 1024px) {
    width: 100%;
    height: 100%;
    background-size: contain;
    background-image: url(${imageMain_tablet});
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;

    backgorund-size: 100% 100%;
    background-color: #f9f8f9;

    background-repeat: no-repeat;
    background-image: url(${imageMain_mobile});
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
    margin-top: 170px;
    padding: 0 20px;
  }
`;

const TitleText = styled.h1`
  color: black;
  font-size: 48px;
  line-height: 1.3125;
  margin-bottom: 87px;
  font-weight: 600;
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 20px;
  }
`;

const LinkButtonWrap = styled.div`
  display: flex;
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const LinkContainer = styled.a`
  width: 170px;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 54px;
  border-radius: 4px;
  cursor: pointer;
  transition: transform 300ms ease-in-out;
  &:hover {
    transform: translate(0px, -10px);
  }
  @media (max-width: 1024px) {
    width: 150px;
    margin-right: 20px;
  }
  @media (max-width: 768px) {
    width: 80px;
    margin-bottom: 10px;
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

const SubTitleTextMobile = styled.h2`
  display: none;

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
`;

const SubTitleText = styled.h2`
  color: black;
  font-size: 40px;
  line-height: 1.3125;
  font-weight: 600;

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
`;

const ItemTrendLinkButtonWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: center;
    margin-bottom: 30px;
  }
`;

const ItemTrendLinkButton = styled.button`
  width: 128px;
  height: 54px;
  font-size: 20px;
  background-color: #00eeb6;
  border-radius: 27px;
  color: white;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 12px;
    width: 82px;
    height: 40px;
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
`;
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
`;

const ThirdArticleWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 1184px;

  justify-content: center;
  align-items: flex-start;
  padding: 80px 40px 50px;

  @media (max-width: 1024px) {
    width: 100%;
    justify-content: center;
    padding: 80px 40px 50px;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    padding: 50px 30px;
  }
`;

const SubTitleTextThird = styled.h2`
  font-size: 40px;
  line-height: 1.3125;
  justify-content: flex-start;
  margin-bottom: 50px;
  font-weight: 600;

  @media (max-width: 1024px) {
    font-size: 24px;
    margin-bottom: 30px;
  }
  @media (max-width: 768px) {
    font-size: 24px;
    justify-content: center;
    text-align: center;
    margin-bottom: 30px;
  }
`;

const BlogContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const BlogLinkContainer = styled.a`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const BlogContentsContainer = styled.div`
  display: grid;
  grid-column-gap: 24px;
  grid-row-gap: 100px;
  grid-auto-rows: 220px;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
`;

const Home = () => {
  const nextRouter = useRouter();
  const [recentUserItemList, setRecentUserItemList] = useState();
  const [trendItem, setTrendItem] = useState();

  const { pathname } = nextRouter;

  const BlogLinkItems = [
    {
      title: `신개념 대출 서비스 '얼마야' 런칭!`,
      subTitle:
        "인슈어테크 스타트업 ‘직토’가 음지의 영역에 머물러 온 전당포 사업에 인공지능(AI)과 블록체인 ...",
      image: `${image_blog_pc_1}`,
      link:
        "https://ulmaya.zikto.com/page/news/%EB%8D%94%EB%B2%A8-%EC%8B%A0%EA%B0%9C%EB%85%90%EB%8C%80%EC%B6%9C%EC%84%9C%EB%B9%84%EC%8A%A4/"
    },
    {
      title: "얼마야 서비스 OPEN BETA",
      subTitle:
        "얼마야는 소액담보대출 ㈜직토의 자회사 핀테크 스타트업으로, 연간 1조 2000억원 시장인 국내 ...",
      image: `${image_blog_pc_2}`,
      link:
        "https://ulmaya.zikto.com/page/notice/%EC%96%BC%EB%A7%88%EC%95%BC-%EC%98%A4%ED%94%88-%EB%B2%A0%ED%83%80/"
    },
    {
      title: "AI,블록체인 기반 디지털 전당포",
      subTitle:
        "얼마야는 IT기술로 기존 동산담보대출산업을 새롭게 혁신하고자 합니다.",
      image: `${image_blog_pc_3}`,
      link:
        "https://ulmaya.zikto.com/page/notice/AI,%EB%B8%94%EB%A1%9D%EC%B2%B4%EC%9D%B8-%EA%B8%B0%EB%B0%98-%EB%94%94%EC%A7%80%ED%84%B8-%EC%A0%84%EB%8B%B9%ED%8F%AC/"
    },
    {
      title: "FAQ - 물품 배송 가이드",
      subTitle: "안녕하세요 ‘얼마야’ 팀 입니다.",
      image: `${image_blog_pc_4}`,
      link:
        "https://ulmaya.zikto.com/page/faq/FAQ-%EB%AC%BC%ED%92%88%EB%B0%B0%EC%86%A1%EA%B0%80%EC%9D%B4%EB%93%9C/"
    },
    {
      title: "FAQ - 보안 & 대출",
      subTitle: "안녕하세요 ‘얼마야’ 팀 입니다.",
      image: `${image_blog_pc_5}`,
      link:
        "https://ulmaya.zikto.com/page/faq/FAQ-%EB%B3%B4%EC%95%88%EB%8C%80%EC%B6%9C/"
    },
    {
      title: "FAQ - 기타",
      subTitle:
        "Q: 얼마야의 감정평가 기준을 알려주세요. 얼마야에서 물품(동산)에 대한 감정평가는 2단계로 ...",
      image: `${image_blog_pc_6}`,
      link: "https://ulmaya.zikto.com/page/faq/FAQ-%EA%B8%B0%ED%83%80/"
    }
  ];

  useEffect(() => {
    const getRecentUserItem = async () => {
      try {
        const result = await item.recentGetItems();
        setRecentUserItemList(result.data.data.recentAddedItems);
      } catch (e) {
        console.log(e);
      }
    };

    const getTrendItem = async () => {
      try {
        const result = await item.recentGetItems();
        setTrendItem(result.data.data.trend);
      } catch (e) {
        console.log(e);
      }
    };
    const scrollTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    scrollTop();
    getRecentUserItem();
    getTrendItem();
  }, []);

  return (
    <HomeWrap>
      <main>
        <HomeMainContainer>
          <FirstArticleWrap>
            <TitleText>
              {i18n.t("title.label")}
              <br />
              {i18n.t("appName.label")}
            </TitleText>
            <LinkButtonWrap>
              <LinkContainer href="https://apps.apple.com/kr/app/%EC%96%BC%EB%A7%88%EC%95%BC/id1479169245">
                <img
                  alt="app store link"
                  src={app_store}
                  style={{ width: "100%", height: "100%" }}
                  className="appleDown"
                />
              </LinkContainer>
              <LinkContainer href="https://play.google.com/store/apps/details?id=com.zikto.howmuch">
                <img
                  alt="google play link"
                  src={google_play}
                  style={{ width: "100%", height: "100%" }}
                  className="googleDown"
                />
              </LinkContainer>
            </LinkButtonWrap>
          </FirstArticleWrap>
        </HomeMainContainer>
        <HomeArticleContainer style={{ backgroundColor: "#DCFFF7" }}>
          <PriceTrendArticleWrap>
            <SubTitleTextMobile>
              {i18n.t("section_2.line1")}
              <br />
              {i18n.t("section_2.line2")}
            </SubTitleTextMobile>
            <SubTitleText>
              {i18n.t("section_2.line1")}
              <br />
              {i18n.t("section_2.line2")}
            </SubTitleText>
            <PriceTrendSortTabContainer>
              <ItemTrendLinkButtonWrap>
                <a onClick={() => Router.push("/itemTrend")}>
                  <ItemTrendLinkButton>가격 비교</ItemTrendLinkButton>
                </a>
              </ItemTrendLinkButtonWrap>
            </PriceTrendSortTabContainer>
            <div>
              <ItemTrendBoxContainer />
            </div>
          </PriceTrendArticleWrap>
        </HomeArticleContainer>

        {/* Trend item box */}
        <HomeArticleContainer>
          <SecondArticleWrap>
            <SubTitleTextMobile>
              {i18n.t("section_3.line1")}
              <br />
              {i18n.t("section_3.line2")}
            </SubTitleTextMobile>
            <SecondArticleImage>
              {pathname && pathname === "/" ? (
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={articleMain}
                  alt="이미지"
                />
              ) : (
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={articleMainVN}
                  alt="이미지"
                />
              )}
            </SecondArticleImage>
            <div>
              <SubTitleText>
                {i18n.t("section_3.line1")}
                <br />
                {i18n.t("section_3.line2")}
              </SubTitleText>
              <SecondaryTitle>{i18n.t("section_3.subtitle")}</SecondaryTitle>
              <TrendItemsBox trendItem={trendItem} />
            </div>
          </SecondArticleWrap>
        </HomeArticleContainer>

        {/* User recent items */}
        {/* <HomeArticleContainer style={{ backgroundColor: "#f9f8f9" }}>
                    <ThirdArticleWrap>
                        <div style={{ width: "100%" }}>
                            <SubTitleTextThird>
                                {i18n.t('section_4.line1')}
                                <br/>
                                {i18n.t('section_4.line2')}
                            </SubTitleTextThird>
                            <ItemSlider recentUserItemList={recentUserItemList} />
                        </div>
                    </ThirdArticleWrap>
                </HomeArticleContainer> */}

        {/* Blog */}
        <HomeArticleContainer>
          <ThirdArticleWrap>
            <BlogContainer>
              <SubTitleTextThird>
                얼마야 블로그에서 서비스의
                <br />
                자세한 공지를 확인 해주세요.
              </SubTitleTextThird>
              <div
                style={{
                  width: 180,
                  height: 54,
                  borderRadius: 27,
                  backgroundColor: "#00EEB6",
                  fontWeight: "bold",
                  fontSize: 20,
                  color: "white"
                }}
              >
                <BlogLinkContainer href="https://ulmaya.zikto.com/page/">
                  얼마야 블로그
                </BlogLinkContainer>
              </div>
            </BlogContainer>
          </ThirdArticleWrap>
        </HomeArticleContainer>

        <div
          style={{ maxWidth: 1184, padding: "0 40px 200px", margin: "0 auto" }}
        >
          <BlogContentsContainer>
            {BlogLinkItems &&
              BlogLinkItems.map((v, i) => {
                return (
                  <div
                    key={i}
                    style={{
                      borderRadius: 14
                    }}
                  >
                    <a href={`${v.link}`}>
                      <img
                        src={`${v.image}`}
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: 14
                        }}
                      />
                      <div style={{ fontWeight: 600, margin: "5px 0" }}>
                        {v.title}
                      </div>
                      <div
                        style={{
                          fontWeight: 400,
                          fontSize: 12,
                          lineHeight: "20px"
                        }}
                      >
                        {v.subTitle}
                      </div>
                    </a>
                  </div>
                );
              })}
          </BlogContentsContainer>
        </div>
      </main>
      {/* <div style={{position: 'absolute', right: 0, bottom: 0, display: 'none'}}>
                <div onClick={() => Router.push('/itemListPage')}>
                    <div>asd</div>
                </div>
            </div> */}
    </HomeWrap>
  );
};

export default withHead(
  Home,
  "얼마야 - 촬영하면 돈이된다",
  "얼마야는 사진만 찍어서 중고가치를 실시간으로 평가하는 애플리케이션입니다. 평가받은 물건으로 소액대출이 가능한 모바일 전당포 플랫폼입니다.",
  null,
  null,
  "https://zikto-website.s3.ap-northeast-2.amazonaws.com/images/643x989.png"
);
