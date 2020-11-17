
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    page:1,
    classList:[],
    cityIndex:0,
    cityList:[],
    categoryIndex:0,
    categoryList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    // 发起ajax请求
    // wx.request({
    //   url: 'http://120.76.247.5:2020/api/class',
    //   success:(res)=>{
    //     console.log('class=',res.data);

    //     this.setData({
    //       classList:res.data.data.result
    //     })
    //   },
    //   fail(){

    //   },
    //   complete(){

    //   }
    // });
    const currentCity = 'GZ';
    const currentCategory = 'html5';
    const {data:classList} = await app.request('/class',{
      city:currentCity,
      category:currentCategory.toUpperCase()
    });
    const {data:cityList} = await app.request('/city');
    const {data:categoryList} = await app.request('/category');

    let cityIndex,categoryIndex;
    cityList.result.forEach((ele,idx) => {
      if(ele.code === currentCity){
        cityIndex = idx
      }
    });
    categoryList.result.forEach((ele,idx) => {
      if(ele.name === currentCategory){
        categoryIndex = idx
      }
    });

    this.setData({
      classList:classList.result,
      cityList:cityList.result,
      categoryList:categoryList.result,
      categoryIndex,
      cityIndex,
      total:classList.total,
    });


    wx.setNavigationBarTitle({
      title:'广州H5班级列表'
    })

    // // 分校
    // wx.request({
    //   url: 'http://120.76.247.5:2020/api/city',
    //   success:(res)=>{
    //     console.log('city=',res.data);

    //     this.setData({
    //       cityList:res.data.data.result
    //     })
    //   }
    // })
    // // 学科
    // wx.request({
    //   url: 'http://120.76.247.5:2020/api/category',
    //   success:(res)=>{
    //     console.log('category=',res.data);

    //     this.setData({
    //       categoryList:res.data.data.result
    //     })
    //   }
    // })
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
    const {page,cityIndex,categoryIndex,cityList,categoryList,classList,total} = this.data;
    const city = cityList[cityIndex].code;
    const category = categoryList[categoryIndex].name.toUpperCase();

    if(classList.length>=total){
      return;
    }

    const newPage = page+1;
    this.setData({
      page:newPage
    },async ()=>{

      const {data:{result}} = await app.request('/class',{
        city,
        category,
        page:newPage
      })

      this.setData({
        classList:[...classList,...result]
      })
    })

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  async changeCity(e){
    console.log('event=',e)
    const cityIndex = e.detail.value;
    this.setData({
      cityIndex
    },()=>{
      // cityIndex修改后执行这里的代码
    })

    // 根据索引获取城市名
    const cityCode = this.data.cityList[cityIndex].code;
    const {data:classList} = await app.request('/class',{
      city:cityCode
    });
    this.setData({
      classList:classList.result
    })
  },
  async changeCategory(e){
    const categoryIndex = e.detail.value;

    this.setData({
      categoryIndex
    })

    // 根据索引获取学科名
    const category = this.data.categoryList[categoryIndex].name;
    const {data:classList} = await app.request('/class',{
      category
    });
    this.setData({
      classList:classList.result
    })
  }
})