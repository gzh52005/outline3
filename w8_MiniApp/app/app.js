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
  }
})