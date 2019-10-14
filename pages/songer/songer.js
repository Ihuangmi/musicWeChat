// pages/songer/songer.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info:[],
    songList:[]

  },

  goToPlay: function (e) {
    let id = e.currentTarget.dataset.id;
    console.log(id)
    wx.navigateTo({
      url: `../playSong/playSong?id=${id}`
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id;
    //console.log(id);
    let that = this;
    wx.request({
      url: `http://localhost:3000/artists?id=${id}`,
      success: function (res) {
        console.log(res);
        console.log(res.data.hotSongs);
        that.setData({
          info:res.data.artist,
          songList: res.data.hotSongs
        });
        //console.log(that.data.songList);
        //console.log(that.data.info);


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

  }
})