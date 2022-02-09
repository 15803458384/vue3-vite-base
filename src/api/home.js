import request from '../request/index'

// home
export const getHomeData = () => {
    return request({
        url: '/home',
        method: 'get',
    })
}

// home
export const getHomeData2 = () => {
    return request({
        url: '/home/ee',
        method: 'get',
    })
}