export const baseUrl = 'http://120.76.247.5:2020/api';
export function request(url, data, options = {}) {
  url = baseUrl + url;
  const promise = new Promise((resolve, reject) => {
    wx.request({
      url,
      data,
      ...options,
      success(res) {
        resolve(res.data);
      },
      fail() {
        reject()
      }
    })

  })

  return promise
}