import {request} from '../../utils/request'
const {formatDate} = require('../../utils/util')

console.log('formatDate=',formatDate());

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
  
  onLoad: async function () {
    const player = wx.createInnerAudioContext();

    player.src = '/assets/audio/niliuchenghe.mp3';

    // player.play()

    // console.log('request=',request);
    const {data} = await request('/class');
    console.log('data=',data);

    console.log('upperCase=',this.toUpperCase('laoxie'))
  },
  onShow(){
    const tabBar = this.getTabBar();
    tabBar.setCurrent(0)
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
  },
  toUpperCase(str){
    return str.toUpperCase()
  }
})
