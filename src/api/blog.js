import axios from 'axios'

export function GetArticles(params) {
    return new Promise((resolve, reject) => {
        axios.post(`/api/v1/blogs`, params).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
}

export function GetTags() {
    return new Promise((resolve, reject) => {
        axios.get(`/api/v1/tags`).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
}