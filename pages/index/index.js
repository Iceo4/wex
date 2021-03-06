//index.js
//获取应用实例
const app = getApp()
import Wex from '../../wex.js';
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    Wex.map(this,{
      userInfo1:'userInfo',
      motto:'motto'
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
        console.log(res.userInfo,222)
        Wex.dispatch({
          userInfo1:res.userInfo
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          Wex.dispatch({
            userInfo1: res.userInfo
          })
          this.setData({
           
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo;
    console.log()
    Wex.dispatch({
      userInfo1: e.detail.userInfo
    })
    this.setData({
      hasUserInfo: true
    })
  },
  onShow(){
    console.log(Wex.pagesList,222)
  }
})
