import { _AsyncData } from 'nuxt3/dist/app/composables/asyncData'
import { hash } from 'ohash'
import { API_BASEURL, CURRENT_ENV } from '@/config'

let baseUrl = API_BASEURL[CURRENT_ENV]

// 指定后端返回的基本数据类型
export interface Response<T = any> { // 公司后端接口统一返回格式
    code: number;
    message: string;
    data: T;
}

const fetch = (url: string, options?: any): Promise<any> => {
    const reqUrl = baseUrl + url;
    const key = hash(JSON.stringify(options) + '_' + url);
    return new Promise((resolve, reject) => {
        useFetch(reqUrl, { ...options, key }).then(({ data, error }: _AsyncData) => {
            if (error.value) {
                reject(error.value)
                return
            }
            const value = data.value
            if (!value) {
                // 这里处理错误回调
                reject(value)
                // $router.replace('/login')
            } else {
                resolve(value)
            }
        }).catch((err: any) => {
            reject(err)
        })
    })
}

class Request {
    get(url: string, params?: any): Promise<any> {
        return fetch(url, { method: 'get', params })
    }

    post(url: string, params?: any): Promise<any> {
        return fetch(url, { method: 'post', params })
    }

    put(url: string, body?: any): Promise<any> {
        return fetch(url, { method: 'put', body })
    }

    delete(url: string, body?: any): Promise<any> {
        return fetch(url, { method: 'delete', body })
    }
}

export default new Request