import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { Result } from '../../../models/result'
import siteConfig from '../../../config/site'
export interface IHttpClient {
    get<T>(url: string, config?: AxiosRequestConfig): Promise<Result<T>>
    post<T>(url: string, payload: any): Promise<Result<T>>
}
class HttpClient implements IHttpClient {
    instance: AxiosInstance
    constructor(config: AxiosRequestConfig) {
        this.instance = axios.create(config)
    }
    get<T>(url: string, config?: AxiosRequestConfig): Promise<Result<T>> {
        return new Promise<Result<T>>((resolve) => {
            this.instance
                .get(url, config)
                .then((response: any) => {
                    resolve(response.data as Result<T>)
                })
                .catch((response: any) => {
                    resolve((response?.response?.data ? response.response.data :  {ok: false, message: 'err message'}) as Result<T>)
                })
        })
    }
    post<T>(url: string, payload: any): Promise<Result<T>> {
        return new Promise<Result<T>>((resolve) => {
            this.instance
                .post(url, payload)
                .then((response: any) => {
                    resolve(response.data as Result<T>)
                })
                .catch((response: any) => {
                    resolve((response?.response?.data ? response.response.data :  {ok: false, message: 'err message'}) as Result<T>)
                })
        })
    }
}

export const appApi: IHttpClient = new HttpClient({
    baseURL: siteConfig.QUIZAPPBASEAPIURL,
    timeout: 30000,
    headers: {
        common: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    }
})

export const proApi: IHttpClient = new HttpClient({
    baseURL: siteConfig.QUIZAPPBASEAPIURL,
    timeout: 30000,
    headers: {
        common: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    }
})
