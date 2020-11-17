//index.js
//获取应用实例
const app = getApp()
console.log('app=',app);

Page({
  data: {
    currentIndex:1,
    recommend:[{id:1000,text:'1000',imgurl:'xxx'},{id:2000,text:'2000',imgurl:'xxx'},{id:3000,text:'3000',imgurl:'xxx'}],
    pageTitle:'首页',
    view:'APP'
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  goto(){
    console.log('goto')
    // wx.navigateTo({
    //   url: '/pages/list/list',
    // })
    wx.switchTab({
      url: '/pages/mine/mine',
    })
    
  },
  changeTitle(e){
    // vue写法
    // this.pageTitle = e.detail.value;
    // this.data.pageTitle = e.detail.value
    console.log('pageTile=',this.data.pageTitle)

    this.setData({
      pageTitle:e.detail.value
    })
  }
})
