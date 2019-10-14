// pages/allList/allList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topList: [{
        "name": "云音乐新歌榜"
      },
      {
        "name": "云音乐热歌榜"
      },
      {
        "name": "网易原创歌曲榜"
      },
      {
        "name": "云音乐飙升榜"
      },
      {
        "name": "云音乐电音榜"
      },
      {
        "name": "UK排行榜周榜"
      },
      {
        "name": "美国Billboard周榜"
      },
      {
        "name": "KTV嗨榜"
      },
      {
        "name": "iTunes榜"
      },
      {
        "name": "Hit FM Top榜"
      },
      {
        "name": "日本Oricon周榜"
      }
    ],

    imgURL: [
      //云音乐新歌榜
      "http://p2.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg?param=150y150",

      //云音乐热歌榜
      "http://p2.music.126.net/GhhuF6Ep5Tq9IEvLsyCN7w==/18708190348409091.jpg?param=150y150",

      //网易原创歌曲榜
      "http://p1.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg?param=150y150",

      //云音乐飙升榜
      "http://p2.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=150y150",

      //云音乐电音榜
      "http://p2.music.126.net/5tgOCD4jiPKBGt7znJl-2g==/18822539557941307.jpg?param=150y150",

      //UK排行榜周榜
      "http://p1.music.126.net/VQOMRRix9_omZbg4t-pVpw==/18930291695438269.jpg?param=150y150",

      //美国Billboard周榜
      "http://p2.music.126.net/EBRqPmY8k8qyVHyF8AyjdQ==/18641120139148117.jpg?param=150y150",

      //KTV嗨榜
      "http://p2.music.126.net/H4Y7jxd_zwygcAmPMfwJnQ==/19174383276805159.jpg?param=150y150",

      //iTunes榜
      "http://p2.music.126.net/WTpbsVfxeB6qDs_3_rnQtg==/109951163601178881.jpg?param=150y150",

      //Hit FM Top榜
      "http://p2.music.126.net/54vZEZ-fCudWZm6GH7I55w==/19187577416338508.jpg?param=150y150",

      //日本Oricon周榜
      "http://p1.music.126.net/Rgqbqsf4b3gNOzZKxOMxuw==/19029247741938160.jpg?param=150y150",
    ]

  },
  goToList: function(e) {
    console.log(e.currentTarget.dataset.id);
    let id = e.currentTarget.dataset.id;
    console.log(id);
    wx.navigateTo({
      url: `../listDetail/listDetail?idx=${id}`
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // let that = this;
    // wx.request({
    //   url: 'http://localhost:3000/toplist',
    //   success: function(res) {
    //     console.log(res);
    //     //console.log(res.data.list);
    //     that.setData({
    //       resList: res.data.list
    //     });
    //   }
    // });

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})