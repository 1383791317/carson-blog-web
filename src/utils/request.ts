import axios from 'axios';
import { isString } from 'lodash-es';
import { message as $message, Modal } from 'ant-design-vue';
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import { ResultEnum } from '@/enums/apiHttpEnum';

export interface RequestOptions extends AxiosRequestConfig {
  /** 请求成功是提示信息 */
  successMsg?: string;
  /** 请求失败是提示信息 */
  errorMsg?: string;
  /** 成功时，是否显示后端返回的成功信息 */
  showSuccessMsg?: boolean;
  /** 失败时，是否显示后端返回的失败信息 */
  showErrorMsg?: boolean;
  /** 确认弹窗配置 */
  confirmConfig ?: any;
  requestType?: 'json' | 'form';
}
const defaultRequestOptions: RequestOptions = {
  successMsg : '',
  errorMsg : '',
  showSuccessMsg : false,
  showErrorMsg: true,
  confirmConfig : null,
  requestType: 'json' ,
};
const UNKNOWN_ERROR = '未知错误，请重试';
/** 真实请求的路径前缀 */
export const baseApiUrl = import.meta.env.VITE_BASE_API_URL;

const controller = new AbortController();
const service = axios.create({
  baseURL: baseApiUrl,
  timeout: 10000,
  signal: controller.signal,
});

type BaseResponse<T = any> = Omit<API.ResOp, 'data'> & {
  data: T;
};

const requestContentType = (type:string) => {
    switch (type) {
      case 'json':
        return {'Content-Type': 'application/json'};
      case 'form':
        return {'Content-Type': 'multipart/form-data'};
    }
};

export interface resultType {
  error: any;
  response: object;
  apiResultData: Array<API.tableType> | object;
  apiResult: API.ResOp | object;
  isSuccess:boolean
}
const resultData:resultType = {
  error:null,
  response:{},
  apiResult:{},
  apiResultData:[],
  isSuccess:false
};
export async function request(_url: string | RequestOptions, _config: RequestOptions = {}) {
  const url = isString(_url) ? _url : _url.url;
  const config = {...defaultRequestOptions,...isString(_url) ? _config : _url};
  try {
    // 兼容 from data 文件上传的情况
    const { requestType, ...rest } = config;
    const response = (await service.request({
      url,
      ...rest,
      headers: {
        ...rest.headers,
        ...( requestContentType(requestType as string)),
      },
    })) as AxiosResponse<BaseResponse>;

    const { message, status } = response.data || {};

    switch (status) {
      case ResultEnum.SUCCESS:
        const { successMsg, showSuccessMsg } = config;
        if (showSuccessMsg) {
          $message.success(successMsg ? successMsg : message);
        } 
        break;
      case ResultEnum.ERROR:
        const { errorMsg, showErrorMsg } = config;
        if (showErrorMsg) {
          $message.error(errorMsg ? errorMsg : message);
        } 
      break;
      case ResultEnum.CONFIRM:
        const { confirmConfig } = config;
        Modal.confirm(confirmConfig(response.data));
      break;
    }
    resultData.response = response;
    resultData.apiResult = response.data;
    resultData.apiResultData = response.data.data;
    resultData.isSuccess = response.data.data.status === ResultEnum.SUCCESS;
  } catch (error: any) {
    $message.error('内部服务错误，请稍后重试');
    resultData.error =  Promise.reject(error)
  }
  return resultData;
}
