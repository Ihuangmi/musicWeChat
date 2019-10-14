// pages/playSong/playSong.js

var myutils = require("../../utils/utis.js");

const innerAudioContext = wx.createInnerAudioContext()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgSRC:"/resource/pause.png",
    beginORpause:"begin",
    id: "",
    songInfo: [],
    picUrl: "",
    name: "",
    lyric: [],
    lyric_length:[],
    lyricLatest: "",  //最新一句歌词
    lyricLatest1: "",  //最新一句歌词的上一句
    lyricLatest2: "",  //最新一句歌词的上上句
    allTime: null,    //按秒计算的原始的歌曲总时长
    finalTime: "",    //00:00格式的歌曲总时长
    sliderValue: 0,   //滑动条的位置
    nowTime: null,    //按秒计算的歌曲正在播放时间
    currentTime: "00:00" //00:00格式的歌曲正在播放时间
  },

  beginORpause:function(e){
    let that = this;
    if (that.data.beginORpause=="begin"){
      that.setData({
        beginORpause:"pause",
        imgSRC: "/resource/begin.png",
      });
      innerAudioContext.pause();
      console.log("暂停")
    }else{
      that.setData({
        beginORpause: "begin",
        imgSRC: "/resource/pause.png",
      });
      innerAudioContext.play();
      console.log("开始")
    }
  },

  play: function(innerAudioContext) {
    var that = this;

    innerAudioContext.onTimeUpdate(() => {
      if (!that.data.allTime) {
        var duration = innerAudioContext.duration;
        this.setData({
          allTime: duration
        })
      }
      if (that.data.finalTime == "") {
        var finalTime = myutils.getTime(that.data.allTime)
        this.setData({
          finalTime: finalTime
        })
      }

      var newTime = innerAudioContext.currentTime;
      var currentTime = myutils.getTime(newTime)//把秒计算的当前时间转换为00:00格式的当前时间
      this.setData({
        newTime: newTime,
        sliderValue:newTime,
        currentTime: currentTime
      });

      var lyricLatest = "scroll" + currentTime;
      //that.data.lyric是转换后的所有歌词集合
      //that.data.lyric.hasOwnProperty(currentTime)  检测歌词集合中是否含有键名为currentTime的元素
      if (that.data.lyric.hasOwnProperty(currentTime) && that.data.lyricLatest != lyricLatest){
        that.setData({
          lyricLatest2: that.data.lyricLatest1,
          lyricLatest1: that.data.lyricLatest,
          lyricLatest: lyricLatest

        })
      }

    })

  },

  slider_changing:function(e){
    innerAudioContext.pause();
  },

  slider_change: function (e) {
    innerAudioContext.pause();
    let that = this;
    //console.log(e);
    let newValue = e.detail.value;
    let currentTime = myutils.getTime(newValue)
    that.setData({
      sliderValue: newValue,
      nowTime: newValue, 
      currentTime: currentTime
    })
    innerAudioContext.seek(newValue);
    innerAudioContext.onSeeked(()=>{
      innerAudioContext.play();
    })

  },

  lyric: function(id) {
    let that = this;
    wx.request({
      url: `http://localhost:3000/lyric?id=${id}`,
      success: res => {
        //console.log(res);
        //console.log(res.data.lrc.lyric);
        let lyric = myutils.getLyric(res.data.lrc.lyric);
        let arr = [];

        let length = Object.keys(lyric);
        for(let i=0;i<length;i++){
          arr.push(i);
        }

        that.setData({
          lyric: lyric,
          lyric_length:arr
        });
        //console.log(that.data.lyric);
        
      }
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // wx.setNavigationBarColor({
    //   backgroundColor: '#81887F'
    // });
    // wx.setNavigationBarColor({
    //   frontColor: '#ffffff',
    //   backgroundColor: '#81887F',
    //   animation: {
    //     duration: 400,
    //     timingFunc: 'easeIn'
    //   }
    // })
    let that = this;
    let id = options.id;
    //console.log(id)
    that.setData({
      id: id
    });

    that.lyric(id);
    innerAudioContext.src = `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
    innerAudioContext.autoplay = true;
    that.play(innerAudioContext);

    wx.request({
      url: `http://localhost:3000/song/detail?ids=${id}`,
      success: function(res) {
        console.log(res);
        that.setData({
          songInfo: res.data.songs[0],
          picUrl: res.data.songs[0].al.picUrl,
          name: res.data.songs[0].name
        });
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