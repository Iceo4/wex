//logs.js
const util = require('../../utils/util.js')
import Wex from '../../wex.js';
Page({
  data: {
    // userInfo: {},
  },
  onLoad: function () {
    Wex.map(this, {
      userInfo1: 'userInfo'
    })
    console.log(Wex.store,111)
    this.setData({
      userInfo: Wex.getStore('userInfo1'),
      hasUserInfo: true
    })
  },
  bindViewTap: function (e) {
    let userInfo = this.data.userInfo ;
    userInfo.nickName = '123dsfsd';
    console.log()
    Wex.dispatch({
      userInfo1: userInfo,
      motto:2
    })
   
  },
  onShow() {
    console.log(Wex.pagesList, 222)
  }
})
