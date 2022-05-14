//http.ts 用于封装Axios
import axios, { Axios, AxiosRequestConfig } from 'axios'
import NProgress from 'nprogress'
import { config } from 'process'

//  设置请求头和请求路径
axios.defaults.baseURL = '/api'
axios.defaults.timeout = 20000
axios.defaults.headers.post['Cotent-Type'] = 'application/json;charset=UTF-8'

//  请求拦截
axios.interceptors.request.use(
  (config): AxiosRequestConfig<any> => {
    const token = window.sessionStorage.getItem('token')
    if (token) {
      config.headers.token = token
    }
    return config
  },
  (error) => {
    return config
  }
)
//  响应拦截
axios.interceptors.response.use((res) => {
  if (res.data.code === 111) {
    sessionStorage.setItem('token', '')
  }
  return res
})

interface ResType<T> {
  code: number
  data?: T
  msg: string
  err?: string
}

interface Http {
  get<T>(url: string, params?: unknown): Promise<ResType<T>>
  post<T>(url: string, params?: unknown): Promise<ResType<T>>
}

const http: Http = {
  get(url, params) {
    return new Promise((resolve, reject) => {
      NProgress.start()
      axios
        .get(url, { params })
        .then((res) => {
          NProgress.done()
          resolve(res.data)
        })
        .catch((err) => {
          NProgress.done()
          reject(err.data)
        })
    })
  },
  post(url, params) {
    return new Promise((resolve, reject) => {
      NProgress.start()
      axios
        .get(url, JSON.stringify(params))
        .then((res) => {
          NProgress.done()
          resolve(res.data)
        })
        .catch((err) => {
          NProgress.done()
          reject(err.data)
        })
    })
  },
}

export default http
