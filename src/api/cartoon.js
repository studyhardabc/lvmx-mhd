// 专门处理漫画相关的接口请求

// 引入封装好的axios
import request from '@/utils/request'

// 一个接口暴露一个方法
export const getBanner = () => {
  // return的是接口调用之后axios返回的promise对象
  return request({
    url: '/api/comic_v2/getproad',
    method: 'GET',
    params: {
      apptype: 8,
      appversion: '1.0',
      channel: 'web-app',
      adgroupid: 123
    }
  })
}
