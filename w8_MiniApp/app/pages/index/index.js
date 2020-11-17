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
  
  onLoad: function () {
    const player = wx.createInnerAudioContext();

    player.src = '/assets/audio/niliuchenghe.mp3';

    // player.play()
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
