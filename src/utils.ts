import { RequestMethods, RestfulApis } from './type'

// 小写
export function toLower(text: string) {
  return text.toLowerCase()
}

function getConnectChar(url: string) {
  return url.includes('?') ? '&' : '?'
}

export function queryString(url: string, data: Record<string, string | number> = {}) {
  return Reflect.ownKeys(data).reduce((url: string, item: string | number) => {
    return `${url}${getConnectChar(url)}${item}=${data[item]}`
  }, url) as string
}

export function isPost(method: RequestMethods) {
  return toLower(method) === RestfulApis.POST
}
