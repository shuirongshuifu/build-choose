import { req } from './api';

// 获取问题分类
export const getType = () => req("get", `/api/faqCategory/list?page=1&pageSize=60`)

// 获取问题分类下有那些问题的列表
export const getTypeChild = (params) => req("post", `/api/faqQuestion/page`, params)

// 获取所有的问题用于模糊检索
export const list = (params) => req("post", `/api/faqQuestion/page`, params)