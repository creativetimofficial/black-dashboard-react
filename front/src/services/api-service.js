const HOST = "http://localhost:3000"
const getQueryParams = (params: JSON) => {
    let query = '';
    if (Object.keys(params).length != 0) {
        query = '&'
        Object.entries(params).map(([key, value]) => {
            query = query.concat(`${key}=${value}`)
        })
    }
    return query
}
const getHeaders = (params) => {
    const headers = new Headers();
    Object.entries(params||{}).map(([key, value]) => {
        headers.append(key, value)
    })
    return headers;
}
const generateBody = (params: JSON) => {
    const formData = new FormData();
    Object.entries(params).map(([key, value]) => {
        formData.append(key, JSON.stringify(value))
    })
}
export const requestGET = async (endpoint: String, headers: Headers, queryParams: JSON) => {
    const requestURL = `${HOST}/${endpoint}${getQueryParams(queryParams)}`
    const getRequestHeaders = getHeaders(headers);
    return fetch(requestURL, {
        headers: getRequestHeaders,
    }).then(rawData => rawData.json())
}
export const requestPOST = async (endpoint: String, headers: Headers, queryParams: JSON, bodyParams: JSON) => {
    const requestURL = `${HOST}/${endpoint}${getQueryParams(queryParams)}`
    const getRequestHeaders = getHeaders(headers);
    return fetch(requestURL, {
        body: generateBody(bodyParams)
    }).then(rawData => rawData.json())
}