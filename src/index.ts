import { RequestMethods, RestfulApis, Options } from './type'
import { toLower, queryString, isPost } from './utils'

function createHeader(headers: Headers, methods: RequestMethods = "POST") {
  const defaultHeaders = {
    ContentType: toLower(methods) !== RestfulApis.GET
      ? 'application/json; charset=UTF-8'
      : 'application/x-www-form-urlencoded'
  }

  return new Headers({
    ...defaultHeaders,
    ...headers
  })
}

function createRequest(defaultUrl: string, options: Options) {
  const headers = createHeader(options.headers, options.methods)
  const url = isPost(options.methods) ? defaultUrl : queryString(defaultUrl, options.body)

  return new Request(url, {
    ...options,
    headers
  })
}

function get(url: string, options: Options & { methods: 'GET' }) {
  return fetch(
    createRequest(
      url,
      options
    )
  )
}

function post(url, options: Options & { methods: 'POST' }) {
  return fetch(
    createRequest(
      url,
      options
    )
  )
}
