//index.js
//获取应用实例
var app = getApp()
Page( {
  data: {
    // 轮播
    images: [],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1200,
    // nav
    navs: [
      {
        image: 'https://m.youcai.xin/static/img/gravida.png',
        text: '孕妇'
      }, {
        image: 'https://m.youcai.xin/static/img/confinement.png',
        text: '月子'
      }, {
        image: 'https://m.youcai.xin/static/img/baby.png',
        text: '幼儿'
      }, {
        image: 'https://m.youcai.xin/static/img/old.png',
        text: '老人'
      }
    ],
    // item
    items: [
      {image: 'https://hamlet.b0.upaiyun.com/1609/22111/fe8765fa7f2f48cd87760c10ddd20ae6.jpg'},
      {image: 'https://hamlet.b0.upaiyun.com/1609/22111/84439174cad04497beda3a076663beb4.jpg'},
      {image: 'https://hamlet.b0.upaiyun.com/1609/22111/1987d8eb8b1748368b7f2382332c9718.jpg'},
      {image: 'https://hamlet.b0.upaiyun.com/1609/22111/fe8765fa7f2f48cd87760c10ddd20ae6.jpg'},
      {image: 'https://hamlet.b0.upaiyun.com/1609/22111/fe8765fa7f2f48cd87760c10ddd20ae6.jpg'},
      {image: 'https://hamlet.b0.upaiyun.com/1609/22111/fe8765fa7f2f48cd87760c10ddd20ae6.jpg'},
      {image: 'https://hamlet.b0.upaiyun.com/1609/22111/fe8765fa7f2f48cd87760c10ddd20ae6.jpg'},
      {image: 'https://hamlet.b0.upaiyun.com/1609/22111/fe8765fa7f2f48cd87760c10ddd20ae6.jpg'}
    ]
  },
  updatedata:function(){
  	console.log( 'ajax' )
  	var obj=this
  	wx.request({
      url: 'https://xcx.tianlian.cn/test.php',
      header: {
        'Content-Type': 'application/json'
      },
      success: function(res) {
      	console.log( 'ajax2' );
        console.log(res.data);
        obj.setData( {
        images: res.data
      })
    },
    fail:function(e){
    	console.log(e)
    }
  })
  },
  onLoad: function() {
    var that = this
    app.getUserInfo( function( userInfo ) {
      //更新数据
      that.setData( {
        userInfo: userInfo
      })
    })
        this.updatedata()
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo( {
      url: '../logs/logs'
    })
  },
  swiperchange: function(e) {
    //FIXME: 当前页码
    //console.log(e.detail.current)
  },
  go: function(event) {
    wx.navigateTo({
      url: '../list/index?type=' + event.currentTarget.dataset.type
    })
  },
  gos: function(event) {
    wx.navigateTo({
      url: '../template/index?type=' + event.currentTarget.dataset.type
    })
  }
})
