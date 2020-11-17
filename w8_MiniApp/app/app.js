//app.js
App({
  onLaunch: function () {
    console.log('onLunch')
  },
  onShow(options){
    console.log('onShow',options)
  },
  onHide(){
    console.log('onHide')
  },
  globalData: {
    userInfo: {
      username:'laoxie'
    }
  },
  baseUrl:'http://120.76.247.5:2020/api',
  request(url,data,options={}){
    url = this.baseUrl + url;
    const promise = new Promise((resolve,reject)=>{
      wx.request({
        url,
        data,
        ...options,
        success(res){
          resolve(res.data);
        },
        fail(){
          reject()
        }
      })

    })

    return promise
  }
})