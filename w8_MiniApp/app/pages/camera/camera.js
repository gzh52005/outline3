// pages/camera/camera.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pictures:[],
    cmr:null,
    videos:[],
    album:[],
    recording:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取授权信息
    wx.getSetting({
      success:({authSetting})=>{
        console.log('授权结果=',authSetting);

        // 当前页面需要用到`camera`,`album`
        if(!authSetting['scope.camera']){
          wx.authorize({
            scope: 'scope.camera',
            success () {
              // 用户点击允许
            },
            fail(){
              // 用户拒绝、
              // wx.showToast({
              //   title:'拒绝后无法使用摄像头功能'
              // });

              wx.showModal({
                showCancel:true,
                title:'拒绝后无法使用摄像头功能，是否开启摄像头',
                success(res){
                  if(res.confirm){
                    console.log('确认')
                    wx.openSetting({
                      success(res){
                        console.log('openSetting=',res)
                      }
                    })
                  }else if(res.cancel){
                    console.log('点击取消')
                  }
                }
              })
            }
          });
        }else{
          const cmr = wx.createCameraContext();

          this.setData({
            cmr
          })
        }

        // 相册权限
        // 第一次进入：提示授权窗口
        // 拒绝过一次：
        if(!authSetting['scope.writePhotosAlbum']){
          wx.authorize({
            scope: 'scope.writePhotosAlbum',
            success () {
              // 用户点击允许
              console.log('允许')
            },
            fail(){
              // 用户拒绝、
              wx.showToast({
                title:'拒绝'
              })
            }
          });
        }


        // 获取用户微信信息
        if(!authSetting['scope.userInfo']){
          wx.authorize({
            scope: 'scope.userInfo',
            success () {
              // 用户点击允许
              console.log('允许获取用户信息')
            },
            fail(){
              // 用户拒绝、
             console.log('拒绝获取用户信息')
            }
          });
        }
      }
    });
    
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
  takePhoto(){
    const {cmr,pictures,album} = this.data;

    cmr.takePhoto({
      success:(res)=>{
        console.log('res=',res);

        this.setData({
          pictures:[res.tempImagePath,...pictures],
          album:[{type:'image',url:res.tempImagePath},...album]
        })

        wx.saveImageToPhotosAlbum({
          filePath:res.tempImagePath
        })
      }
    })
  },
  preview(e){
    const {current} = e.currentTarget.dataset;
    const {album} = this.data;
    // wx.previewImage({
    //   urls:pictures,
    //   current:pictures[current]
    // })
    wx.previewMedia({
      sources:album,
      current
    })
  },
  takeVideo(){
    const {cmr,videos,recording,album} = this.data;
    if(recording){
      // 停止录像
      cmr.stopRecord({
        success:(res)=>{
          this.setData({
            recording:false,
            videos:[res,...videos],
            album:[{type:'video',url:res.tempVideoPath,poster:res.tempThumbPath},...album]
          })
        }
      })
    }else{

      cmr.startRecord({
        success:(res)=>{
          this.setData({
            recording:true
          })
        }
      })
    }
  },
  getUser(e){
    console.log(e.detail)
  }
})