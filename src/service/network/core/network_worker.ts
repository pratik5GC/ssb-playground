import axios, { type AxiosRequestConfig } from 'axios'

import Constants from './constants'

export default class NetworkWorker {
  static get = (endPoints: string, pathParams: string[], qParams: {}, headers: {}) => {
    console.log('Here are parameters', pathParams)
    let url = `${Constants.BASE_URL}${endPoints}`
    // Append pathParams
    if (pathParams && pathParams.length != 0) {
      for (const param of pathParams) {
        url += `/${param}`
      }
    }

    // Append qParams
    const queryParams = new URLSearchParams(qParams)
    if (queryParams.toString()) {
      url += `?${queryParams.toString()}`
    }
    console.log(url)
    const config: AxiosRequestConfig = {
      headers: headers,
      // params: qParams
    }

    // let userService: UserService;

    // let names = userService.getNames("Developement");
    return axios.get(url, config)
  }
  static post = (endPoints: string, pathParams: string[], qParams: {}, body: {}, headers: {}) => {
    console.log(`Here are your endpoints ${pathParams}`)
    let url = `${Constants.BASE_URL}${endPoints}`
    //Append pathParams
    if (pathParams && pathParams.length != 0) {
      for (const param of pathParams) {
        url += `/${param}`
      }
    }
    //Append qparams
    // if (qParams && Object.keys(qParams).length !== 0) {
    //   body = { ...body, ...qParams }
    // }
    console.log(url)
    const config: AxiosRequestConfig = {
      headers: headers,
      params: qParams
    }
    return axios.post(url, body, config)
  }
}
