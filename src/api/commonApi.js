import axios from 'axios'
import { Notification, Message } from 'element-ui';

export const RequestType = {
    GET: 'GET',
    POST: 'POST'
}

export class CommonApi {
    constructor(api, type = RequestType.GET, params = null) {
        this.type = type
        this.api = api;
        this.params = params
    }

    Request() {
        switch (this.type) {
            case RequestType.GET:
                return this._get();

            case RequestType.POST:
                return this._post();

            default:
                Notification({
                    type: 'warning',
                    title: '关键字错误',
                    message: `不支持关键字${this.type}!`
                })
                break;
        }

    }

    _get() {
        return new Promise((resolve, reject) => {
            axios.get(this.api).then(res => {
                if (res.data.status == 0) {
                    resolve(res.data)
                } else {
                    Message({
                        type: "error",
                        message: res.data.error
                    });
                    reject(res.data)
                }
            }).catch(err => {
                Notification({
                    type: 'error',
                    title: '返回错误',
                    message: err.message
                });
                reject(err)
            })
        })
    }

    _post() {
        return new Promise((resolve, reject) => {
            axios.post(this.api, this.params).then(res => {
                if (res.data.status == 0) {
                    resolve(res.data)
                } else {
                    Message({
                        type: "error",
                        message: res.data.error
                    });
                    reject(res.data)
                }
            }).catch(err => {
                Notification({
                    type: 'error',
                    title: '返回错误',
                    message: err.message
                });
                reject(err)
            })
        })
    }
}