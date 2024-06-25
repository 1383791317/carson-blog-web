import { request } from '@/utils/request';
import * as articleType from './types/article';
export function getMenu() {
  return request({
    url: '/home/menus',
    method: 'get',
  });
}
export function getCategoryInfo(params : articleType.categoryInfoRequest) {
  return request({
    url: '/category/info',
    method: 'get',
    params: params
  });
};
export function getTagInfo(params : articleType.categoryInfoRequest) {
  return request({
    url: '/tag/info',
    method: 'get',
    params: params
  });
};
export function getArticleList(params: articleType.articleListRequest) {
  return request({
    url: '/article/list',
    method: 'get',
    params: params
  });
}
export function getArticleDetail(id: number) {
  return request({
    url: '/article/detail',
    method: 'get',
    params: {id:id}
  });
}
export function getTagsAll() {
  return request({
    url: '/tags/all',
    method: 'get',
  });
}