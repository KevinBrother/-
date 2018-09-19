Page({

  /**
   * 页面的初始数据
   */
  data: {
    play: true,
    pause: false,
    point:"00:25:00"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.data)
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
    
  },

  go: function() {
    console.log("this.data.play is ----- " + this.data.play);
    if(this.data.play) {
      this.start();
      this.startInterval();
    }else{
      this.stop();
      this.endInterval();
    }
  },

  start: function () {
    console.log("------start-------");
    this.setData({
      play: false,
      pause: true
    })
   
  },

  stop: function () {
    console.log("------stop-------");
    this.setData({
      play: true,
      pause: false
    })
  },

  restart: function() {
    this.stop();
    this.endInterval();
    this.endVibrate();
    this.setData({
      point: "00:25:00"
    })
  },

  // 开始计时器
  startInterval: function() {
    var that = this;
    that.data.setInter = setInterval(function() {
      var point = that.data.point;
      if (point == "00:00:00") {
        that.stop();
        that.endInterval();
        that.startVibrate();
        return;
      }

      var arr = point.split(":");
      var sum = parseInt(arr[1] * 60) + parseInt(arr[2]);
      sum -= 1;

      var rest1 = parseInt(sum / 60);
      arr[1] = rest1 < 10 ? "0" + rest1 : rest1;

      var rest2 = parseInt(sum % 60);
      arr[2] = rest2 < 10 ? "0" + rest2 : rest2;

      point = arr.join(":");

      that.setData({
        point: point
      }) 
    }, 1000)
  },

  // 关闭计时器
  endInterval: function() {
    var that = this;
    clearInterval(that.data.setInter);
  },

  // 开始震动
  startVibrate: function() {
    var that = this;
    that.data.vibrateInterval = setInterval(function() {
      wx.vibrateLong()
    }, 3000);
  },

  // 关闭震动
  endVibrate: function() {
    var that = this;
    clearInterval(that.data.vibrateInterval);
  }
})