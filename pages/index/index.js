// pages/01/01.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  fontNumber: function(date) {
    const length = date.length
    if (length > 15) {
      var str = ''
      str = date.substring(0, 14) + '...'
      return str
    } else {
      return date
    }
  },

  toPlay: function (e) {
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
    wx.request({
      url: `http://localhost:3000/personalized`,
      success: res => {
        console.log(res.data.result[1].copywriter)
        // console.log(this.fontNumber(res.data.result[0].name))
        var arr = [];
        for (var i = 0; i < res.data.result.length; i++) {
          arr.push(this.fontNumber(res.data.result[i].name))
        }
   
        // console.log(arr)
        this.setData({
          coverImgUrl: res.data.result,
          arr: arr
        })
      }
    })

    wx.request({
      url: "http://localhost:3000/top/song?type=7",
      success: res => {
        console.log(res)
        //console.log(res.data.data[0].id);

        var songer = [];
        let totalLength = res.data.data.length;
        for (let i = 0; i < totalLength; i++) {
          let str = "";
          let len = res.data.data[i].artists.length;

          for (let j = 0; j < len; j++) {
            if(j==0){
              str += res.data.data[i].artists[j].name
            }else{
              str += " , " + res.data.data[i].artists[j].name
            }
          }
          if (str.length >= 10) {
            str = str.slice(0, 20) //从第1个字符开始截取,不会修改原数组，只是返回一个新的子数组
            // console.log(str);
            str += "...";

          }
          songer.push(str);
        }
        //console.log(songer);

        this.setData({
          songList: res.data.data,
          songer: songer
        })

      }
    })



  },
  toDetail: function(e) {
    console.log(e.currentTarget.dataset);
    wx.navigateTo({
      url: `../songList/songList?id=${e.currentTarget.dataset.id}`
    })
    wx.setStorageSync(
      "img", `${e.currentTarget.dataset.img}`
    )
    wx.setStorageSync(
      "text", `${e.currentTarget.dataset.text}`
    )
    wx.setStorageSync(
      "copywriter", `${e.currentTarget.dataset.copywriter}`
    )

    var value = wx.getStorageSync('img')
    console.log(value)
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