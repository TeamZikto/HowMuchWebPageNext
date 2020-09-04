import React, { useState, useEffect } from "react";
import { trend } from "../api/api";
import styled from "styled-components";
import Router, { useRouter } from "next/router";

const HomeWrap = styled.div`
  width: 100%;
  height: 100%;
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

const ItemListPage = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const getItemList = async () => {
      const result = await trend.getAllItemList();
      setData(result.data.data);
      console.log(result, "-");
    };
    getItemList();
  }, []);

  return (
    <HomeWrap>
      <HomeArticleContainer>
        <FirstArticleWrap>
          {data &&
            data.map((v, i) => {
              const url = v && v.name.split(" ").join("-");
              return (
                <div key={i}>
                  <h2
                    onClick={() =>
                      Router.push(
                        `/itemTrendDetail/[id]`,
                        `/itemTrendDetail/${url}`
                      )
                    }
                  >
                    <div>{v.name}</div>
                  </h2>
                </div>
              );
            })}
        </FirstArticleWrap>
      </HomeArticleContainer>
    </HomeWrap>
  );
};

export default ItemListPage;
