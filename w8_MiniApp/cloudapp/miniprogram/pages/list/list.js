// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    // 获取数据库对象
    const db = wx.cloud.database();

    // 获取集合
    const user = db.collection('class');
    
    // 读取数据库，获取班级列表
    const {data} = await user.where({
      city:'广州'
    }).get();

    // 获取单条数据
    const {data:oneData} = await user.where({_id:'5c67a2cc9087416d9123f16f'})
    const oneData2 = await user.doc('5c67a2cc9087416d9123f16f').get()

    console.log('data=',data);
    console.log('oneData=',oneData);
    console.log('oneData2=',oneData2);

    // 操作符
    // db.command
    const _ = db.command;
    // 查询价格大于100的商品
    // goods.where({price:_.gt(100)})

    // 调用云函数
    const cities = await wx.cloud.callFunction({
      name:'test'
    });

    

    console.log('cities=',cities)
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

  }
})