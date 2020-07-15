import CONST from "../config/const";
import axios from "axios";

const api = axios.create({
  baseURL: CONST.HOST
});

export const item = {
  recentGetItems: () => api.get("/api/web/recent")
};

export const trend = {
  appleTrendGetItems: (category1) => api.get(`/api/web/trend/${category1}/1`),
  smTrendGetItems: (category1) => api.get(`/api/web/trend/${category1}/2`),
  lgTrendGetItems: (category1) => api.get(`/api/web/trend/${category1}/3`),

  getAllItemList: () => api.get(`/api/web/trend/itemList`),
  getAllVNItemList: () => api.get(`/api/web/trend/vn/itemList`)
};

export const getTrend = {
  getTrendItemBrand: (category1) => api.get(`/api/web/${category1}`),
  getTrendItemModel: (category1, category2) => api.get(`/api/web/${category1}/${category2}`),
}

export const detail = {
  getDetailTrendItemKo: (id) => api.get(`/api/web/detail/${id}`),
  getDetailTrendItemVn: (id) => api.get(`/api/vn/${id}`),
}

export const search = {
  getSearchItem: (keyword) => api.get(`/api/web/search?keyword=${keyword}`)
}

export const request = {
  send: (email) => api.post(`/api/web/send/email`, {email})
}