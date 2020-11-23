export default {
  pages: [
    'pages/index/index',
    'pages/camera/camera',
    'pages/mine/mine'
  ],
  window: {
    backgroundTextStyle: 'light', // 下拉刷新才能看到效果
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar:{
    custom:true,
    list:[{
      text:'首页',
      pagePath:'pages/index/index'
    },
    {
      text:'拍照',
      pagePath:'pages/camera/camera'
    },
    {
      text:'我的',
      pagePath:'pages/mine/mine'
    }
  ]
  }
}
