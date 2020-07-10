import React, { Component, useState, useEffect } from "react";
import Slider from "react-slick";
import Swiper from 'react-id-swiper';





import numeral from "numeral";
import styled from 'styled-components'

const SliderWrap = styled.div`
    position: relative;
    width: 100%;
    border-radius: 14px;
    height: 160px;
    @media (max-width: 1024px) {
        height: 201px;
    }
    @media (max-width: 767px) {
        height: 120px;
    }
`

const ItemSlider = ({recentUserItemList}) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToScroll: 4,
        initialSlide: 0,
        variableWidth: true,
        className: "center",
        // dots: true,
        // centerPadding: "60px",
        //   swipeToSlide: true,
  
        autoplay: true,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 1,
                dots: false
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
    };

    const params = {
        slidesPerView: 5,
        spaceBetween: 50,
        shouldSwiperUpdate : true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
    },
    breakpoints: {
        1024: {
            slidesPerView: 4,
            spaceBetween: 40
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        320: {
            slidesPerView: 2,
            spaceBetween: 20
        }
    }
    }

    return (
        <div>
            {recentUserItemList && recentUserItemList.length > 0 && (
                <Swiper {...params}>
                    {recentUserItemList && recentUserItemList.map ((item, index) => {
                    return (
                        <div key={index}>
                            <SliderWrap
                                style={{
                                    backgroundImage: `url(${item.picture1})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            >
                                <div style={{width: '100%', height: '100%', position: 'absolute', backgroundColor: 'rgba(0,0,0,0.4)', borderRadius: 14, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                <span style={{fontWeight: 'bold', color: 'white', fontSize: 18}}>
                                    {item.ItemPrice.category2}
                                </span>
                                </div>
                                {/* <img 
                                style={{width: '100%', height: '100%'}}
                                src={item.picture1}
                                /> */}
                            </SliderWrap>
                            <div style={{marginTop: 10}}>
                                <span style={{fontWeight: 'normal', fontSize: 12, lineHeight: 2, fontFamily: 'SpoqaHanSans-Regular'}}>
                                    {item.lastFour} 님
                                </span>
                            </div>
                            <div
                                style={{
                                    borderBottom: "1px solid ",
                                    paddingBottom: 5
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: 16,
                                        lineHeight: 1.3125,
                                        fontFamily: 'SpoqaHanSans-Bold'
                                    }}
                                >
                                    {numeral(item.valuation1).format("0,0")} 원
                                </span>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    marginTop: 7,
                                    justifyContent: 'flex-start',
                                    alignItems: 'center'
                                }}
                            >
                                <span
                                    style={{
                                        marginRight: 8,
                                        color: "#FF7575",
                                        fontSize: 12,
                                        lineHeight: 1.3125,
                                        fontFamily: 'SpoqaHanSans-Bold'
                                    }}
                                >
                                    최고가
                                    {/* {i18n.t('price.highest')} */}
                                </span>
                                <span
                                    style={{
                                        fontSize: 12,
                                        color: "#FF7575",
                                        fontFamily: 'SpoqaHanSans-Bold'
                                    }}
                                >
                                    {numeral(item.ItemPrice.price_max).format("0,0")} 원
                                </span>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    marginTop: 3,
                                    justifyContent: 'flex-start',
                                    alignItems: 'center'
                                }}
                            >
                                <span
                                    style={{
                                        marginRight: 8,
                                        color: "#75B1FF",
                                        fontSize: 12,
                                        lineHeight: 1.3125,
                                        fontFamily: 'SpoqaHanSans-Bold'
                                    }}
                                    >
                                    최저가
                                    {/* {i18n.t('price.lowest')} */}
                                </span>
                                <span
                                    style={{
                                        fontSize: 12,
                                        color: "#75B1FF",
                                        fontFamily: 'SpoqaHanSans-Bold'
                                    }}
                                >
                                        {numeral(item.ItemPrice.price_min).format("0,0")} 원
                                </span>
                            </div>
                        </div>
                    )
                })}
            </Swiper>
            )}
        </div>
    )
}

export default ItemSlider;

