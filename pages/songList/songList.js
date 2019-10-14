// pages/04/04.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: '',
    text: '',
    copywriter: ''
  },

  toPlay: function (e) {
    let id = e.currentTarget.dataset.id;
    console.log(id)
    wx.navigateTo({
      url: `../playSong/playSong?id=${id}`
    })
  },

  fontNumber: function(date) {
    const length = date.length
    if (length > 16) {
      var str = ''
      str = date.substring(0, 16) + '...'
      return str
    } else {
      return date
    }
  },
  　

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options)
    wx.request({
      url: `http://localhost:3000/top/list?idx=${options.id}`,
      success: res => {
        console.log(res.data.playlist.tracks)
        var arr = [];
        for (var i = 0; i < res.data.playlist.tracks.length; i++) {
          arr.push(this.fontNumber(res.data.playlist.tracks[i].name))
        }
        var arr2 = [];
        for (var i = 0; i < res.data.playlist.tracks.length; i++) {
          arr2.push(this.fontNumber(res.data.playlist.tracks[i].al.name))
        }
        this.setData({
          songList: res.data.playlist.tracks,
          arr: arr,
          arr2: arr2
        })

      }
    })


    if (!value & !text & !copywriter) {
      var value = wx.getStorageSync('img');
      var text = wx.getStorageSync('text');
      var copywriter = wx.getStorageSync('copywriter');
      this.setData({
        value: value,
        text: text,
        copywriter: copywriter
      })
    } else {
      wx.removeStorageSync('img')
      this.setData({
        value: value,
        text: text,
        copywriter: copywriter

      })
    }


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