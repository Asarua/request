// restful apis
export enum RestfulApis {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete',
  HEAD = 'head',
  OPTIONS = 'options',
  PATCH = 'patch'
}

export type UpperCaseMethods = keyof typeof RestfulApis
export type LowerCaseMethods = Lowercase<UpperCaseMethods>

export type RequestMethods = UpperCaseMethods | LowerCaseMethods

// 请求的时候传递的参数
export interface Options {
  /**
   * 请求的参数
   */
  body: any;
  /**
   * 请求头
   */
  headers: Headers;
  /**
   * 请求的方式
   */
  methods: RequestMethods;
  /**
   * 请求拦截器
   */
  beforeRequest?: Function;
  /**
   * 响应拦截器
   */
  afterRequest?: Function;
  /**
   * 失败之后最多重新请求的次数
   */
  maxTimes?: number;
  /**
   * 超时时间
   */
  timeout?: number;
  /**
   * 根域名
   */
  baseUrl?: string;
}
