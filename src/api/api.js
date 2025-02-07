import axios from "axios";
const http = axios.create({
    baseURL: "/api",
    timeout: 10000
})

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.configure({ showSpinner: false })

//请求拦截
http.interceptors.request.use(
    (config) => {
        NProgress.start() // 开启进度条
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
)
//响应拦截
http.interceptors.response.use(
    (res) => {
        NProgress.done() // 关闭进度条
        return res.data
    },
    (error) => {
        NProgress.done() // 关闭进度条
        return Promise.reject(error);
    }
)

export const req = (method, url, data = null, headers = 'application/json;charset=UTF-8', responseType) => {
    if (method == "post") {
        return http({
            method: 'post',
            url: url,
            data: data,
            headers: {
                'Content-Type': headers,
            },
            responseType
        });
    } else if (method == "get") {
        return http({
            method: 'get',
            url: url,
            params: data,
            headers: {
                'Content-Type': headers
            },
            responseType
        });
    } else if (method == "put") {
        // ......
        return;
    } else if (method == "delete") {
        // .....
        return;
    }
}

