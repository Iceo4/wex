# wex
使用的页面先注册页面数据和状态数据绑定  
onLoad: function(){  
    Wex.map(this,{  
      userInfo1: 'userInfo' //userInfo1 全局，userInfo页面数据
  })  
   
  },
  //log页面  
    onLoad: function(){  
    Wex.map(this,{  
      userInfo1: 'userInfo'
    })  
    console.log(Wex.store,111)  
    this.setData({  
      userInfo: Wex.getStore('userInfo1'), //取值初始化  hasUserInfo: true  
    })  
  },  
  //更改全局数据
  Wex.dispatch({
      userInfo1: userInfo,
      motto:2
    })
