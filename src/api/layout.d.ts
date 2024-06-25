// @ts-ignore
/* eslint-disable */

declare namespace API {
  type ResOp = {
    data: tableType | object | Array<object>;
    code: number;
    status: number;
    message: string;
  };
  interface tableType {
    data:Array<object>;
    page:number,
    page_size:number,
    total:number
  }
  /** 全局通用表格分页请求参数 */
  type PageParams<T = any> = {
    page?: number;
    pageSize?: number;
  } & {
      [P in keyof T]?: T[P];
    };

  type ErrorResponse = {
    /** 业务约定的错误码 */
    errorCode: string;
    /** 业务上的错误信息 */
    errorMessage?: string;
    /** 业务上的请求是否成功 */
    success?: boolean;
  };
 
}
