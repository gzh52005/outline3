// custom-tab-bar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    current:0,
    "list": [
      {
        "pagePath": "pages/index/index",
        "text": "首页",
        "iconPath": "/assets/img/home.png",
        "selectedIconPath": "/assets/img/home_active.png"
      },
      {
        "pagePath": "pages/list/list",
        "text": "班级列表",
        "iconPath": "/assets/img/list.png",
        "selectedIconPath": "/assets/img/list_active.png"
      },
      {
        "pagePath": "pages/mine/mine",
        "text": "我的",
        "iconPath": "/assets/img/mine.png",
        "selectedIconPath": "/assets/img/mine_active.png"
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    goto(e){
      const {url,index} = e.currentTarget.dataset;
      console.log('index=',index)
      this.setCurrent(index);
      wx.switchTab({
        url:'/'+url,
      })
    },
    setCurrent(current){
      this.setData({
        current
      });
    },
    changeTab(e){
      const {index,item} = e.detail;
      this.setCurrent(index);
      wx.switchTab({
        url:'/'+item.pagePath,
      })
    }
  }
})
