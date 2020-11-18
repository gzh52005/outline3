// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pos:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSetting({
      success:({authSetting})=>{
        if(!authSetting['scope.userLocation']){
          wx.authorize({
            scope: 'scope.userLocation',
            success:()=>{
              console.log('授权用户位置');

              this.getLocation()
            },
            fail(){
              console.log('不允许获取用户位置')
            }
          })
        }else{
          this.getLocation();
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  getLocation(){
    wx.getLocation({
      type:'gcj02',
      success:(res)=>{
        console.log('当前位置=',res)
        const {longitude,latitude} = res;
        // this.setData({
        //   pos:{
        //     longitude,
        //     latitude
        //   }
        // })
        wx.openLocation({
          longitude,
          latitude
        })
      }
    })
  }
})