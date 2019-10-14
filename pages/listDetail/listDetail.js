// pages/listDetail/listDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listInfo: [],
    listItem: []
  },
  goToMusic: function(e) {
    let id = e.currentTarget.dataset.id;
    console.log(id)
    wx.navigateTo({
      url: `../playSong/playSong?id=${id}`
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let that = this;
    let idx = options.idx;
    console.log(idx);
    wx.request({
      url: `http://localhost:3000/top/list?idx=${idx}`,
      success: function(res) {
        console.log(res);
        //console.log(res.data.playlist);
        that.setData({
          listInfo: res.data.playlist,
          listItem: res.data.playlist.tracks
        });
        //console.log(that.data.listInfo);
        //console.log(that.data.listItem);
        wx.setNavigationBarTitle({
          title: that.data.listInfo.name
        });



        var songer = [];
        let totalLength = res.data.playlist.tracks.length;
        //console.log(totalLength);
        for (let i = 0; i < totalLength; i++) {
          let str = "";
          let len = res.data.playlist.tracks[i].ar.length;

          for (let j = 0; j < len; j++) {
            if (j == 0) {
              str += res.data.playlist.tracks[i].ar[j].name;
            } else {
              str += " , " + res.data.playlist.tracks[i].ar[j].name;
            }
          }
          if (str.length >= 10) {
            str = str.slice(0, 20)
            str += "...";
          }
          songer.push(str);
        }
        //console.log(songer);

        that.setData({
          songList: res.data.data,
          songer: songer
        })

      }
    });
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