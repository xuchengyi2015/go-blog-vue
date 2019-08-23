import { CommonApi, RequestType } from '@/api/commonApi'

export function GetArticles(params) {
    const api = `/api/v1/blogs`;
    var commonApi = new CommonApi(api, RequestType.POST, params)
    return commonApi.Request();
}

export function GetTags() {
    const api = `/api/v1/tags`;
    var commonApi = new CommonApi(api)
    return commonApi.Request();
}

export function GetCategories() {
    const api = `/api/v1/categories`;
    var commonApi = new CommonApi(api)
    return commonApi.Request();
}

export function GetArticle(id) {
    const api = `/api/v1/blog/${id}`;
    var commonApi = new CommonApi(api)
    return commonApi.Request();
}