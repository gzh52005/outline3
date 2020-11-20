// 云函数入口文件
// 小程序端通过wx.cloud获取云对象
// 云函数端通过wx-server-sdk获取云对象
const cloud = require('wx-server-sdk')

cloud.init({
  env:cloud.DYNAMIC_CURRENT_ENV,// 当前云函数所在的环境
})

const db = cloud.database();

const col = db.collection('city')

// 云函数入口函数
exports.main = async (event, context) => {
  // 操作数据库
  // 获取所有城市列表
  const {data} = await col.get();

  // 操作存储文件
  // cloud.uploadFile()

  // 调用其他云函数
  // const data = await cloud.callFunction({
  //   name:'category',
  //   data:{
  //     type:'query'
  //   }
  // })

  return data;
}